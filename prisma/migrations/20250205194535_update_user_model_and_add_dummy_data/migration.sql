/*
  Warnings:

  - You are about to drop the column `customFields` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the `CustomField` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CustomTable` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "customFields";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "department" TEXT,
ADD COLUMN     "position" TEXT;

-- DropTable
DROP TABLE "CustomField";

-- DropTable
DROP TABLE "CustomTable";
