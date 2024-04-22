const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

//get all
router.get("/", getProducts);
//get one by id
router.get("/:id", getProduct);

//post
router.post("/", createProduct);

//edit
router.put("/:id", updateProduct);

//delete
router.delete("/:id", deleteProduct);

module.exports = router;
