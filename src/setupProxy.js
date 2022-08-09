const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/user', {
    target: 'http://154.38.116.197',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/user": ""
    }
  }))
}
