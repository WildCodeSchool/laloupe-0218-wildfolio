import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import userModel from '../models/userModel';
import BaseController from './BaseController';
const simpleOauthModule = require('simple-oauth2');
const https = require('https');


const oauth2 = simpleOauthModule.create({
    client: {
        id: '5b473f25ae3b81262abce0595e896c5876bb56fd8604863b724ae792aece495e',
        secret: '851f080ed080e7aac1a869b47bf5b1a33cfdfbcfd6d1c19ecd886fc41683c85e',
    },
    auth: {
        tokenHost: 'https://ppody.innoveduc.fr',
        tokenPath: '/oauth/token',
        authorizePath: '/oauth/authorize',
    },
});

// Authorization uri definition
const authorizationUri = oauth2.authorizationCode.authorizeURL({
    redirect_uri: 'http://localhost:4200/api/oauth/callback',
    scope: '',
    state: '',
});


export default class UserController extends BaseController {
  model = userModel;

<<<<<<< HEAD
    login = (req, res) => {
        this.model.findOne({ email: req.body.email }, (err, user) => {
            if (!user) { return res.sendStatus(403); }
            user.comparePassword(req.body.password, (error, isMatch) => {
                if (!isMatch) { return res.sendStatus(403); }
                const token = jwt.sign({ user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
                res.status(200).json({ token });
            });
        });
    }

    oauth = (req, res) => {
        console.log(authorizationUri);
        res.redirect(authorizationUri);
    };


    // Callback service parsing the authorization token and asking for the access token
    callback = async (req, res) => {
        const code = req.query.code;
        const options = {
            code,
            redirect_uri: 'http://localhost:4200/api/oauth/callback',
            scope: '',
            state: '',
        };

        console.log(code);


        try {
            const result = await oauth2.authorizationCode.getToken(options);

            const token = oauth2.accessToken.create(result);

            return res.status(200).json(token)
        } catch (error) {
            console.error('Access Token Error', error);
            return res.status(500).json('Authentication failed');
        }
    };

    success = (req, res) => {
        res.send('');
    };

=======
  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        return res.sendStatus(403);
      }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) {
          return res.sendStatus(403);
        }
        const token = jwt.sign({ user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token });
      });
    });
  }
>>>>>>> f9afd77727baaf234016eb9be6ac7abc75124a5f
}
