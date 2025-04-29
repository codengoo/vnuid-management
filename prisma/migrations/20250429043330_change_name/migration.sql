/*
  Warnings:

  - You are about to drop the column `Biometric_key` on the `users` table. All the data in the column will be lost.
  - Added the required column `biometric_key` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "Biometric_key",
ADD COLUMN     "biometric_key" TEXT NOT NULL;
