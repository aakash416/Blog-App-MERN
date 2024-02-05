const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: String,
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    phoneNumber: { type: Number, required: true, trim: true }
}, { timestamps: true })


const userModel = mongoose.model("users", userSchema);

module.exports = userModel;