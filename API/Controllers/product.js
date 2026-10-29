import { Products } from "../Models/Product.js";

// add product

export const addProduct = async (req, res) => {
  const { title, description, price, category, qty, imgSrc } = req.body;
  try {
    let product = await Products.create({
      title,
      description,
      price,
      category,
      qty,
      imgSrc,
    });
    res.json({ message: "Product added successfully...!", product });
  } catch (error) {
    res.json(error.message);
  }
};

// get products
export const getProducts = async (req, res) => {
  let products = await Products.find();
  res.json({ message: "all Products...!", products });
};

// find product by id
export const getProductbyId = async (req, res) => {
  const id = req.params.id;
  let product = await Products.findById(id);
  if (!product) {
    res.json({ message: "Invalid Id...!" });
  }
  res.json({ message: "Specific Product...!", product });
};

// Update product by id
export const updateProductbyId = async (req, res) => {
  const id = req.params.id;
  let product = await Products.findByIdAndUpdate(id,req.body,{new:true});
  if (!product) {
    res.json({ message: "Invalid Id...!" });
  }
  res.json({ message: "Product updated successfully...!", product });
};

// Delete product by id
export const deleteProductbyId = async (req, res) => {
  const id = req.params.id;
  let product = await Products.findByIdAndDelete(id);
  if (!product) {
    res.json({ message: "Invalid Id...!" });
  }
  res.json({ message: "Product deleted successfully...!", product });
};
