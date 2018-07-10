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
  campus: String,
  session: String,
  sessionId: Number,
  locationId: Number,
  langageId: Number,
  langageName: String,
  members: [mongoose.Schema.Types.Mixed],
 /*  palmares: Array,
  poste: String,
  specialites: Array, */
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;
