const router = require("express").Router();
const moment = require("moment");
const Blog = require("../model/blog");
const accountMiddleware = require("../midleware/account");

//ADD NEW PRODUCT
router.post("/add-blog", accountMiddleware, async (req, resp) => {
  console.log("token is from post form", req.accountId);
  console.log(req.body);
  const date = moment().format("DD/MM/YYYY");
  try {
    const newBlog = await Blog.create({
      ...req.body,
      postedOn: date,
      accountId: req.accountId,
    });
    // image: req.files.map(file => file.filename)
    console.log(newBlog);
    resp.json({
      success: true,
      message: "Data created successfully",
      Blog: newBlog,
    });
  } catch (err) {
    resp.json({
      message: "something is wrong in positng complete form data",
      err,
    });
  }
});

// MY PROPERTIES login required
router.get("/my-blogs", accountMiddleware, async (req, res) => {
  console.log("thid is id", req.accountId);
  let myBlogList = await Blog.find({ accountId: req.accountId });

  try {
    if (myBlogList) {
      res.json({ success: true, list: myBlogList });
    } else {
      res.json({ success: false, msg: "No Data Found" });
    }
  } catch (er) {
    res.json({ success: false, message: er.message });
  }
});

//To fetch all listings no login required(for customer purpose)
router.get("/all-blogs", async (req, resp) => {
  try {
    let allBlogListings = await Blog.find();
    if (allBlogListings) {
      console.log(allBlogListings);
      resp.json({ success: true, list: allBlogListings });
    } else {
      resp.json({ success: false, message: "no data found" });
    }
  } catch (err) {
    console.log("err in listing-all-product server", err);
  }
});

//individual blog
router.get("/find-blog/:id", async (req, resp) => {
  try {
    let blog = await Blog.findOne({ _id: req.params.id });
    if (blog) {
      console.log(blog);
      resp.json({ success: true, blog: blog });
    } else {
      resp.json({ success: false, message: "no data found" });
    }
  } catch (err) {
    console.log("err in finding blog server", err);
  }
});

module.exports = router;
