/*
  Warnings:

  - You are about to drop the column `classId` on the `session_cycles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "session_cycles" DROP CONSTRAINT "session_cycles_classId_fkey";

-- AlterTable
ALTER TABLE "session_cycles" DROP COLUMN "classId",
ADD COLUMN     "subjectId" TEXT;

-- AddForeignKey
ALTER TABLE "session_cycles" ADD CONSTRAINT "session_cycles_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
