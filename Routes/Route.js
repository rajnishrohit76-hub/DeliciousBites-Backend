const {
  addVegProduct,
  addAllVegProducts,
  addNonVegProduct,
  addAllNonVegProducts,
  getNonVegProducts,
  removeByCategory,
  getPaginatedProducts,
  getAllProducts,
  addProduct,
  addAllProducts,
  getVegProducts,
  createOrder,
  addAllSnacksProducts,
  getSnacksProducts,
  getAllOrders
} = require("../Controller/ProductController");

const authMiddleware = require("../Middleware/authMiddleware");
const { get } = require("../Schema/ProductSchema");
const router = require("express").Router();

// POST Calls to Save Veg Products
router.post("/saveVeg", addVegProduct);
router.post("/saveAllVeg", addAllVegProducts);

// POST Calls to Save Non-Veg Products
router.post("/saveNonVeg", addNonVegProduct);
router.post("/saveAllNonVeg", addAllNonVegProducts);

// Post Call to Save Snacks Products
router.post("/saveAllSnacks", addAllSnacksProducts);

// POST Calls to Save Products all Products
router.post("/save", addProduct);
router.post("/saveall", addAllProducts);

// Post Call to Save the Order Details 
router.post("/orders", createOrder);

// GET Calls to Retrieve Products
router.get("/", getAllProducts);
router.get("/veg", getVegProducts);
router.get("/nonveg", getNonVegProducts);

// Get Order Details
router.get('/getorders', getAllOrders);


// get Snacks Products
router.get("/snacks", getSnacksProducts);

// GET Paginated Products
router.get("/page", getPaginatedProducts);

// DELETE
router.delete("/delete/:category", removeByCategory);

module.exports = router;
