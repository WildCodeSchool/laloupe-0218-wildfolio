import * as mongoose from 'mongoose';

const recrutSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const recrutModel = mongoose.model('recrut', recrutSchema);

export default recrutModel;
