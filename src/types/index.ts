import { UserType } from "generated/prisma";

export type ILocal = {
  user: IAuth;
};

export type IResBody = {
  message?: string
  data?: any;
};

export type IAuth = {
  id: string;
  role: UserType;
};
