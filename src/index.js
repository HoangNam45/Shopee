const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override')

const route = require('./routes/index')
const db = require('./config/db/index')
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

// Setup static file
app.use(express.static(path.join(__dirname, 'public')))

// Setup handlebar(template engine)
app.use(methodOverride('_method'))
const handlebars = require('express-handlebars')
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//
app.use(express.urlencoded({ extended: true }));
route(app)

app.listen( 5000, () => {
    console.log('server is listening on port 5000..')
})
