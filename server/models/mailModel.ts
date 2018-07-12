import * as mongoose from 'mongoose';

const mailSchema = new mongoose.Schema({
  to: String,
  subject: String,
  description: String,
  author: String,
});

const mailModel = mongoose.model('mail', mailSchema);

export default mailModel;
