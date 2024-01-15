const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexControllers");

// Home ("/")
router.get("/", indexController.getIndex);

module.exports = router;
