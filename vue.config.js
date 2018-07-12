
module.exports = {
  baseUrl: process.env.VUE_APP_DOMAIN,
  devServer: {
    open: true,
    port: 3000,
    hot: true,
    https: true,
    host: 'localhost',
    compress: true,
    proxy: {
      '/toop_console': {
        target: '',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/toop_console': ''
        },
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.')
            return './public/index.html'
          }
        }
      }
    }
  }
}
