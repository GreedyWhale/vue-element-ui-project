<template>
  <div class="home">
    
  </div>
</template>

<script>
import { Axios } from '../utils/methods'
export default {
  created () {
    Axios.post('api/login', {})
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
