const mongoose = require("mongoose");

const passengerSchema = mongoose.Schema({
  name: { type: String, required: true },
  seatNo: { type: Number, required: true },
  gender: { type: String, required: true },
  date: { type: String, required: true },
  regNo: { type: String, required: true },
});


module.exports = mongoose.model("Passenger", passengerSchema);
