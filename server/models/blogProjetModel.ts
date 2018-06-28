import * as mongoose from 'mongoose';
import { link } from 'fs';

const blogProjetSchema = new mongoose.Schema({
  name: String,
  link: String,
  imageUrl: String,
  description: String,
  studentId: String,
  locationId: Number
});

const blogProjetModel = mongoose.model('blogProjet', blogProjetSchema);

export default blogProjetModel;
