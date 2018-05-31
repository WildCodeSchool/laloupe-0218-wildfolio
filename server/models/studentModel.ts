import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  wcs_id: Number,
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;
