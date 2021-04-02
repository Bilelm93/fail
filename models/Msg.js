// mongoose
const mongoose = require('mongoose')

// if( !mongoose.Types.ObjectId.isValid(id) ) return false;
// schema
const {Schema , model}=mongoose

// creation schema 
const MsgSchema = new Schema ({
    title : {type : String , required : true},
    desc : {type : String , required : true},
    
    sendAt: {
        type: Date,
        default: new Date()
  }
 
//   client:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'client'
// },
})

// export to database
module.exports = Msg = model("msg", MsgSchema)