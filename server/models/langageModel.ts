import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  WCS_ID: Number,
});

const studentModel = mongoose.model('langage', studentSchema);

export default studentModel;
