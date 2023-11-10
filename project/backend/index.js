// console.log("Hello Everyone");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes/route");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);
// DB Connection
mongoose
  .connect(
    "mongodb+srv://prajwall90000:prajwal@cluster0.9sincpo.mongodb.net/"
  )
  .then(() => {
    console.log("Database is Connected Successfully 😎");
  })
  .catch((err) => {
    console.log(err, "Something Went Wrong");
  });

// Test API
app.get("/test", (req, res) => {
  res.send("Hello Hitaish, This is Test Api 😎");
});

app.listen(8000, () => {
  console.log("Server Is Running On Port 8000");
});