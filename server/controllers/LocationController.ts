import locationModel from '../models/locationModel';
import BaseController from './BaseController';

export default class LocationController extends BaseController {
  model = locationModel;

  // Insert
  insertLocationIfNotExists = (req, res) => {
    this.model.findOne({ LOC_ID: req.body.LOC_ID }, (err, item) => {
      if (err) {
        return console.error(err);
      }
      if (item == null) {
        const obj = new this.model(req.body);
        obj.save((objerr, objitem) => {
          // 11000 is the code for duplicate key error
          if (err && err.code === 11000) {
            res.sendStatus(400);
          }
          if (err) {
            return console.error(err);
          }
          res.status(200).json(item);
        });
      } else {
        res.status(200).json(item);
      }
    });
  }
}
