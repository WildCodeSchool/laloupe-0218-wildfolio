import * as express from 'express';

import BlogProjetController from './controllers/BlogProjetController';
import CityController from './controllers/CityController';
import UserController from './controllers/UserController';
import RecrutController from './controllers/RecrutController';
import StudentController from './controllers/StudentController';
import SessionController from './controllers/Session.Controller';
import LangageController from './controllers/LangageController';
import UploadController from './controllers/UploadController';
import MailController from './controllers/Mail.Controller';
// import city from './models/city';
// import user from './models/user';

export default function routes(app) {

  const router = express.Router();

  const blogProjet = new BlogProjetController();
  const recrut = new RecrutController();
  const city = new CityController();
  const user = new UserController();
  const student = new StudentController();
  const mail = new MailController();
  const session = new SessionController();
  const langage = new LangageController();
  const upload = new UploadController();

  // recruts
  router.route('/recruts').get(recrut.getAll);
  router.route('/recruts/count').get(recrut.count);
  router.route('/recrut').post(recrut.insert);
  router.route('/recrut/:id').get(recrut.get);
  router.route('/recrut/:id').put(recrut.update);
  router.route('/recrut/:id').delete(recrut.delete);

  // students
  router.route('/students').get(student.getAll);
  router.route('/students/count').get(student.count);
  router.route('/student/langage/:id').get(student.getAllByLangageId);
  router.route('/student').post(student.insert);
  router.route('/student/ifNotExists').post(student.insertIfNotExists);
  router.route('/student/:id').get(student.get);
  router.route('/student/wcs/:id').get(student.getbyWCSID);
  router.route('/student/:id').get(student.getOneByWCSID);
  router.route('/student/:id').put(student.update);
  router.route('/student/:id').delete(student.delete);
  // Get student by ID in blogProjet
  router.route('/student/session/:id').get(student.getAllBySessionId);

  // mails
  router.route('/mails').get(mail.getAll);
  router.route('/mails/count').get(mail.count);
  router.route('/mail').post(mail.insert);
  router.route('/mail/:id').get(mail.get);
  router.route('/mail/:id').put(mail.update);
  router.route('/mail/:id').delete(mail.delete);

  // Langages
  router.route('/langages').get(langage.getAll);
  router.route('/langages/count').get(langage.count);
  router.route('/langage').post(langage.insert);
  router.route('/langage/ifNotExists').post(langage.insertIfNotExists);
  router.route('/langage/:id').get(langage.get);
  router.route('/langage/:id').put(langage.update);
  router.route('/langage/:id').delete(langage.delete);

  // blogProjet
  router.route('/blogProjets').get(blogProjet.getAll);
  router.route('/blogProjets/location/:id').get(blogProjet.getAllByLocationId);
  router.route('/blogProjets/session/:id').get(blogProjet.getAllBySessionId);
  router.route('/blogProjets/all/creator/:id').get(blogProjet.getAllByCreator);
  router.route('/blogProjets/all/participant/:id').get(blogProjet.getAllByUser);
  router.route('/blogProjets/count').get(blogProjet.count);
  router.route('/blogProjet').post(blogProjet.insert);
  router.route('/blogProjet/:id').get(blogProjet.get);
  router.route('/blogProjet/:id').put(blogProjet.update);
  router.route('/blogProjet/:id').delete(blogProjet.delete);

  // cities
  router.route('/cities').get(city.getAll);
  router.route('/cities/count').get(city.count);
  router.route('/city').post(city.insert);
  router.route('/city/ifNotExists').post(city.insertIfNotExists);
  router.route('/city/:id').get(city.get);
  router.route('/city/:id').put(city.update);
  router.route('/city/:id').delete(city.delete);

  // sessions
  router.route('/sessions').get(session.getAll);
  router.route('/sessions/location/:id').get(session.getAllbyLocationId);
  router.route('/sessions/count').get(session.count);
  router.route('/session').post(session.insert);
  router.route('/session/ifNotExists').post(session.insertIfNotExists);
  router.route('/session/:id').get(session.get);
  router.route('/session/:id').put(session.update);
  router.route('/session/:id').delete(session.delete);

  // users
  router.route('/login').post(user.login);
  router.route('/oauth').get(user.oauth);
  router.route('/oauth/callback').get(user.callback);
  router.route('/user').post(user.insert);
  router.route('/user/:id').get(user.get);
  router.route('/user/:id').put(user.update);
  router.route('/user/:id').delete(user.delete);

  // upload
  router.route('/upload').post(upload.upload);
  router.route('/file/:filename').get(upload.getFile);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
