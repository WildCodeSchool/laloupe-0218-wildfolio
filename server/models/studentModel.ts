import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  WCS_ID: Number,
  github: String,
  linkedin: String,
  lienlinkedin: String,
  image: String,
  roles: String,
  locationId: Number,
  campus: String,
  session: String,
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;
