const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  { timestamps: true },
  { typeKey: "$type" }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
