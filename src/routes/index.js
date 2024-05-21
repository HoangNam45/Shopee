

const siteRouter = require('./site')
const meRouter = require('./me')
const productRouter = require('./product')
function route(app) {
    app.use('/me', meRouter)
    app.use('/products', productRouter)
    app.use('/', siteRouter)
}
module.exports = route