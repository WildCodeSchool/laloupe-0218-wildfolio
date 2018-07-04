import blogProjetModel from '../models/blogProjetModel';
import BaseController from './BaseController';

export default class BlogProjetController extends BaseController {
  model = blogProjetModel;


  getAllByLocationId = (req, res) => {
    this.model.find({locationId: req.params.id}, (err, docs) => {
      if (err) { return console.error(err); }
      // console.log(docs);
      res.status(200).json(docs);
    });
  }

  getAllBySessionId = (req, res) => {
    this.model.find({sessionId: req.params.id}, (err, docs) => {
      if (err) { return console.error(err); }
      // console.log(docs);
      res.status(200).json(docs);
    });
  }


  // Insert
  getAllBy = (req, res) => {
    console.log(req.query);
    this.model.find({ WCS_ID: req.body.WCS_ID }, (err, item) => {
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


