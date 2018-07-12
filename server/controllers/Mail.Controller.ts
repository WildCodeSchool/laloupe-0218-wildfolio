import mailModel from '../models/mailModel';
import BaseController from './BaseController';
const nodemailer = require('nodemailer');

export default class MailController extends BaseController {
  model = mailModel;

  // Insert
  insert = (req, res) => {
    console.log(req.body);
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
      // Envoyer mail
      this.sendMail(
        req.body.to,
        req.body.subject,
        req.body.description,
        req.body.author,
      );
    });
  }

  sendMail = (to, subject, description, author) => {
    console.log('ok');
    const smtpTransport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'wcsfolio@gmail.com',
        pass: 'jecode4laloupe',
      },
    });

    const mailOptions = {
      from: 'wcsfolio@gmail.com',
      to: `${to}`,
      subject: `${subject}`,
      html: `${description}`,
      replyTo: `${author}`,
    };
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (!error) {
        console.log('Email has been sent successfuly');
      }
    });
  }
}
