/*
  Warnings:

  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "RepeatType" AS ENUM ('Weekly');

-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('Valid', 'Invalid', 'Pending');

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "_StudentClass" DROP CONSTRAINT "_StudentClass_A_fkey";

-- DropTable
DROP TABLE "Class";

-- DropTable
DROP TABLE "Session";

-- CreateTable
CREATE TABLE "classes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "openingDay" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "repeat" "RepeatType" NOT NULL,
    "classId" TEXT NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session_cycles" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,

    CONSTRAINT "session_cycles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance" (
    "id" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "status" "AttendanceStatus" NOT NULL,
    "deviceId" TEXT NOT NULL,
    "attendantId" TEXT NOT NULL,
    "sessionCycleId" TEXT NOT NULL,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_cycles" ADD CONSTRAINT "session_cycles_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_attendantId_fkey" FOREIGN KEY ("attendantId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_sessionCycleId_fkey" FOREIGN KEY ("sessionCycleId") REFERENCES "session_cycles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentClass" ADD CONSTRAINT "_StudentClass_A_fkey" FOREIGN KEY ("A") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
