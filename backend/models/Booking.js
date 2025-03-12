const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    room: { type: String, required: true },
    checkin: { type: Date, required: true }
});

module.exports = mongoose.model("Booking", BookingSchema);
