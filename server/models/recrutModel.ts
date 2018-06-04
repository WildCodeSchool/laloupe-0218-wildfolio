import * as mongoose from 'mongoose';

const recrutSchema = new mongoose.Schema({
  description: String,
  authname: String,
});

const recrutModel = mongoose.model('recrut', recrutSchema);

export default recrutModel;
