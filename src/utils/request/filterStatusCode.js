import { showDialog } from '../dialog'

const filterStatusCode = error => {
  switch (error.response.status) {
    case 404:
      return showDialog('请求错误,未找到该资源')
    case 500:
      return showDialog('服务器端出错')
    case 503:
      return showDialog('服务不可用')
    default:
      return showDialog('恭喜你，获得解锁神秘错误成就')
  }
}

export {
  filterStatusCode
}
