const mongoose = require('mongoose')

const mongoUrl = 'mongodb+srv://samad123:samad123@cluster0.pudzj30.mongodb.net/rides-clone?retryWrites=true&w=majority'


mongoose.connect(mongoUrl)



module.exports = mongoose