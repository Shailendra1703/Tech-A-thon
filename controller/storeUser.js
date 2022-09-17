const User = require("../modals/user");

module.exports = (req, res) => {
  User.create(req.body, (error, user) => {
    if (error) return res.redirect("/register");

    alert("Registered succesfully");
    res.redirect("/blogs");
  });
};
