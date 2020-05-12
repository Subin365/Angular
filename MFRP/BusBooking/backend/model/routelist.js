const mongoose = require("mongoose");
const routeSchema = mongoose.Schema({
  name: { type: String, required: true },
  locations: { type: [String], required: true },
});
module.exports = mongoose.model("Routelist", routeSchema);
