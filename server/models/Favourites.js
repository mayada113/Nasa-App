const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favouritesSchema = new Schema({
  image: String,
  title: String,
  description: String,
});

const Favourites = mongoose.model("Favourites", favouritesSchema);
module.exports = Favourites;
