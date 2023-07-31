const router = require("express").Router();
const moment = require("moment");
const Service = require("../model/service");
const accountMiddleware = require("../midleware/account");

//ADD NEW PRODUCT
router.post("/add-service", async (req, resp) => {
  console.log("token is from post form", req.accountId);
  console.log(req.body);
  const date = moment().format("DD/MM/YYYY");
  try {
    const newService = await Service.create({
      ...req.body,
      postedOn: date,
      // accountId: req.accountId,
    });
    // image: req.files.map(file => file.filename)
    console.log(newService);
    resp.json({
      success: true,
      message: "Data created successfully",
      Service: newService,
    });
  } catch (err) {
    resp.json({
      message: "something is wrong in positng complete form data",
      err,
    });
  }
});

// MY PROPERTIES login required
router.get("/my-services", accountMiddleware, async (req, res) => {
  console.log("thid is id", req.accountId);
  let myServiceList = await Service.find({ accountId: req.accountId });

  try {
    if (myServiceList) {
      res.json({ success: true, list: myServiceList });
    } else {
      res.json({ success: false, msg: "No Data Found" });
    }
  } catch (er) {
    res.json({ success: false, message: er.message });
  }
});

//To fetch all listings no login required(for customer purpose)
router.get("/all-services", async (req, resp) => {
  try {
    let allServiceListings = await Service.find();
    if (allServiceListings) {
      console.log(allServiceListings);
      resp.json({ success: true, list: allServiceListings });
    } else {
      resp.json({ success: false, message: "no data found" });
    }
  } catch (err) {
    console.log("err in listing-all-product server", err);
  }
});

//view particular service
router.get("/view-service-details/:id", async (req, resp) => {
  const id = req.params.id;
  console.log(id);
  try {
    const serviceDetails = await Service.findOne({ _id: id });
    if (serviceDetails) {
      console.log(serviceDetails);
      resp.json({ success: true, data: serviceDetails });
    } else {
      resp.status(404).json({ success: false, data: "No Data Found" });
    }
  } catch (err) {
    console.log(err);
    resp.status(500).json({ success: false, data: "Internal Server Error" });
  }
});

module.exports = router;
