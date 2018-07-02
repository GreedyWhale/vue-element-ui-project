import axios from 'axios'
import { filterResponse } from './filterResponse'

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
  config => config,
  error => {
    return Promise.reject(error)
  }
)
Axios.interceptors.response.use(
  response => {
    return filterResponse(response)
  },
  error => {
    if (error.message && error.message.match(/timeout/)) {
      const config = error.config
      if (!config || !config.retry) return Promise.reject(error)
      if (config.method === 'post') return Promise.reject(error)
      config.__retryCount = config.__retryCount || 0
      if (config.__retryCount >= config.retry) {
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
    return Promise.reject(error)
  }
)

export { Axios }
