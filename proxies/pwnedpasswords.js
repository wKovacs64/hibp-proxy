const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('User-Agent', process.env.UA);
});

module.exports = function(req, res) {
  proxy.web(req, res, {
    target: `https://api.pwnedpasswords.com/${req.url}`,
    secure: true,
  });
};
