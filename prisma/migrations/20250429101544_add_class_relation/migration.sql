-- AlterTable
ALTER TABLE "session_cycles" ADD COLUMN     "classId" TEXT;

-- AddForeignKey
ALTER TABLE "session_cycles" ADD CONSTRAINT "session_cycles_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
