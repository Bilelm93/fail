// express
const express=require('express')
const router = express.Router()
const { sendmsg , deletemsg , getmsg} = require('../controlles/msg')
const { msgRules, validator } = require('../middelware/validator')


// get msg
router.get('/getmsg' ,getmsg)


// send messge
router.post("/sendmsg" , msgRules(), validator,  sendmsg)


// delete message
 router.delete("/deletemsg/:_id", deletemsg)









// export
module.exports = router