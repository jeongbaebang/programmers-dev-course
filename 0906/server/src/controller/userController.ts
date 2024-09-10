import { Request, Response } from 'express';
import { asyncWave } from 'async-wave';
import { faker } from '@faker-js/faker';

import User from '../model/userModel';
import { UserType } from '../types';

export const userController = {
  create: async (req: Request<UserType>, res: Response) => {
    try {
      const { name }: UserType = req.body;
      const userExist = await User.findOne({ name });

      if (userExist) {
        return res.status(400).json({ message: 'user already exists' });
      }

      const userData = new User(req.body);
      const saveUser = await userData.save();

      res
        .status(200)
        .json({ message: 'created successfully', payload: saveUser });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  },
  read: async (_req: Request, res: Response) => {
    try {
      const users = await User.find();

      if (!users || users.length === 0) {
        return res.status(200).json([]);
      }

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error });
    }
  },
  update: async (req: Request, res: Response) => {
    const userId = req.params.id;
    const updatedData = req.body;

    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
        new: true, // 업데이트된 데이터를 반환
        runValidators: true, // 스키마 유효성 검사를 실행
      });

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res
        .status(200)
        .json({ message: 'Updated successfully', payload: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Update failed', error });
    }
  },
  delete: async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      await User.findByIdAndDelete(userId);

      res.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Deletion failed', error });
    }
  },
};

// 더미데이터 생성용
export const createMockUser = async () => {
  for (let i = 0; i < 100; i++) {
    const payload: UserType = {
      name: faker.internet.userName(),
      address: faker.location.streetAddress(),
      email: faker.internet.email(),
      description: faker.internet.userAgent(),
    };

    const userData = new User(payload);
    await userData.save();
  }

  return { message: 'created successfully' };
};
