const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./Routes/blogRoutes");
const app = express();

//mongoose in an ODM object documenting mapping libraray
const Mongodb =
  "mongodb+srv://Shailendra:allsmall786@practice.xds41.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(Mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

//  for static file like css
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //middleware

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/home", (req, res) => {
  res.render("home", { title: "Home" });
});

app.use(blogRoutes);

app.use("/register", (req, res) => {
  res.render("user.ejs", { title: "Register" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
