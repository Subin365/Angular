const mongoose = require("mongoose");
const dateavailabilitySchema = mongoose.Schema({
  date: { type: String, required: true },
  seats: [
    {
      seatsStatus: { type: Number, required: true },
      fare: { type: Number, required: true },
    },
  ],
});
const busdetailSchema = mongoose.Schema({
  name: { type: String, required: true },
  regNo: { type: String, required: true },
  contactNo: { type: Number, required: true },
  boardingPoint: { type: String, required: true },
  destinationPoint: { type: String, required: true },
  date_availability: [dateavailabilitySchema],
});
module.exports = mongoose.model("Busdetail", busdetailSchema);
