import * as mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  name: String,
});

const cityModel = mongoose.model('city', citySchema);

export default cityModel;
