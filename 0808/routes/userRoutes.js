import express from 'express';
import {
  create,
  read,
  update,
  deleteUser,
} from '../controller/userController.js';

const route = express.Router();

//user
route.get('/', read);
route.post('/', create);
route.put('/:id', update);
route.delete('/:id', deleteUser);

export default route;
