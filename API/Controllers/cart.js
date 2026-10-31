import {Cart} from '../Models/Cart.js';


export const addToCart = async (req, res) => {
  const {productId, title, price, qty, imgSrc} = req.body;

  const userId = "6adedc8ce2e74f0e94b8e8bc";

  let cart = new Cart({userId, items: []});
  cart.items.push({productId, title, price, qty, imgSrc });

  await cart.save();
  res.json({message:"Itema Added to Cart", cart})
}