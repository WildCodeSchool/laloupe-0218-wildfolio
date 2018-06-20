import * as mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  LOC_ID: Number,
});

const locationModel = mongoose.model('location', locationSchema);

export default locationModel;
