const router = require("express").Router();
const { Comment, Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => res.status(500).json(err));
});

router.post("/", withAuth,(req, res) => {
  if (req.session) {
    console.log(req.body.comment_text, req.session.user_id, req.body.post_id);
    Comment.create({
      comment_text: req.body.comment_text,
      //user_id: req.body.user_id,
      user_id: req.session.user_id, //use id from session
      post_id: req.body.post_id,
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ err: "Error creating comment" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => res.status(500).json(err));
  }
});

router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No record found with given id" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
