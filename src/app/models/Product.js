const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug); // Sử dụng plugin trong Mongoose

const Schema = mongoose.Schema;

const Product = new Schema({
    product_img: { type: String },
    product_name: { type: String, minLength: 1, required: true },
    product_price: { type: String, minLength: 1, required: true },
    slug: { type: String, slug: 'product_name', unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', Product);