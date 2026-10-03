/*
  Warnings:

  - You are about to drop the column `date` on the `Job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "date",
ALTER COLUMN "visible" SET DEFAULT true;
