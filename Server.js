// server.js (Vercel Serverless Compatible)
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");


// Routers
const productRouter = require("./Routes/Route");
const authRouter = require("./Routes/AuthRoute");
const paymentRouter = require("./Routes/PaymentRoute");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/payment", paymentRouter);

// ================== DATABASE CONNECTION (SERVERLESS) ==================
let connection;
async function connectDB() {
  if (connection) return;
  connection = await mongoose.connect(process.env.MONGO_DB, {
    // options removed intentionally (serverless handles it)
  });
  console.log("MongoDB Connected Successfully (Serverless)");
}
connectDB().catch(err => console.log("MongoDB Connection Failed:", err));

// ================== EXPORT APP (DO NOT LISTEN) ==================
module.exports = app;

















// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();  // <-- IMPORTANT

// const productRouter = require("./Routes/Route");
// const authRouter = require("./Routes/AuthRoute");
// const paymentRouter = require("./Routes/PaymentRoute");

// const app = express();


// app.use(cors());
// app.use(express.json());

// // Auth Routes
// app.use("/api/auth", authRouter);

// // Product Routes
// app.use("/api/product", productRouter);

// // Payment Routes
// app.use("/api/payment", paymentRouter);

// mongoose.connect(process.env.MONGO_DB)
//   .then(() => console.log("MongoDB Connected Successfully"))
//   .catch(err => console.log("MongoDB Connection Failed:", err));

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on http://localhost:${process.env.PORT}`);
// });
