import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const accountSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: [true, 'Email address already exists'],
    lowerCase: true,
    required: true,
  },
  password: { type: String, required: true },
  role: String,
  isVerified: { type: Boolean, default: true },
});

accountSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export default model('Account', accountSchema);
