-- AlterTable
ALTER TABLE "classes" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "faceData" TEXT,
ALTER COLUMN "authenticator" DROP NOT NULL,
ALTER COLUMN "biometric_key" DROP NOT NULL;
