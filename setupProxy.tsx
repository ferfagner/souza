const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/Api', 
    createProxyMiddleware({
      target: 'https://www.bling.com.br',
      changeOrigin: true,
      pathRewrite: {
        '^/Api': '', 
      },
    })
  );
};
