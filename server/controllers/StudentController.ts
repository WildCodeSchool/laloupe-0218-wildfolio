import studentModel from '../models/studentModel';
import BaseController from './BaseController';

export default class StudentController extends BaseController {
  model = studentModel;
}
