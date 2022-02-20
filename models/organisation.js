import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { randomUUID } from 'crypto';

const organisationSchema = new Schema({
  admin: { type: Schema.Types.ObjectId, ref: 'Account' },
  organisationName: String,
  organisationId: { type: String, unique: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
});

organisationSchema.pre('save', function (next) {
  try {
    const uuid = randomUUID().split('-')[0];
    this.organisationId = `${uuid}`;
  } catch (error) {
    const uuid = randomUUID().split('-')[0];
    this.organisationId = `${uuid}`;
  }
  next();
});

export default model('Organisation', organisationSchema);
