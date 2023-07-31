const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  name: "",
  email: "",
  contact: "",
  password: "",
  accountType: "",
});

module.exports = mongoose.model("account", accountSchema);
