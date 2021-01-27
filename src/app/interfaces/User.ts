import {gqlDate} from '../../../../server/src/graphql';

export interface User {
  _id: string;
  f_name: string;
  l_name: string;
  email: string;
  password: string;
  createdAt: gqlDate;
  updatedAt: gqlDate;
}
