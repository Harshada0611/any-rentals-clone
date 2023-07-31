const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  serviceCategory: String,
  blogImage: String,
  description: String,
  accountType: String,
  accountId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("blogs", blogSchema);
