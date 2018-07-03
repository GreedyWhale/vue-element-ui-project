import Router from 'vue-router'
import { showDialog } from '../dialog'

const router = new Router()

const filterResponse = response => {
  if (response.data.stat) {
    switch (response.data.stat) {
      case 1:
        return Promise.resolve(response.data)
      case 2:
        showDialog(response.data.msg)
        return Promise.reject(response.data)
      case 13:
        return router.push({ path: '/login' })
      default:
        showDialog(response.data.msg)
        return Promise.reject(response.data)
    }
  }
  return Promise.resolve(response.data)
}

export {
  filterResponse
}
