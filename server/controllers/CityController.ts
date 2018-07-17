import cityModel from '../models/cityModel';
import BaseController from './BaseController';

export default class CityController extends BaseController {
  model = cityModel;

  // Insert
  insertIfNotId = (req, res) => {
    this.model.findOne({ locationId: (req.body.locationId) }, (err, item) => {
      if (err) {
        return console.error(err);
      }
      // console.log(item);
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
