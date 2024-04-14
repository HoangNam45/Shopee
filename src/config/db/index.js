const mongoose = require('mongoose')
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/shoppe_dev');
        console.log('Connect successfully')
    } catch (error) {
        console.log('Fail')

    }
}
module.exports = { connect }