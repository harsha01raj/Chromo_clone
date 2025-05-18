const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const UserRouter = require("./routes/User_route");
const ProductRouter = require("./routes/product_route");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user",UserRouter);
app.use("/product",ProductRouter);

app.get("/", (req, res) => {
  res.send("Server is running fine");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Server is successfully connected to the data base");
    console.log(`Server is running on https://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
