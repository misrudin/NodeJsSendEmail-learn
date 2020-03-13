const express = require("express");

const router = express.Router();
const cobaController = require("../controllers/coba");

router.post("/", cobaController.sendEmail);

module.exports = router;
