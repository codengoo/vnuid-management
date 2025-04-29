import { PrismaClient } from "generated/prisma";

console.log(process.env.DATABASE_URL);


export const prisma = new PrismaClient();
