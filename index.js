const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/project.model");
const productRoute = require("./routes/product.route");
const app = express();

//middleware

app.use(express.json()); //json not allowed by default. This is used as middleware to allow json data to be sent
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

mongoose
  .connect("mongodb://root:password@mongo:27017/")
  .then(() => {
    console.log("**DB**: Connected to test database!");
    app.listen(3000, () => {
      console.log("**SERVER**: Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("**DB**: Database or Server connection error");
  });

app.get("/", (req, res) => {
  res.send("Hello from your docker container!");
});

// delete

// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       res.status(404).json({ message: "Product not Found" });
//     }
//     res
//       .status(200)
//       .json({ message: `Product Number ${id} was successfully deleted.` });
//   } catch (error) {
//     res.status(500).json({ messge: error });
//   }
// });
