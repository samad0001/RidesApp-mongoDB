const express = require('express')
const router = express.Router()
const Rides = require('./models/Rides')




router.get('/getRides' , async (req , res)=>{
    //get a rides 
    const  rides = await Rides.find({})

    res.send({message:'Success' , data : rides})
})
router.post('/postRide' , (req , res)=>{
    //add a rides into database
    const data = req.body

    try{
        const ridesData = new Rides(data)
        ridesData.save()
        // console.log('request come----------',req.body)
        res.send({message:'Successfully stored to Database' })
    }catch(e){
        res.send({error : e.message})
    } 
    
})
router.put('/updateRide' , (req , res)=>{
    //update a rides into from database
    res.send({message:'Success' , data : rides})
})
router.delete('/deleteRide' , (req , res)=>{
    //delete a ride from database
    res.send({message: 'Ride delete successfull' , data : rides})
})


module.exports = router 