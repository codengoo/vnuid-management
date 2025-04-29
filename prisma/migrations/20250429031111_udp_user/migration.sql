/*
  Warnings:

  - You are about to drop the column `age` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sid]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gid]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `start` to the `session_cycles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Biometric_key` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdateAt` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authenticator` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gid` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `official_class` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sid` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "session_cycles" ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "age",
ADD COLUMN     "Biometric_key" TEXT NOT NULL,
ADD COLUMN     "UpdateAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "authenticator" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dob" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "gid" TEXT NOT NULL,
ADD COLUMN     "official_class" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "sid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_sid_key" ON "users"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "users_gid_key" ON "users"("gid");
