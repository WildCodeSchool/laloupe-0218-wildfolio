import studentModel from '../models/studentModel';
import BaseController from './BaseController';

export default class StudentController extends BaseController {
  model = studentModel;

  // Insert
  insertIfNotExists = (req, res) => {
    this.model.findOne({ wcs_id: req.body.wcs_id }, (err, item) => {
      if (err) {
        return console.error(err);
      }
      if (item == null) {
        const obj = new this.model(req.body);
        obj.save((err, item) => {
          // 11000 is the code for duplicate key error
          if (err && err.code === 11000) {
            res.sendStatus(400);
          }
          if (err) {
            return console.error(err);
          }
          res.status(200).json(item);
        })
      } else {
        res.status(200).json(item);
      }
    });
  }

}
