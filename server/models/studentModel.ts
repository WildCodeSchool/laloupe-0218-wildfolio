import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  WCS_ID: Number,
  github: String,
  linkedin: String,
  lienLinkedin: String,
  image: String,
  roles: String,
  locationId: Number,
  poste: String, // boolean ?
  specialites: Array,
  program_type: Object,
  langageId: Number
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;
