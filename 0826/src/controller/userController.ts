import { Request, Response } from 'express';
import { asyncWave } from 'async-wave';

import User from '../model/userModel';
import { Customer } from '../types';
import { v4 } from 'uuid';

export const read = (req: Request, res: Response) => {
  const getAllUserFormDB = () => User.find();
  const validateUser = (users: Customer[]) => {
    if (!users) {
      return [];
    }

    return users;
  };

  asyncWave<Customer[]>([getAllUserFormDB, validateUser], {
    onSuccess: (payload) => {
      res.status(200).json(payload);
    },
    onError: (error) => {
      const statusCode = parseInt(error.message);

      if (statusCode === 404) {
        return res.status(404).json({ message: 'Not Found' });
      }

      return res.status(500).json({ error: 'Inter Server Error' });
    },
  });
};

export const create = async (req: Request<Customer>, res: Response) => {
  const payload: Customer = {
    id: v4(),
    ...req.body,
  };
  const userData = new User(payload);
  const { name } = payload;
  const userExist = await User.findOne({ name });

  if (userExist) {
    return res.status(400).json({ message: 'user already exists' });
  }

  const saveUser = await userData.save();

  res.status(200).json({ message: 'created successfully', payload: saveUser });
};
