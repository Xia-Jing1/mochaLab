const Catalogue = require("../src/productCatalogue");
const Product = require("../src/product");
// Setup
const cat = new Catalogue("Test Catalogue");
cat.addProduct(new Product("A123", "Product 1", 100, 10, 10.0));
cat.addProduct(new Product("A124", "Product 2", 100, 10.0));
cat.addProduct(new Product("A125", "Product 3", 100, 10, 10.0));

// Test findProductById
let id = "A123";
let match = cat.findProductById(id);
if (match.id !== id) {
  console.log("find by id for valid id - Failed for valid name");
}
id = "A321";
match = cat.findProductById(id);
if (match) {
  console.log("find by id for invalid id - Failed");
}