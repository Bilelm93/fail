//require json web token
const jwt=require('jsonwebtoken');

//require the client Schema
const Client = require('../models/Client');

const isAdmin = async (req,res,next)=>{
    try {
        const token = req.headers['auth'];
    //check for token
    if(!token)
        return res.status(401).json({msg:"No Token authorization denied"});
        const decoded= await jwt.verify(token,process.env.SECRET_KEY);
    //Add admin from payload
        const foundadmin = await Client.findById(decoded.id);

    //check for User
    if(!foundadmin){
    return res.status(401).json({msg:" authorization denied"});
    }

    // check for admin
    if(client.role!="admin"){
        return res.status(401).json({msg:'is not admin'});
    }
    //creat User
    req.client=foundadmin;
    next();

    } catch (error) {
        res.status(400).json({msg:'Token is not valid'});
        
    }
}
module.exports=isAdmin;