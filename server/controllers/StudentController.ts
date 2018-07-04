import studentModel from '../models/studentModel';
import BaseController from './BaseController';

export default class StudentController extends BaseController {
  model = studentModel;

  getAllByLangageId = (req, res) => {
    this.model.find({ WCS_ID: req.params.id }, (err, docs) => {
      if (err) { return console.error(err); }
      // console.log(docs);
      res.status(200).json(docs);
    });
  }
}
