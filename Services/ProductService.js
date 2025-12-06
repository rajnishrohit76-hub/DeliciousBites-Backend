const mongoose = require("mongoose");
const ProductSchema = require("../Schema/ProductSchema");
const orderSchema = require("../Schema/OrderSchema");

const productModel = mongoose.model("Items", ProductSchema);
const vegProduct = mongoose.model("Veg", ProductSchema);
const nonVegProduct = mongoose.model("Non-Veg", ProductSchema);
const snacksProduct = mongoose.model("Snacks", ProductSchema);
let orderModel = mongoose.model("Order Details", orderSchema);

// Saving Single Veg Product
const addNewVegProduct = (newProduct) => {
    new vegProduct(newProduct).save();
}

// Saving Multiple Veg Products
const addNewVegProducts = (newProducts) => {
    vegProduct.insertMany(newProducts);
}

// Saving Single Non-Veg Product
addNewNonVegProduct = (newProduct) => {
    new nonVegProduct(newProduct).save();
}

// Saving Multiple Non-Veg Product
addNewNonVegProducts = (newProducts) => {
    nonVegProduct.insertMany(newProducts);
}

// Saving Multiple Snacks Products
addNewSnacksProducts = (newProducts) => {
    snacksProduct.insertMany(newProducts);
}

// Saving Multiple Drinks Products
addNewDrinksProducts = (newProducts) => {
    drinksProduct.insertMany(newProducts);
}


// Fetching All Veg Products
fetchAllVegProducts = () => {
    return vegProduct.find();
}

// Fetching All Non-Veg Products
fetchAllNonVegProducts = () => {
    return nonVegProduct.find();
}

// Fetching All Snacks Products
fetchAllSnacksProducts = () => {
    return snacksProduct.find();
};

// Fetching All Drinks Products
fetchAllDrinksProducts = () => {
    return drinksProduct.find();
};

// Add single product
const addNewProduct = (newProduct) => {
    new productModel(newProduct).save();
}

// Add multiple products
const addNewItems = (newProducts) => {
    productModel.insertMany(newProducts);
}
 
// Fetch all products
fetchAllProducts = () => {
    return productModel.find();
}

// Fetch veg products only
fetchVegProducts = () => {
    return productModel.find({ category: "veg" });
}

// Fetch veg products only
fetchnonVegProducts = () => {
    return productModel.find({ category: "non-veg" });
}

// Delete products by category
async function deleteProductsByCategory(category) {
  return await productModel.deleteMany({ category });
}

// Fetching Paginated Products By Category
fetchPaginatedProducts = async (page, limit, category) => {
    const skip = (page - 1) * limit;
    const query = { category }; // filter by category

    const products = await productModel.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ id: -1 }); // 🔹 Sort by ID (latest first)

    const total = await productModel.countDocuments(query);

    return {
      products,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    };
};

createNewOrder = (orderDetails) => {
    new orderModel(orderDetails).save();
}


// Get all orders from the database
const fetchAllOrders = async () => {
  try {
    const orders = await orderModel.find();  // Fetch all orders from the database
    return orders;
  } catch (err) {
    throw err;
  }
};


module.exports = {  addNewProduct,
                    addNewItems,
                    fetchAllProducts,
                    fetchVegProducts,
                    deleteProductsByCategory,
                    fetchnonVegProducts,
                    fetchPaginatedProducts,
                    addNewVegProduct,
                    addNewVegProducts,
                    addNewNonVegProduct,
                    addNewNonVegProducts,
                    addNewDrinksProducts,
                    fetchAllVegProducts,
                    fetchAllNonVegProducts,
                    createNewOrder,
                    addNewSnacksProducts,
                    fetchAllSnacksProducts,
                    fetchAllDrinksProducts,
                    fetchAllOrders };



















// module.exports = { };
 