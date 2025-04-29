import { UserType } from "generated/prisma";

export type ILocal = {
  user: IAuth;
};

export type IResBody = {
  data: any;
};

export type IAuth = {
  id: string;
  role: UserType;
};
