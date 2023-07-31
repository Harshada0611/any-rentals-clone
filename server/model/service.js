const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new mongoose.Schema({
  serviceType: String,
  subCategory: String,
  businessName: String,
  description: String,
  subServices: [{ type: String }],
  keyFeatures: [{ type: String }],
  images: [{ type: String }],
  //location
  landmark: String,
  city: String,
  state: String,
  country: String,
  uniqueId: String,
  postedOn: String,
  // reference id
  accountId: mongoose.Schema.Types.ObjectId,
});
module.exports = mongoose.model("service", serviceSchema);
