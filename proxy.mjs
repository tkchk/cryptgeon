import httpProxy from 'http-proxy'
import http from 'http'

const proxy = httpProxy.createProxyServer({})

var server = http.createServer(function (req, res) {
  const target = req.url.startsWith('/api/') ? 'http://localhost:5000' : 'http://localhost:3000'
  proxy.web(req, res, { target })
})

server.listen(1234)
