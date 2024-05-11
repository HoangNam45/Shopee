const path = require('path');
module.exports = {
    entry: './src/public/js/main.js',
    output: {
        path: path.resolve(__dirname, 'src', 'public', 'js'),
        filename: 'bundle.js'
    },
    mode: 'development', // or 'production' as per your requirement
        // other webpack configuration options...
};