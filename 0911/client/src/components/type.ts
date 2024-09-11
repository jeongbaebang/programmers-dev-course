export enum Keys {
  USER_LIST = 'USER_LIST',
}

export type UserResponseType = {
  _id: string;
  name: string;
  address: string;
  email: string;
  description: string;
  isCompleted?: boolean;
};

export type UserType = Omit<UserResponseType, '_id'>;
