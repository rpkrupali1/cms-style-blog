const router = require("express").Router();
const { Post, User } = require("../models");
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
      res.render("homepage", { posts });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/login", (req, res) => {
  if(req.session.loggedIn){
    res.redirect('/');
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
