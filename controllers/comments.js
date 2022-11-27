const Comment =require("../models/Comment")
const Post = require("../models/Post");
module.exports={
    //send comment to db
    postComment: async(req,res)=>{
 
        try {
        //  created post
            await Comment.create({
                userId:req.user._id,
                postId:req.params.postId,
                title:req.body.title,
                text:req.body.text,  

            })
        } catch (error) {
            console.log(error);
        }
    },
    getComment:  async(req,res)=>{
        try {
            const post= await Post.findById(req.params.postId).lean()
            res.render("addComment.ejs",{post:post})
        } catch (error) {
            console.log(err);
        }
    }

}