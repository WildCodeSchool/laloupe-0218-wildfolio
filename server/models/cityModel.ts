import * as mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  name: String,
  link: String,
  WCS_ID: Number,
  city: String,
});

const cityModel = mongoose.model('city', citySchema);

export default cityModel;
