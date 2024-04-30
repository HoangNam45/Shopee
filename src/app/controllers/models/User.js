const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    account: { type: String, minLength: 1 },
    password: { type: String, minLength: 1},
    avatar: {
        type: String,
        default: '/img/0921fc87aa989330b8d403014bf4f340.jpg' // Đường dẫn đến ảnh đại diện mặc định
      },
}, {
    timestamps:true,
});

module.exports = mongoose.model('User', User);