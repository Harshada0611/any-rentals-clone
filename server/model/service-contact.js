const mongoose = require("mongoose");

const serviceContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  message: String,
  serviceCategory: String,
  businessName: String,
  uniqueId: String,
  accountId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("service-enquiries", serviceContactSchema);
