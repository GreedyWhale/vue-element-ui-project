module.exports = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
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
