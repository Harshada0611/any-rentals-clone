const router = require("express").Router();
const RentContactEnquiry = require("../Model/rentContactForm");
const sellerMiddleware = require("../midleware/userMiddlware");

router.post("/rent-enquiry", async (req, resp) => {
  console.log(req.body);
  const { name, email, contact, sellerId } = req.body;
  try {
    const newEnquiry = await RentContactEnquiry.create({
      name: name,
      email: email,
      contact: contact,
      message: req.body.message,
      propertyType: req.body.propertyType,
      sellerId: sellerId,
    });
    console.log(newEnquiry);
  } catch (err) {}
});

// get conatct enquiries for specific seller (seller login required)
router.get("/get-enquiries", sellerMiddleware, async (req, resp) => {
  try {
    const allEnquiries = await RentContactEnquiry.find({
      sellerId: req.sellerId,
    });
    resp.json({ success: true, allEnquiries: allEnquiries });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
