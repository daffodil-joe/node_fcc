const express = require("express");
const mongoose = require("mongoose");

const app = express();

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
