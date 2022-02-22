import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
  organisation: { type: Schema.Types.ObjectId, ref: 'Organisation' },
  productName: String,
  category: String,
  quantity: Number,
  available: Boolean,
  price: Number,
  images: [{ type: String }],
});

export default model('Product', productSchema);
