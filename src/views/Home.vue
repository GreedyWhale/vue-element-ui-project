<template>
  <div class="home">
    
  </div>
</template>

<script>
import { Axios } from '../utils/methods'
export default {
  created () {
    Axios.post('/toop_console/login_login', {
      userName: 'admin',
      password: 654321,
      remember: 'No'
    })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
