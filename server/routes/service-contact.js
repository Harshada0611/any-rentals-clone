const router = require("express").Router();
const ServiceContactEnquiry = require("../model/service-contact");
const accountMiddleware = require("../midleware/account");

router.post("/service-enquiry", async (req, resp) => {
  console.log(req.body);
  try {
    const newEnquiry = await ServiceContactEnquiry.create(req.body);
    console.log(newEnquiry);
    resp.json({ success: true, message: "We'll get back to you soon" });
  } catch (err) {}
});

// get conatct enquiries for specific seller (seller login required)
router.get("/get-enquiries", accountMiddleware, async (req, resp) => {
  try {
    const allEnquiries = await ServiceContactEnquiry.find({
      accountId: req.accountId,
    });
    resp.json({ success: true, list: allEnquiries });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
