const bcrypt = require('bcrypt')
const Client = require('../models/Client')
const jwt = require('jsonwebtoken')


// inscription
exports.signup =async(req,res)=>{
    try {
// req.body newclient
const {name ,email , phone, password}= req.body

// test if email exist in DB
const foundclient = await Client.findOne({email})

if(foundclient) {
   
    return res.status(400).send({
        errors:[{msg:"email should be unique please try again "}]
    })
}
// parametre de cryptage de password
const saltRounds = 10
const hashpwd = await bcrypt.hash(password, saltRounds)

// newclient
const newclient = new Client ({...req.body})
  newclient.password = hashpwd     //  crypty password

  //  save
await newclient.save() 

// creation token 
const token = jwt.sign(
    {id: newclient._id}, 
    process.env.SECRET_KEY,
      { expiresIn: '5h' });


 res.status(200).send({msg:"account created succesfully" , client : newclient , token})


// if other error
    }catch (error){
        res.status(400).send({
            errors :[{msg : "you cant register "}]
        })
    }
}


// login
exports.signin =async(req,res)=>{
    try {

   // req.body newclient
const { email , password}= req.body

// check if client exist
const foundclient = await Client.findOne({email})

        if(!foundclient) {
   
            return res.status(400).send({ errors:[{msg:"error in email"}] })
        }
        // check the password true or false
        const checkpwd = await bcrypt.compare(password, foundclient.password )
       
         if(!checkpwd){ return res.status(400).send({ errors:[{msg:"error in password"}] })  }

        // creation token 
         const token = jwt.sign(
            {id: foundclient._id}, 
            process.env.SECRET_KEY,
              { expiresIn: '5h' });

         res.status(200).send({msg:"login succesfully" , client : foundclient , token })

        
    } catch (error) {
        res.status(400).send({
            errors :[{msg : "you can't login"}]
        })
    }
}



//  remove client
exports.deleteclient =async(req,res)=>{
    try {

    //  import id in URL
      const { _id } = req.params

      const CL = await Client.findByIdAndDelete({ _id })
      
        res.json({ msg: "client deleted succesfully", CL });
       

// if other error
    }catch (error){
        res.status(400).send({
            errors :[{msg : "client not deleted "}]
        })
    }
}



//  get liste client
exports.getcl = async(req, res)=>{
    try {
        Client.find({role:"client"})
        .then(client =>res.send(client))
    } catch (error) {
        res.status(400).send({
            errors :[{msg : "probleme fetch list "}]
        })
    }
}



// admin 
exports.admino =async(req,res)=>{

    try {
        Client.find()
        .then(admin =>res.send(admin))
        // const admin = await Client.find({role:"admin"});
        // res.json({msg:"User",users});
    } catch (error) {
        res.json({msg:"error"});
    }
    
  }





