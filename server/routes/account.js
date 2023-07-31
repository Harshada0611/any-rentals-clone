const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Account = require("../model/account");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
require("dotenv").config();
const accountMiddleware = require("../midleware/account");

// Create a new account
router.post(
  "/account-register",
  [
    body("name")
      .notEmpty()
      .withMessage("Name field cannot be empty")
      .isLength({ min: 3 })
      .withMessage("Name should be greather than 3 characters"),
    body("email")
      .notEmpty()
      .withMessage("Email cannot be empty")
      .isEmail()
      .withMessage("Invalid Email"),
    body("contact")
      .notEmpty()
      .withMessage("Contact number cannot be empty")
      .isLength({ min: 10, max: 10 })
      .withMessage("Contact must be 10 digits")
      .matches(/^\d+$/)
      .withMessage("Contact number must contain only digits"),
    body("password")
      .notEmpty()
      .withMessage("Password cannot be empty")
      .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
      .withMessage(
        "Password must contain at least one capital letter and one symbol"
      )
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, resp) => {
    const { name, email, contact, password, accountType } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return resp.json({ success: false, message: errors.array() });
      }

      const existingaccount = await Account.findOne({ email });
      if (existingaccount) {
        console.log("Account already exist", existingaccount);
        resp.status(409).json({
          success: false,
          message: "Account already exist",
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAccount = await Account.create({
          name,
          email,
          contact,
          password: hashedPassword,
          accountType,
        });
        console.log("newAccount=>", newAccount);
        resp.status(201).json({
          success: true,
          message: "Account created successfully",
          data: newAccount,
        });
      }
    } catch (error) {
      resp.status(400).json({ message: error });
    }
  }
);

//Sign in route (only registered accounts can access)
router.post("/account-signin", async (req, resp) => {
  const { email, password } = req.body;

  try {
    const existingAccount = await Account.findOne({ email: email });
    if (existingAccount) {
      const passwordMatch = await bcrypt.compare(
        password,
        existingAccount.password
      );
      if (passwordMatch) {
        const dataTobeSentToFrontend = {
          _id: existingAccount._id,
        };
        const token = jwt.sign(
          dataTobeSentToFrontend,
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "1d",
          }
        );
        // console.log("signined in data=>", existingAccount, token);
        resp.json({
          success: true,
          message: "SignIn successful",
          token: token,
          account: existingAccount,
        });
      } else {
        resp.json({ success: false, message: "Password not correct" });
      }
    } else {
      resp.json({
        success: false,
        message: "account not found. Please create new account",
      });
    }
  } catch (error) {
    resp.status(400).json({ message: error.message });
  }
});

//get account
router.get("/account-details", accountMiddleware, async (req, resp) => {
  // console.log(req.accountId);
  try {
    const details = await Account.findOne({ _id: req.accountId });
    if (details) {
      console.log(details);
      resp.json({ success: true, details: details });
    } else {
      resp.json({ success: false, message: "Cannot find any details" });
    }
  } catch (err) {
    resp.json({ success: false, message: err });
  }
});

module.exports = router;
