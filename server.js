console.clear()

// require
const express = require('express')
const connectDB = require('./config/connectDB')
require('dotenv').config()



// instance app
const app = express()


// connection DB
connectDB()


// routing



// middleware global 
app.use(express.json())


// middleware local
app.use("/api/client" , require("./router/client"))
app.use("/api/msg" , require("./router/msg"))
app.use("/api/pub" , require("./router/pub"))


// port
const PORT = process.env.PORT

// create server
app.listen(PORT , err=> err?console.log("error"): console.log(`server is running on port ${PORT}`))