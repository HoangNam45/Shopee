const Product = require('../models/Product')
const User = require('../models/User')
class ProducController {
    // [GET] /products/:slug
    product_info(req,res, next) {
        Product.findOne({slug: req.params.slug})
            .then(product => {
                User.findOne({_id: product.seller_id})
                    .then(user => {
                        const data = {
                            account: req.session.account || null,
                            avatar: req.session.avatar
                        };
                    
                        res.render("product", {product, data, user})
                    })
                    .catch(next);  
            })
            .catch(next);
    }

}
module.exports = new ProducController