const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      // target: 'http://192.168.1.146:8080',
      changeOrigin: true,
    }),
  );
};
