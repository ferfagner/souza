const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // ajuste isso para o caminho da sua API
    createProxyMiddleware({
      target: 'https://www.bling.com.br',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/Api/v3/contatos', // ajuste conforme necessário
      },
    })
  );
};
