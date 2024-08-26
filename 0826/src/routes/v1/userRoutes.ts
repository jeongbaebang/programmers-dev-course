import express from 'express';

import { create, read } from '../../controller/userController';

const route = express.Router();

//user
route.get('/', read);
route.post('/', create);

export default route;
