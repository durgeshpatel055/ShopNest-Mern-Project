// username = dfordurgesh05_db_user
// password = 4K05Z8uBHuiVg52J

import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/user.js"; 
import productRouter from "./Routes/product.js";
import cartRouter from "./Routes/cart.js";

const app = express();

app.use(bodyParser.json())

// home testing route
app.get("/", (req, res) => {
  res.json({ message: "This is home route..." });
});



// user Router
app.use("/api/user", userRouter);



// product Router
app.use("/api/product", productRouter);


// 
mongoose
  .connect(
    "mongodb+srv://dfordurgesh05_db_user:4K05Z8uBHuiVg52J@cluster0.rretfgb.mongodb.net/",
    {
      dbName: "MERN_E_Commerce",
    },
  )
  .then(() => console.log("MongoDB Connected Successfully...!"))
  .catch((err) => console.log(err));

const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
