const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    default: ""
  },
  firstname: {
    type: String,
    default: ""
  },
  middlename: {
    type: String,
    trim: true,
    default: ""
  },
  lastname: {
    type: String,
    trim: true,
    default: ""
  },
  gender: {
    type: String,
    enum: {
      values: ["Male", "Female", "Other", "I’d rather not say"],
      message: "Gender must be Male, Female, Other, or I’d rather not say",
    },
    default: "I’d rather not say"
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v.toString());
      },
      message: "Phone number must be 10 digits",
    },
    default: null
  },
  email: {
    type: String,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: "Invalid email format",
    },
    default: "example@gmail.com"
  },
  dob: {
    type: Date,
    validate: {
      validator: function (value) {
        return value < new Date();
      },
      message: "Date of birth must be in the past",
    },
    default: null
  },
  doa: {
    type: Date,
    validate: {
      validator: function (value) {
        return value <= new Date();
      },
      message: "Date of appointment cannot be in the future",
    },
    default: null
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
