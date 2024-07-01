const mongoose = require("mongoose");

const startupSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Startup Name"],
    trim: true,
  },
  efficiency: {
    type: Number,
    required: [true, "Please Enter product Efficiency as per algo"],
  },
  city: {
    type: Number,
    required: [true, "Please Enter startup profit"]
  },
  funding_rounds: {
    type: Number,
    default: 0,
  },
  age_first_funding: {
    type: Number,
    default: 0,
  },
  age_last_funding: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
  },
  valuation: {
    type: Number,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true,
      },
      name: {
        type: String,
        // required: true,
      },
      rating: {
        type: Number,
        // required: true,
      },
      comment: {
        type: String,
        // required: true,
      },
    },
  ],

});

module.exports = mongoose.model("startup", startupSchema);
