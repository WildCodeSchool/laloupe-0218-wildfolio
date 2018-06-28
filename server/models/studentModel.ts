import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  WCS_ID: Number,
  github: String,
  roles: String,
  locationId: Number
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;
