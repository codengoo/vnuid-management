import { Request, Response } from "express";
import { UserType } from "generated/prisma";

function authMidBuilder(req: Request, res: Response, next: Function) {
  const UserId = req.headers["x-user-id"];
  const Role = req.headers["x-user-role"];
  const Token = req.headers["x-user-token"];
  const InternalKey = process.env["INTERNAL_KEY"];

  // console.log(UserId, Role, Token, InternalKey);
  if (UserId && Role && Token && Token === InternalKey) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

export function authMid(roles: UserType[] = []) {
  return (req: Request, res: Response, next: Function) => { 
    console.log(req.headers);
    
    const UserId = req.headers["x-user-id"];
    const Role = req.headers["x-user-role"] as string;
    const Key = req.headers["x-user-key"];
    const InternalKey = process.env["INTERNAL_KEY"];
    const refRoles = roles.map((role) => role.toString().toLowerCase());
    // console.log(UserId, Role, Key, InternalKey);

    if (
      UserId &&
      Role &&
      Key &&
      Key === InternalKey &&
      (roles.length === 0 || refRoles.includes(Role.toLowerCase()))
    ) {
      res.locals.user = { id: UserId, role: Role.toLowerCase() };
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
}
