const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/data',

    createProxyMiddleware({
      target: 'http://localhost:4500',
      changeOrigin: false,
    })
  );
};

/* reprezintă o configurație pentru utilizarea unui middleware de proxy în cadrul unei aplicații create cu Node.js și Express.*/

/* configurează un proxy pentru ruta /data, astfel încât toate cererile către această rută să fie direcționate către serverul de destinație specificat (http://localhost:4500).
 Proprietatea changeOrigin este setată pe false, ceea ce înseamnă că antetul Host din cerere nu va fi modificat.*/