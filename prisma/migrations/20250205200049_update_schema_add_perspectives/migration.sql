-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_licenseId_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_packageId_fkey";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "mission" TEXT,
ADD COLUMN     "values" TEXT,
ADD COLUMN     "vision" TEXT,
ALTER COLUMN "packageId" DROP NOT NULL,
ALTER COLUMN "licenseId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Perspective" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "companyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Perspective_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perspective" ADD CONSTRAINT "Perspective_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
