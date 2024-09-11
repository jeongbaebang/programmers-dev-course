import { faker } from '@faker-js/faker';

import { UserType } from '../types';
import User, { IUser } from '../models/userModel';

export interface IUserService {
  createUser(data: UserType): Promise<IUser>;
  getUsers(): Promise<IUser[]>;
  updateUser(userId: string, data: UserType): Promise<IUser | null>;
  deleteUser(userId: string): Promise<boolean>;
  createMockUser(): Promise<string>;
}

export class UserService implements IUserService {
  async createUser(data: UserType): Promise<IUser> {
    const userExist = await User.findOne({ name: data.name });

    if (userExist) {
      throw new Error('User already exists');
    }
    const userData = new User(data);

    return await userData.save();
  }

  async getUsers(): Promise<IUser[]> {
    return await User.find();
  }

  async updateUser(userId: string, data: UserType): Promise<IUser | null> {
    return await User.findByIdAndUpdate(userId, data, {
      new: true,
      runValidators: true,
    });
  }

  async deleteUser(userId: string): Promise<boolean> {
    const user = await User.findById(userId);

    if (!user) {
      return false;
    }

    await User.findByIdAndDelete(userId);

    return true;
  }

  async createMockUser(): Promise<string> {
    for (let i = 0; i < 100; i++) {
      const payload: UserType = {
        name: faker.internet.userName(),
        address: faker.location.streetAddress(),
        email: faker.internet.email(),
        description: faker.internet.userAgent(),
      };

      await this.createUser(payload);
    }

    return 'created successfully';
  }
}
