import * as mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  WCS_ID: Number,
  city: String,
});

const locationModel = mongoose.model('location', locationSchema);

export default locationModel;
