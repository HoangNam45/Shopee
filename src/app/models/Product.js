const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema({
    product_img: { type: String},
    product_name: { type: String, minLength: 1},
    product_price: {type: String, minLength: 1},
}, {
    timestamps:true,
});

module.exports = mongoose.model('Product', Product);