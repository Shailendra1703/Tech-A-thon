const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();
const Blog = require("../modals/blog");

router.get("/", (req, res) => {
  res.redirect("/blogs");
});

router.get("/blogs", blogController.blog_index);

router.get("/blogs/create", blogController.blog_create);

router.post("/blogs", blogController.blog_post);

//route parmeters :id

router.get("/blogs/:id", blogController.blog_details);

router.delete("/blogs/:id", blogController.blog_delete);

module.exports = router;
