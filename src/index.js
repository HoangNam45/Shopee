const express = require('express')
const path = require('path')
const app = express()

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

app.get('/', (req, res) => {
    res.render('home')
})

app.listen( 5000, () => {
    console.log('server is listening on port 5000..')
})