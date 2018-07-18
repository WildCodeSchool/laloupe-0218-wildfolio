import blogProjetModel from '../models/blogProjetModel';
import studentModel from '../models/studentModel';
import BaseController from './BaseController';

export default class BlogProjetController extends BaseController {
  model = blogProjetModel;

  // Get by id
  get = (req, res) => {
    this.model.findOne({ _id: req.params.id }, async (err, item) => {
      if (err) {
        return console.error(err);
      }
      const users = [];
      for (const id of item.eleves) {
        const foundUser = await new Promise((resolve, reject) => {
          studentModel.findOne({ _id: id }, (err2, user) => {
            if (err) {
              reject(err2);
            }
            resolve(user);
          });
        });
        users.push(foundUser);
      } // Forcer le code a redevenir JSON puis redevenir un item js
      const obj = JSON.parse(JSON.stringify(item));
      obj.eleves = users;
      res.status(200).json(obj);
    });
  }

  getAllByLocationId = (req, res) => {
    this.model.find({ locationId: req.params.id }, (err, docs) => {
      if (err) {
        return console.error(err);
      }
      // console.log(docs);
      res.status(200).json(docs);
    });
  }

  // All projets that this user created
  getAllByCreator = (req, res) => {
    this.model.find({ studentId: req.params.id }, (err, docs) => {
      if (err) {
        return console.error(err);
      }
      // console.log(docs);
      res.status(200).json(docs);
    });
  }

  // All projets where user participated (not necessarily the creator)
  getAllByUser = (req, res) => {
    // console.log(req.params),
    this.model.find({ eleves: req.params.id }, (err, docs) => {
      if (err) {
        return console.error(err);
      }
        // console.log(docs);
      res.status(200).json(docs);
    });
  }

  getAllBySessionId = (req, res) => {
    this.model.find({ sessionId: req.params.id }, (err, docs) => {
      if (err) {
        return console.error(err);
      }
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
