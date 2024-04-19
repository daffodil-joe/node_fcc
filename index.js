const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/project.model");

const app = express();

app.use(express.json()); //json not allowed by default. This is used as middleware to allow json data to be sent

mongoose
  .connect("mongodb://root:password@mongo:27017/")
  .then(() => {
    console.log("**DB**: Connected to test database!");
  })
  .catch(() => {
    console.log("**DB**: Database connection error");
  });

app.listen(3000, () => {
  console.log("**SERVER**: Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from your docker container!");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
