import Router from 'vue-router'
import { Message } from 'element-ui'

const router = new Router()

const filterResponse = response => {
  if (response.data.stat) {
    switch (response.data.stat) {
      case 1:
        return Promise.resolve(response.data)
      case 2:
        Message({
          showClose: true,
          message: response.data.msg,
          type: 'error'
        })
        return Promise.reject(response.data)
      case 13:
        return router.push({ name: 'login' })
      default:
        Message({
          showClose: true,
          message: response.data.msg,
          type: 'error'
        })
        return Promise.reject(response.data)
    }
  }
  return Promise.resolve(response.data)
}

export {
  filterResponse
}
