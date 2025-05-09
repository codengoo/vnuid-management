/*
  Warnings:

  - You are about to drop the column `faceData` on the `profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "faceData",
ADD COLUMN     "face_data" TEXT;
