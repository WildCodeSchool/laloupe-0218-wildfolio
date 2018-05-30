import * as express from 'express';

import CityController from './controllers/CityController';
import UserController from './controllers/UserController';
import RecrutController from './controllers/RecrutController';
// import city from './models/city';
// import user from './models/user';

export default function routes(app) {

  const router = express.Router();

  const recrut = new RecrutController();
  const city = new CityController();
  const user = new UserController();

  // recruts
  router.route('/recruts').get(recrut.getAll);
  router.route('/recruts/count').get(recrut.count);
  router.route('/recrut').post(recrut.insert);
  router.route('/recrut/:id').get(recrut.get);
  router.route('/recrut/:id').put(recrut.update);
  router.route('/recrut/:id').delete(recrut.delete);

  // cities
  router.route('/cities').get(city.getAll);
  router.route('/cities/count').get(city.count);
  router.route('/city').post(city.insert);
  router.route('/city/:id').get(city.get);
  router.route('/city/:id').put(city.update);
  router.route('/city/:id').delete(city.delete);

  // users
  router.route('/login').post(user.login);
  router.route('/oauth').get(user.oauth);
  router.route('/oauth/callback').get(user.callback);
  router.route('/user').post(user.insert);
  router.route('/user/:id').get(user.get);
  router.route('/user/:id').put(user.update);
  router.route('/user/:id').delete(user.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
