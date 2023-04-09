const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/route")
const multer = require("multer")
const app = express()

require("dotenv").config()

app.use(express.json())

const cors = require("cors")

app.use(cors());

mongoose.connect(process.env.Mongodb,{useNewUrlParser : true})
.then(()=>console.log("MongoDB is Connected"))
.catch((err)=>console.log(err))

app.use(multer().any())

app.use("/",router)

app.listen(process.env.PORT,()=>console.log("App is Running on PORT ",process.env.PORT))