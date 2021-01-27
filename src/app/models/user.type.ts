export type User = {
  _id: string;
  f_name: string;
  l_name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Query = {
  user: User;
};
