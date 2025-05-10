/*
  Warnings:

  - You are about to drop the column `endTime` on the `subjects` table. All the data in the column will be lost.
  - You are about to drop the column `openingDay` on the `subjects` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `subjects` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `subjects` table. All the data in the column will be lost.
  - Added the required column `end_time` to the `subjects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_done` to the `subjects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opening_day` to the `subjects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_time` to the `subjects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_id` to the `subjects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "subjects" DROP CONSTRAINT "subjects_teacherId_fkey";

-- AlterTable
ALTER TABLE "subjects" DROP COLUMN "endTime",
DROP COLUMN "openingDay",
DROP COLUMN "startTime",
DROP COLUMN "teacherId",
ADD COLUMN     "end_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "is_done" BOOLEAN NOT NULL,
ADD COLUMN     "opening_day" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "start_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "teacher_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "subjects" ADD CONSTRAINT "subjects_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
