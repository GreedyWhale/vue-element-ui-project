export default {
  data () {
    return {
      tabList: ['账号密码登录', '手机号登录'],
      isSmsLogin: false,
      errorTip: '请输入用户名',
      activeIndex: 0,
      userName: '',
      password: '',
      phoneNumber: '',
      authCode: ''
    }
  },
  computed: {
    inputConfig () {
      return {
        accountPlaceholder: this.isSmsLogin ? '请输入手机号' : '请输入账号',
        passwordPlaceholder: this.isSmsLogin ? '请输入验证码' : '请输入密码',
        accountInputIcon: this.isSmsLogin ? 'phone' : 'user'
      }
    }
  },
  methods: {
    toggleTab (index) {
      this.activeIndex = index
      this.isSmsLogin = !this.isSmsLogin
    },
    setInputInfo (type, value) {
      this[type] = value
    }
  }
}
