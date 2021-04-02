const Pub = require('../models/Pub')



// get a publication
exports.getpub = async(req, res)=>{
    try {
        // const PUB = await
      
         Pub.find()
         .then(pub =>res.send(pub))
       
        // res.json({ msg: "liste of publication", PUB });
    } catch (error) {
        res.status(400).send({
            errors :[{msg : "probleme "}]
        })
    }
}



// add a publication
exports.addpub =async(req,res)=>{
    try {
// req.body newmsg
const {title , desc , img}= req.body


const newpub = new Pub ({...req.body})
 
  //  save
await newpub.save() 
 res.status(200).send({msg:"publicxation added succesfully" , message : newpub})


// if other error
    }catch (error){
        res.status(400).send({
            errors :[{msg : "publication not added "}]
        })
    }
}



// delete a publication
exports.removepub =async(req,res)=>{
    try {

    //  import id in URL
      const { _id } = req.params

      const PUB = await Pub.findByIdAndDelete({ _id })
      
        res.json({ msg: "publication deleted succesfully", PUB });
       

// if other error
    }catch (error){
        res.status(400).send({
            errors :[{msg : "msg not deleted "}]
        })
    }
}



// update a publication
exports.updatepub =async(req,res)=>{
    try {

        const { _id } = req.params;
            
            const PUB = await Pub.findByIdAndUpdate(_id, { $set: req.body }, { new: true, $upsert: true  });
            res.json({ msg: "Publication edited succesfully", PUB });

// if other error
    }catch (error){
        res.status(400).send({
            errors :[{msg : "publication not edit "}]
        })
    }
}



// filter pub 

exports.filterpub =async(req,res)=>{
    try {


        Pub.find({ client: req.params.id })
        .then(pub =>res.send(pub))


        

// if other error
    }catch (error){
        res.status(400).send({
            errors :[{msg : "problem in filter "}]
        })
    }
}
