<template>
  <div class="home">
    <el-button>123</el-button>
  </div>
</template>

<script>
import { Axios } from '../utils/methods'
export default {
  created () {
    Axios.get('/example/1526737193301')
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
