const express = require('express')
const path = require('path')
const app = express()

const route = require('./routes/index')
const db = require('./config/db/index')

//Connect to DB
db.connect();

// Setup static file
app.use(express.static(path.join(__dirname, 'public')))

// Setup handlebar(template engine)
const handlebars = require('express-handlebars')
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//

route(app)

app.listen( 5000, () => {
    console.log('server is listening on port 5000..')
})