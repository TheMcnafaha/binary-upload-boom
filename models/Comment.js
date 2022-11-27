const mongoose = require("mongoose");

const CommentSchema=new mongoose.Schema({
    userId:{   type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title:String,
    text: String,
    createdAt:{
        type:Date,
        default:Date.now,
        required: true
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userName:String
})

module.exports=mongoose.model("Comment",CommentSchema)