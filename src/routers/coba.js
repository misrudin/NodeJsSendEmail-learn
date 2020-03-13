var express = require("express"),
  router = express.Router(),
  controller = require("../controllers/coba");

router.post("/", controller.SendMail);
module.exports = router;
