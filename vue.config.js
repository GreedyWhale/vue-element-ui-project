module.exports = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 12345,
    https: true,
    hotOnly: true,
    proxy: {
      '/toop_console': {
        target: 'https://stagingmis.innmall.cn/toop_console/',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/toop_console': ''
        }
      }
    }
  }
}
