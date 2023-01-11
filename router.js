const express = require('express')
const router = express.Router()



router.use('/rides' , require('./rides.js'))



module.exports = router