const mongoose = require("mongoose");
const { type } = require("os");
const { deflate } = require("zlib");
const { search } = require("../routes/user/userRoute");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
    unique: false,
    spares: true,
    default: null,
  },
  googleID: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  isBlock: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date },
  // cart: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Cart",
  //   },
  // ],
  wallet: {
    type: Schema.Types.ObjectId,
    ref: "Wallet",  // Capitalized to match the model name
  },
 
  orderHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "order",
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
  secondaryEmail:{type: String},
  referalCode: {
    type: String,
  },
  redeemed: {
    type: Boolean,
  },
  redeemedUser: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  searchHistory: [
    {
      category: {
        type: Schema.Types.ObjectId,
        ref: "category",
      },
      searchOn: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
