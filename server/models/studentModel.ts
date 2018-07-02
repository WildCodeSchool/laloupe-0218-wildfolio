import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  admin: Boolean,
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
  palmares: Array,
  poste: String, // boolean ?
  specialites: Array,
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;
