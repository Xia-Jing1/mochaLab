const chai = require("chai");
const Catalogue = require("../src/productCatalogue");
const Product = require("../src/product");

const expect = chai.expect
let cat = null     // Catalogue object ref
let batch = null   // For later

// Setup
cat = new Catalogue("Test Catalogue");
cat.addProduct(new Product("A123", "Product 1", 100, 10, 10.0));
cat.addProduct(new Product("A124", "Product 2", 100, 10.0));
cat.addProduct(new Product("A125", "Product 3", 100, 10, 10.0));

describe("Catalogue", () => {
  describe("findProductById", function () {
    it("should find a valid product id", function () {
      const result = cat.findProductById("A123");
      expect(result.name).to.equal("Product 1");
    });
    it("should return undefined for invalid product id", function () {
      const result = cat.findProductById("A321");
      expect(result).to.be.undefined;
    });
  });
});