const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  console.log(req.session);
  Post.findAll({
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
    order: [["created_at", "DESC"]],
  })
    .then((dbPostdata) => {
      const posts = dbPostdata.map((post) => post.get({ plain: true }));
      res.render("homepage", { 
        posts,
        loggedIn: req.session.loggedIn
       });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
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
  })
    .then((dbPostdata) => {
      if (!dbPostdata) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      //serialize the data
      const post = dbPostdata.get({ plain: true });
      res.render("singlepost", { 
        post,
        loggedIn: req.session.loggedIn
       });
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
