import * as mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
  img: { data: Buffer, contentType: String },
});

const uploadModel = mongoose.model('upload', uploadSchema);

export default uploadModel;
