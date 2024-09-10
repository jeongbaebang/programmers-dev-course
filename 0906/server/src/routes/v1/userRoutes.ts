import express from 'express';

import { userController } from '../../controller/userController';

const route = express.Router();

//user
route.get('/', userController.read);
route.post('/', userController.create);
route.put('/:id', userController.update);
route.delete('/:id', userController.delete);

export default route;
