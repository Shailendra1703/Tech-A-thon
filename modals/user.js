const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  const user = this;

  bcrypt.hash(user.password, 10, function (err, encrypted) {
    user.password = encrypted;
    next();
  });
});

const User = mongoose.model("User", UserSchema);
module.export = User;
