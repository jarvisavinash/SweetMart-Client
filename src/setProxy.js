const { createProxyMiddleware } = require("http-proxy-middleware")


module.exports = app => {
    app.use(
        createProxyMiddleware('/sweetmart/customer/',
            {
                taget: 'http://localhost:8045',
                changeOrigin: true
            }
        )
    )
}