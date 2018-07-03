import { MessageBox } from 'element-ui'

const showDialog = (message) => {
  MessageBox.confirm(message, {
    type: 'error',
    center: true,
    showCancelButton: false,
    showClose: false
  })
}

export {
  showDialog
}
