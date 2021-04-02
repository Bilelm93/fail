const mongoose = require('mongoose')



const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true , useUnifiedTopology: true})
        console.log('DB connected')

    } catch (error) {
        console.log('DB not connected', error)
    }
}


// export
module.exports = connectDB ; 