const express = require("express");
const router = express.Router();
const bookedDates = require("../models/bookedDates");
router.get("/boom", (req, res) => {
  res.send("boom..boom");
});

router.post("/boom", (req, res) => {
  bookedDates.create(req.body).then(date => {
    res.send(date);
  });
});
module.exports = router;
