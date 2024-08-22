require('dotenv').config()

const connectMongoDB = require("./db/index.js");
const app = require('./app.js')

const Port = process.env.PORT || 5000;
connectMongoDB()
.then(()=>{
    app.listen(Port,()=>{
      console.log(`Server is listening at Port: ${Port}`)
    })
})
.catch((error)=>{
    console.log("Connection failed with mongoDB...",error)
})