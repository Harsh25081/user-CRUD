const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        fname:{type:String,required:true},
        lname:{type:String,required:true},
        age:{type:Number,required:true},
        gender:{type:String,required:true,enum:["Male","Female","Others"]},
        email:{type:String,required:true},
        profilepic:{type:String,required:true}
    },{timestamps:true}
)

module.exports = mongoose.model("User",userSchema)