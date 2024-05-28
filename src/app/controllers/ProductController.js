const Product = require('../models/Product')
class ProducController {
    // [GET] /products/:slug
    product_info(req,res, next) {
        Product.findOne({slug: req.params.slug})
            .then(product => {
                res.render("product", {product})
            })
            .catch(next);
    }

}
module.exports = new ProducController