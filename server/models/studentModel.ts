import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  surname: String,
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;
