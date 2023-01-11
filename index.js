const express = require('express')
const app = express()
const db = require('./mongoodr')

app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Server successfully run on server 3000')
})

db.connection
.once('open' , ()=> console.log('connected to db----'))
.on('error',(err)=> console.log('database error---' , err))


// app.use('/' , (req , res)=>{
//     res.send([
//         {
//           "userId": 1,
//           "id": 1,
//           "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//           "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         },
//         {
//           "userId": 1,
//           "id": 2,
//           "title": "qui est esse",
//           "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//         }])
// })

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/' , require('./router.js'))

