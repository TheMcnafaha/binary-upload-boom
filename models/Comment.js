const mongoose = require("mongoose");

const CommentSchema=new mongoose.Schema({
    user:String,
    text: String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Comment",CommentSchema)