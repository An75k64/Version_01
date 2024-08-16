// routes/affiliateRoutes.js
const express = require("express");
const router = express.Router();
const { createAffiliate } = require("../controllers/affiliateController");

router.post("/affiliate", createAffiliate);

module.exports = router;
