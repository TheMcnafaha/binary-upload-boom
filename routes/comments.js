const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//desc given a post id, show all of the comments in that post
//route GET comment/:postId
router.get("/:postId",commentController.getComment)

//desc given a comment, add it to a db and return to post with comment on it
//route POST comment/:commentId
router.post("/:postId",ensureAuth,commentController.postComment)

module.exports = router;