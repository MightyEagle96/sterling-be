import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { randomUUID } from 'crypto';

const organisationSchema = new Schema({
  admin: { type: Schema.Types.ObjectId, ref: 'Account' },
  name: String,
  organisationId: { type: String, unique: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
});

organisationSchema.pre('save', function (next) {
  function GenerateId() {
    const uuid = randomUUID().split('-')[0];
    this.organisationId = uuid;
  }
  try {
    GenerateId();
  } catch (error) {
    GenerateId();
  }
  next();
});

export default model('Organisation', organisationSchema);
