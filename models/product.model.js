const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter name'],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    }
},
  {
    timestamps: true, // moved timestamps here properly
  });
const Product = mongoose.model('Products', ProductSchema);
module.exports = Product;
