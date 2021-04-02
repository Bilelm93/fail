// mongoose
const mongoose = require('mongoose')


// schema
const {Schema , model }=mongoose

// creation schema 
const ClientSchema = new Schema ({
    name : {type : String , required : true},
    phone : {type : Number , required : true},
    email : {type : String , required : true },
    img: {type : String , required : true} , 
    password : {type : String , required : true},
    creatAt: {
        type: Date,
        default: new Date()
  }, 
  role:{
    type:String,
    default:"client"
},
})

// export to database
module.exports = Client = model("client", ClientSchema)