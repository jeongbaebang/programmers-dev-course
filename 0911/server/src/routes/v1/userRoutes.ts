import express from 'express';

import { UserService } from '../../service/userService';
import { UserController } from '../../controller/userController';

const route = express.Router();
const userService = new UserService();
const userController = new UserController(userService);

//user
route.get('/', userController.read);
route.post('/', userController.create);
route.put('/:id', userController.update);
route.delete('/:id', userController.delete);

export default route;
