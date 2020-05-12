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
module.exports = mongoose.model("Dateavailability", dateavailabilitySchema);
