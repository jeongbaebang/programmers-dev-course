import { Request, Response } from 'express';

import { UserType } from '../types';
import { IUserService } from '../service/userService';

// 단일 책임 원칙(SRP): 컨트롤러가 요청/응답 처리에만 집중하도록 하여 비즈니스 로직을 서비스 레이어로 분리
export class UserController {
  constructor(private userService: IUserService) {}

  async create(req: Request, res: Response) {
    try {
      const userData: UserType = req.body;
      const user = await this.userService.createUser(userData);

      res
        .status(201)
        .json({ message: 'User created successfully', payload: user });
    } catch (error) {
      const errorInstance =
        error instanceof Error
          ? error.message
          : new Error('Internal server Error').message;

      res.status(400).json({ message: errorInstance });
    }
  }

  async read(_req: Request, res: Response) {
    try {
      const users = await this.userService.getUsers();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  }

  async update(req: Request, res: Response) {
    const userId = req.params.id;
    const updateData = req.body;

    try {
      const updatedUser = await this.userService.updateUser(userId, updateData);

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res
        .status(200)
        .json({ message: 'Updated successfully', payload: updatedUser });
    } catch (error) {
      res.status(500).json({ message: 'Update failed', error });
    }
  }

  async delete(req: Request, res: Response) {
    const userId = req.params.id;

    try {
      const isDeleted = await this.userService.deleteUser(userId);

      if (!isDeleted) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Deletion failed', error });
    }
  }

  async mock(_req: Request, res: Response) {
    try {
      const message = await this.userService.createMockUser();

      res.status(200).json({ message: message });
    } catch (error) {
      res.status(500).json({ message: 'Deletion failed', error });
    }
  }
}
