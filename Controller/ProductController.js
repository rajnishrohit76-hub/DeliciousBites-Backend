const {
  addNewVegProduct,
  addNewVegProducts,
  addNewNonVegProduct,
  addNewNonVegProducts,
  fetchAllVegProducts,
  fetchAllNonVegProducts,
  addNewProduct,
  addNewItems,
  fetchAllProducts,
  fetchVegProducts,
  fetchnonVegProducts,
  deleteProductsByCategory,
  fetchPaginatedProducts,
  createNewOrder,
  addNewSnacksProducts,
  fetchAllSnacksProducts,
  fetchAllOrders,
  addNewDrinksProducts,
  fetchAllDrinksProducts
} = require("../Services/ProductService");

// Add single Veg Product
const addVegProduct = (req, res) => {
  addNewVegProduct(req.body);
  res.send("Veg Product Added Successfully");
};

// Add multiple Veg Products
const addAllVegProducts = (req, res) => {
  addNewVegProducts(req.body);
  res.send("All Veg Products Saved Successfully");
};

// Add single Non-Veg Product
const addNonVegProduct = (req, res) => {
  addNewNonVegProduct(req.body);
  res.send("Non-Veg Product Added Successfully");
};

// Add multiple Non-Veg Products
const addAllNonVegProducts = (req, res) => {
  addNewNonVegProducts(req.body);
  res.send("All Non-Veg Products Saved Successfully");
};

// Add Multiple Snacks Products
const addAllSnacksProducts = (req, res) => {
  addNewSnacksProducts(req.body);
  res.send("All Snacks Products Saved Successfully");
};

const addAllDrinksProducts = (req, res) => {
  addNewDrinksProducts(req.body);
  res.send("All Drinks Products Saved Successfully");
};







// Fetch Snacks Products
const getSnacksProducts = async (req, res) => {
  try {
    const snacks = await fetchAllSnacksProducts();
    res.json(snacks);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};




// Fetch Veg products
const getVegProducts = async (req, res) => {
  try {
    const veg = await fetchVegProducts();
    res.status(200).json(veg);   // ✔ only status code added
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};

 
// Fetch Non-Veg products
const getNonVegProducts = async (req, res) => {
  try {
    const nonVeg = await fetchnonVegProducts();
    res.json(nonVeg);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};

// Fetch Drinks products
const getDrinksProducts = async (req, res) => {
  try {
    const drinks = await fetchAllDrinksProducts();
    res.json(drinks);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};



const addProduct = (req, res) => {
  addNewProduct(req.body);
  res.send("Product Added Successfully");
};

const addAllProducts = (req, res) => {
  addNewItems(req.body);
  res.send("All Products Added Successfully");
};

const getAllProducts = async (req, res) => {
  try {
    const products = await fetchAllProducts();
    res.json(products);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete by category
const removeByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const result = await deleteProductsByCategory(category);
    res.json({ message: `${category} deleted`, deleted: result.deletedCount });
  } catch {
    res.status(500).json({ message: "Error deleting" });
  }
};

// Pagination
const getPaginatedProducts = async (req, res) => {
  const { page = 1, limit = 4, category = "veg" } = req.query;

  try {
    const result = await fetchPaginatedProducts(page, limit, category);
    res.json(result);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};


// Creating the Order
createOrder = (req, res) => {
  // Get the Order Details From the Request Body
  let orderDetails = req.body;

  // Send the Data to Service Layer to Create the Order
  createNewOrder(orderDetails);

  // respond with a Success Message
  res.send("Order Created SuccessFully");
}

// Controller function to get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await fetchAllOrders();
    return res.status(200).json(orders); // Send all orders in the response
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addProduct,
  addAllProducts,
  getAllProducts,
  getVegProducts,
  getNonVegProducts,
  removeByCategory,
  getPaginatedProducts,
  addVegProduct,
  addAllVegProducts,
  addNonVegProduct,
  addAllNonVegProducts,
  createOrder,
  addAllSnacksProducts,
  getSnacksProducts,
  getDrinksProducts,
  getAllOrders,
  addAllDrinksProducts,
};
