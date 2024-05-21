
class ProducController {
    // [GET] /products/:slug
    product_info(req,res, next) {
       res.send('Đang làm giao diện cho ' + req.params.slug)
    }

}
module.exports = new ProducController