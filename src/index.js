const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override')

const route = require('./routes/index')
const db = require('./config/db/index')

// Setup static file
app.use(express.static(path.join(__dirname, 'public')))
//
const session = require('express-session');
app.use(session({
    secret: 'your-secret-key', // Chuỗi bí mật để mã hóa phiên
    resave: false, // Không lưu lại phiên nếu không có sự thay đổi
    saveUninitialized: false, // Không lưu phiên chưa được khởi tạo
    cookie: { secure: false } // Sử dụng cookie không an toàn (false cho http, true cho https)
}));
//Connect to DB
db.connect();



// Setup handlebar(template engine)
app.use(methodOverride('_method'))
const handlebars = require('express-handlebars')
const hbs = handlebars.create({
    // Đăng ký helper
    helpers: {
        formatCurrency: function (number) {
            return new Intl.NumberFormat('vi-VN').format(number);
        },
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        range: (from, to) => {
            const range = [];
            for (let i = from; i <= to; i++) {
                range.push(i);
            }
            return range;
        },
        gt: (a, b) => a > b,
        lt: (a, b) => a < b,
        eq: (a, b) => a===b,
        
    },
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    extname: '.hbs' // Phần mở rộng cho file template
    
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//
app.use(express.urlencoded({ extended: true }));
route(app)

app.listen( 5000, () => {
    console.log('server is listening on port 5000..')
})
