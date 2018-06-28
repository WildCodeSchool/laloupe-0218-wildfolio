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
  admin: Boolean,
  banished: Boolean,
  crew: Object,
  members: Array,
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;
