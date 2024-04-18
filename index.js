const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from your node container!");
});

mongoose
  .connect("mongodb://root:password@mongo:27017/test")
  .then(() => console.log("Connected!"));
