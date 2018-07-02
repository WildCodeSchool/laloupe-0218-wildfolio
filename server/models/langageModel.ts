import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  id: Number,
});

const studentModel = mongoose.model('langage', studentSchema);

export default studentModel;
