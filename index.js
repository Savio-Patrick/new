
const express = require('express')

const dotenv = require('dotenv').config()
    const cors = require('cors')
const {mongoose} = require('mongoose')
const app = express();
//db connect
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connected"))
.catch((err) => console.log("db not connected",err))

//mddleware
app.use(express.json())
   
    
    app.use('/',require('../server/routes/authroutes'))
    const port = 8000;
    app.listen(port, () => console.log(`Server is running on ${port}`))

    