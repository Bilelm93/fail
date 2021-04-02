const express=require('express')
const router = express.Router()
const {addpub , getpub , removepub, updatepub , filterpub } = require('../controlles/pub')
const { pubRules , validator } = require('../middelware/validator')






// add publication
router.post("/addpub" ,pubRules(), validator, addpub)

// get publication 
router.get('/getpub', getpub)


// update publication
 router.put("/updatepub/:_id", updatepub)

// remove publication
router.delete("/removepub/:_id", removepub)

// filter with id client
router.get("/filterpub/:id", filterpub)


// export
module.exports = router