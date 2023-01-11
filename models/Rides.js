const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RidesSchema = new Schema({

        pickup : {lat : Number , lng : Number},
         carName : {
            type: String,
            required : true
         } 


})

const Rides = mongoose.model('Rides' , RidesSchema)

module.exports = Rides