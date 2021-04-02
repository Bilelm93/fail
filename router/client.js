// express
const express=require('express')

// import controlles
const {signup , signin , deleteclient , getcl , admino } = require('../controlles/client')
const isAuth = require('../middelware/isAuth')
const isAdmin = require('../middelware/isAdmin')
const { registerRules, validator, loginRules } = require('../middelware/validator')


const router = express.Router()






// register
router.post('/signup',registerRules() , validator, signup)


// login
  router.post("/signin", loginRules(), validator ,signin)


// current user
router.get('/current', isAuth,  (req , res)=>{
  res.send(req.client)
})


// admin route
// router.get('/admino' ,  admino)

router.post('/admino' , admino)






// delete message
router.delete("/deleteclient/:_id", deleteclient)



// get liste client
router.get("/getcl", getcl)




// export
module.exports = router