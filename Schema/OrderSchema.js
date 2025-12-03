const { default: mongoose } = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    items: [
      {
        id: Number,
        name: String,
        price: Number,
        image: String,
      },
    ],
    totalAmount: { type: Number, required: true },
    discountAmount: { type: Number, default: 0 },
    couponAmount: { type: Number, default: 0 },
    orderDate: { type: Date, default: Date.now },
    netAmountToPay: { type: Number, required: true },
  },
  { timestamps: true } // ⬅ FIXED
);

module.exports = orderSchema;
