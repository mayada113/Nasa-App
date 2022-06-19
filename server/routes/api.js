const express = require("express");
const router = express.Router();
// const moment = require('moment')

const Favourites = require("../models/Favourites");
router.get("/images", function (req, res) {
  Favourites.find({}, function (err, images) {
    res.send(images);
  });
});
router.get("/image/:id", function (req, res) {
  Favourites.find({ _id: req.params.id }, function (err, images) {
    res.send(images);
  });
});
router.post("/image", function (req, res) {
  const favourites = new Favourites(req.body);
  favourites.save();
  res.send("finish");
});

router.delete("/image/:id", async function (req, res) {
  // console.log(req.params.id);
  await Favourites.deleteOne({ _id: req.params.id });
  // Favourites.find({}, function (err, images) {
  //   res.send(images);
  // });
});

module.exports = router;
