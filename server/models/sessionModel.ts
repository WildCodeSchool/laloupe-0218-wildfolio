import * as mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  name: String,
  link: String,
  WCS_ID: Number,
  date: String,
  locationId: Number,
});

const sessionModel = mongoose.model('session', sessionSchema);

export default sessionModel;
