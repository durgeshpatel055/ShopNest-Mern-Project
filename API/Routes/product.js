import express from "express";
import { addProduct, deleteProductbyId } from "../Controllers/product.js";
import { getProducts } from "../Controllers/product.js";
import { getProductbyId } from "../Controllers/product.js";
import { updateProductbyId } from "../Controllers/product.js";


const router = express.Router();


// add product

router.post("/add", addProduct)


// get products

router.get("/all", getProducts)


// get product by Id
router.get("/:id", getProductbyId)



// update product by Id
router.put("/:id", updateProductbyId)



// delete product by Id
router.delete("/:id", deleteProductbyId)

export default router;















