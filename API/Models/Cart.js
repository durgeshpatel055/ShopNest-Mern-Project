import monoose from 'mongoose';



const cartItemSchema = new monoose.Schema({
  productId: {
    type: monoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  title: {type: String, required: true},
  price: {type: Number, required: true},
  qty: {type: Number, required: true},
  title: {type: String, required: true},
  imgSrc: {type: String, required: true},
  
});

const CartSchema = new monoose.Schema({
  userId: {
    type: monoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
   items : [cartItemSchema]
})


export const Cart = monoose.model('Cart', CartSchema);