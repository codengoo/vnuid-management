import { Request, Response } from "express";

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

export function authMid(roles: string[] = []) {
  return (req: Request, res: Response, next: Function) => {
    const UserId = req.headers["x-user-id"];
    const Role = req.headers["x-user-role"] as string;
    const Token = req.headers["x-user-token"];
    const InternalKey = process.env["INTERNAL_KEY"];

    // console.log(UserId, Role, Token, InternalKey);
    if (
      UserId &&
      Role &&
      Token &&
      Token === InternalKey &&
      (roles.length === 0 || roles.includes(Role.toLowerCase()))
    ) {
      res.locals.user = { id: UserId, role: Role };
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
}
