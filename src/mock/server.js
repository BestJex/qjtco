const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./db')
const middlewares = jsonServer.defaults()
server.use(middlewares)

server.use(jsonServer.rewriter({
    '/api/home': '/api_home',
    '/api/about': '/api_about',
    '/api/brand': '/api_brand',
    '/api/contacts': '/api_contacts',
    '/api/employ': '/api_employ',
    '/api/kit': '/api_kit',
    '/api/news': '/api_news',
    '/api/newsDetails': '/api_newsDetails',
}))

server.use(jsonServer.router(db))
server.listen(3000, () => {
    console.log('JSON Server is running')
})