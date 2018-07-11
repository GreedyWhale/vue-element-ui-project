<template>
  <div class="home">
    123
  </div>
</template>

<script>
export default {
  created () {
    this.ajax.post('/toop_console/login_login', {
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
