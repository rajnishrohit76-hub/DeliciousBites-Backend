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
  getAllOrders,
  addAllDrinksProducts,
  getDrinksProducts
} = require("../Controller/ProductController");

const router = require("express").Router();

// POST Calls to Save Veg Products
router.post("/saveVeg", addVegProduct);
router.post("/saveAllVeg", addAllVegProducts);

// POST Calls to Save Non-Veg Products
router.post("/saveNonVeg", addNonVegProduct);
router.post("/saveAllNonVeg", addAllNonVegProducts);
router.post("/saveAllSnacks", addAllSnacksProducts);
router.post("/saveAllDrinks", addAllDrinksProducts);

// POST Calls to Save Products all Products
router.post("/save", addProduct);
router.post("/saveall", addAllProducts);

// Post Call to Save the Order Details 
router.post("/orders", createOrder);

// GET Calls to Retrieve Products
router.get("/", getAllProducts);
router.get("/veg", getVegProducts);
router.get("/nonveg", getNonVegProducts);
router.get("/snacks", getSnacksProducts);
router.get("/drinks", getDrinksProducts);

// Get Order Details
router.get('/getorders', getAllOrders);


// get Snacks Products


// GET Paginated Products
router.get("/page", getPaginatedProducts);

// DELETE
router.delete("/delete/:category", removeByCategory);

module.exports = router;
