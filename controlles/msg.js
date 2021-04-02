const Msg = require('../models/Msg')



// get a message
exports.getmsg = async(req, res)=>{
    try {
        // const MSG = await Msg.find()
       
        Msg.find()
        .then(msg =>res.send(msg))

    } catch (error) {
        res.status(400).send({
            errors :[{msg : "probleme "}]
        })
    }
}
// send a message
exports.sendmsg =async(req,res)=>{
    try {
// req.body newmsg
const {title , desc}= req.body

// new message
const newmsg = new Msg ({...req.body})
 
  //  save
await newmsg.save() 
 res.status(200).send({msg:"message sended succesfully" , message : newmsg})


// if other error
    }catch (error){
        res.status(400).send({
            errors :[{msg : "you can't send a message "}]
        })
    }
}
// delete a message
exports.deletemsg =async(req,res)=>{
    try {

    //  import id in URL
      const { _id } = req.params

      const MSG = await Msg.findByIdAndDelete({ _id })
      
        res.json({ msg: "message deleted", MSG });
       

// if other error
    }catch (error){
        res.status(400).send({
            errors :[{msg : "msg not deleted "}]
        })
    }
}



