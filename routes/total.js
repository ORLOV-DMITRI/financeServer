const express = require("express");
const router = express.Router();
const {auth} = require("../middleware/auth");
const {available} = require("../controllers/total");

///api/total/
router.get("/", auth, available);


module.exports = router;