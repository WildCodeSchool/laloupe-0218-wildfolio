import uploadModel from '../models/uploadModel';
import BaseController from './BaseController';

const multer = require('multer');
const path = require('path');
const fs = require('fs');
const gridFsStorage = require('multer-gridfs-storage');
const grid = require('gridfs-stream');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');

export default class UploadController extends BaseController {
    model = uploadModel;

    constructor() {
        super();
    }

    // Check file type
    checkFileType = (file, cb) => {
        // allowed ext
        const filetypes = /jpeg|jpg|pdf|png|gif|pdf|svg/;
        // check ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        // check mime
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb('error: Images only !');
    }

    upload = (req, res) => {
        console.log('upload');
        const storage = gridFsStorage({
            url: process.env.MONGODB_URI,

            filename: (req2, file, cb) => {
                const datetimestamp = Date.now();
                cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
            },
            /** With gridfs we can store aditional meta-data along with the file */
            metadata: (req2, file, cb) => {
                cb(null, { originalname: file.originalname });
            },
            root: 'ctFiles',
            // root name for collection to store files into
        });

        //
        const multerFun = multer({
            storage,
            // limits: { fileSize: 100000 },
            fileFilter: (req2, file, cb) => {
                this.checkFileType(file, cb);
            },
        }).single('myImage');

        multerFun(req, res, (err) => {
            if (err) {
                return console.error(err);
            }
            if (req.file === undefined) {
                return console.error('error: no file selected!');
            }
            res.json({ filename: req.file.filename });
        });
    }

    // downloadFile(request, response) {
    //     const selector = request.param('Selector');

    //     response.writeHead(200, { 'Content-Type': 'image/png' });
    //     grid.createReadStream({ filename: 'FileUploadNamed' }).pipe(response);
    // }

    getFile(req, res) {
        console.log('getFile');
        MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
            // Client returned
            const db = client.db('test');
            // })

            // const db = new mongo.Db('test', new mongo.Server(process.env.MONGODB_URI, 27017));
            // const mongodb = mongoose.connect(process.env.MONGODB_URI);
            // const db = mongoose.connection;
            // db.once('open', () => {
            // ..
            // console.log(db);

            console.log('Connected to MongoDB (GridFs)');
            // db.open((err) => {
            // if (err) {
            //   return console.log('An error occurred!', err);
            // }
            // all set!

            const gfs = grid(db, mongo, 'r');

            const readstream = gfs.createReadStream({
                // _id: '5b28c280947d9c03ade9a940',
                filename: req.params.filename,
                // filename:"114a59276e60af19842027d35ab39a19",
            });
            readstream.pipe(res);

            readstream.on('error', (err2) => {
                console.log('An error occurred!', err2);
                throw err2;
            });
            // readstream.on('close', (file) => {
            //   // do something with `file`
            //   console.log('close :', file.filename);
            // });
        });
    }
}