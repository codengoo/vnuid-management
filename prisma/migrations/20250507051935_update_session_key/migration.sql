/*
  Warnings:

  - You are about to drop the column `sessionId` on the `session_cycles` table. All the data in the column will be lost.
  - You are about to drop the column `subjectId` on the `session_cycles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[session_id,start]` on the table `session_cycles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `session_id` to the `session_cycles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "session_cycles" DROP CONSTRAINT "session_cycles_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "session_cycles" DROP CONSTRAINT "session_cycles_subjectId_fkey";

-- AlterTable
ALTER TABLE "session_cycles" DROP COLUMN "sessionId",
DROP COLUMN "subjectId",
ADD COLUMN     "session_id" TEXT NOT NULL,
ADD COLUMN     "subject_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "session_cycles_session_id_start_key" ON "session_cycles"("session_id", "start");

-- AddForeignKey
ALTER TABLE "session_cycles" ADD CONSTRAINT "session_cycles_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "session_attendances"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_cycles" ADD CONSTRAINT "session_cycles_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
