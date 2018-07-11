import * as mongoose from 'mongoose';
import { link } from 'fs';

const blogProjetSchema = new mongoose.Schema({
  name: String,
  link: String,
  imageUrl: String,
  description: String,
  studentId: String,
  studentName: String,
  locationId: Number,
  session: String,
  sessionId: Number,
  eleves: Array,
});

const blogProjetModel = mongoose.model('blogProjet', blogProjetSchema);

export default blogProjetModel;
