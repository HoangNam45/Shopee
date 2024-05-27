
class ProducController {
    // [GET] /products/:slug
    product_info(req,res, next) {
       res.render('product')
    }

}
module.exports = new ProducController