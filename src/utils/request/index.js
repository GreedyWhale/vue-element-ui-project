import axios from 'axios'
import { filterResponse } from './filterResponse'
import { filterStatusCode } from './filterStatusCode'
import { closeLoading } from './closeLoading'
import { Loading } from 'element-ui'
import { TOKEN } from '../constant'

let isLoading

const Axios = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT,
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

Axios.defaults.retry = 3
Axios.defaults.retryDelay = 10000

Axios.interceptors.request.use(
  config => {
    isLoading = config.isLoading || false
    if (!isLoading) {
      isLoading = Loading.service({
        text: '拼命加载中',
        background: 'rgba(0, 0, 0, 0.8)'
      })
    }
    if (window.localStorage.getItem(TOKEN)) {
      config.headers.Authorization = window.localStorage.getItem(TOKEN)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
Axios.interceptors.response.use(
  response => {
    isLoading = closeLoading(isLoading)
    return filterResponse(response)
  },
  error => {
    if (error.message && error.message.match(/timeout/)) {
      const config = error.config
      if (!config || !config.retry || config.method === 'post') {
        isLoading = closeLoading(isLoading)
        return Promise.reject(error)
      }
      config.__retryCount = config.__retryCount || 0
      if (config.__retryCount >= config.retry) {
        isLoading = closeLoading(isLoading)
        return Promise.reject(error)
      }
      config.__retryCount += 1
      const backOff = new Promise(function (resolve) {
        setTimeout(function () {
          resolve()
        }, config.retryDelay || 1)
      })
      return backOff.then(function () {
        return Axios(config)
      })
    }
    isLoading = closeLoading(isLoading)
    filterStatusCode(error)
    return Promise.reject(error)
  }
)

export { Axios }
