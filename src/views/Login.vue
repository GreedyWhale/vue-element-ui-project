<template>
  <div class="container flex-center">
    <div class="login-box">
      <ul class="flex-center tab-wrap">
        <li v-for="tab of tabList" :key="tab">
          {{ tab }}
        </li>
      </ul>
      <div class="input flex-center">
        
      </div>
      <div class="input flex-center">
        
        <BaseButton
          class="get-auth-code-button"
          :config="buttonConfig"
        >获取验证码</BaseButton>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabList: ['账号密码登录', '手机号登录'],
      isSmsLogin: false,
      errorTip: '',
      buttonConfig: {
        iconName: 'loading',
        isLoading: true,
        position: 'right'
      }
    }
  },
  computed: {
    inputConfig () {
      return {
        accountPlaceholder: this.isSmsLogin ? '请输入手机号' : '请输入账号',
        passwordPlaceholder: this.isSmsLogin ? '请输入验证码' : '请输入密码',
        accountInputIcon: this.isSmsLogin ? '#i-phone' : '#i-user'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  background: url('../assets/images/login/login_bg.jpg') no-repeat center / 100% 100%;
  height: 100vh;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  .login-box {
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    .tab-wrap {
      margin-bottom: 20px;
      & > li{
        padding: 0 20px 20px;
        flex: 1;
        align-items: center;
        position: relative;
        line-break: 40px;
        text-align: center;
        cursor: pointer;
        &:hover {
          color: #69b3fc;
        }
        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: #69b3fc;
        }
      }
    }
    .input {
      margin-bottom: 20px;
      width: 400px;
    }
    .get-auth-code-button {
      flex: none;
      margin-left: 20px;
      border-radius: 8px;
    }
  }
}
.flex-center {
  display: flex;
  align-items: center
}
</style>
