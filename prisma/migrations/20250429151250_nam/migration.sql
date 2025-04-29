/*
  Warnings:

  - You are about to drop the column `status` on the `attendance` table. All the data in the column will be lost.
  - Added the required column `isVerified` to the `attendance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "attendance" DROP COLUMN "status",
ADD COLUMN     "isVerified" BOOLEAN NOT NULL;

-- DropEnum
DROP TYPE "AttendanceStatus";
