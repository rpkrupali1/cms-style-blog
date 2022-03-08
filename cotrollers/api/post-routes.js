const { Post, User, Comment } = require("../../models");
const router = require("express").Router();

// get all posts
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
    order: [["created_at", "DESC"]],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => res.status(500).json(err));
});

//get single post
router.get("/:id", (req, res) => {
  Post.findOne({
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No posts found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => res.status(500).json(err));
});

// create post
router.post("/", (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => res.status(500).json(err));
});

//update post
router.put("/:id", (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No posts found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No posts found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
