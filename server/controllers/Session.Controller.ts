import sessionModel from '../models/sessionModel';
import BaseController from './BaseController';

export default class SessionController extends BaseController {
  model = sessionModel;
  getAllbyLocationId = (req, res) => {
    this.model.find({ locationId: Number(req.params.id) }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }
}
