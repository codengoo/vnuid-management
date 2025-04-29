/*
  Warnings:

  - You are about to drop the column `classId` on the `session_attendances` table. All the data in the column will be lost.
  - Added the required column `subjectId` to the `session_attendances` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "session_attendances" DROP CONSTRAINT "session_attendances_classId_fkey";

-- AlterTable
ALTER TABLE "session_attendances" DROP COLUMN "classId",
ADD COLUMN     "subjectId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "session_attendances" ADD CONSTRAINT "session_attendances_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
