/*
  Warnings:

  - You are about to drop the column `recommendedShops` on the `Lead` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "recommendedShops",
ADD COLUMN     "productsSelected" TEXT[];
