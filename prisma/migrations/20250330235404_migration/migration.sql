/*
  Warnings:

  - You are about to drop the column `yourHairAre` on the `User` table. All the data in the column will be lost.
  - Added the required column `yourWireAre` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "yourHairAre",
ADD COLUMN     "yourWireAre" TEXT NOT NULL;
