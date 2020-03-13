const express = require("express");
const Router = express.Router();

const coba = require("./coba");
Router.use("/coba", coba);

module.exports = Router;
