/*
  Warnings:

  - You are about to drop the `sessions_attendance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "session_cycles" DROP CONSTRAINT "session_cycles_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "sessions_attendance" DROP CONSTRAINT "sessions_attendance_classId_fkey";

-- DropTable
DROP TABLE "sessions_attendance";

-- CreateTable
CREATE TABLE "session_attendance" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "repeat" "RepeatType" NOT NULL,
    "classId" TEXT NOT NULL,

    CONSTRAINT "session_attendance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "session_attendance" ADD CONSTRAINT "session_attendance_classId_fkey" FOREIGN KEY ("classId") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_cycles" ADD CONSTRAINT "session_cycles_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "session_attendance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
