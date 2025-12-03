const crypto = require("crypto");
const razorpay = require("../Config/razorpay");
const Payment = require("../Schema/Payment");

const createOrder = async (amount) => {
  if (!amount || amount <= 0) throw new Error("Invalid amount");

  const options = {
    amount: amount * 100, // in paise
    currency: "INR",
    receipt: "receipt_order_" + Date.now(),
  };

  const order = await razorpay.orders.create(options);

  await Payment.create({
    razorpay_order_id: order.id,
    amount,
    status: "pending",
  });

  return order;
};

const verifyPayment = async (data) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = data;
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) return false;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(sign)
    .digest("hex");

  const isValid = expectedSign === razorpay_signature;

  await Payment.findOneAndUpdate(
    { razorpay_order_id },
    { razorpay_payment_id, razorpay_signature, status: isValid ? "success" : "failed" }
  );

  return isValid;
};

module.exports = { createOrder, verifyPayment };
