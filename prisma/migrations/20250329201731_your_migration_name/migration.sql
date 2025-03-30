/*
  Warnings:

  - You are about to drop the column `ageId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `chemicalProcessId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `dandruffId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `frizzTypeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hairConsiderId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hairLengthId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hairLossId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hairTypeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `washFrequencyId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `yourHairAreId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Age` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChemicalProcess` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Complementary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dandruff` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FrizzType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Goal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HairConsider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HairLength` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HairLoss` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HairType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WashFrequency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YourHairAre` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chemicalProcess` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dandruff` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frizzType` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hairConsider` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hairLength` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hairLoss` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hairType` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `washFrequency` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yourHairAre` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Complementary" DROP CONSTRAINT "Complementary_userId_fkey";

-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_ageId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_chemicalProcessId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_dandruffId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_frizzTypeId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_hairConsiderId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_hairLengthId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_hairLossId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_hairTypeId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_washFrequencyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_yourHairAreId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "ageId",
DROP COLUMN "chemicalProcessId",
DROP COLUMN "dandruffId",
DROP COLUMN "frizzTypeId",
DROP COLUMN "hairConsiderId",
DROP COLUMN "hairLengthId",
DROP COLUMN "hairLossId",
DROP COLUMN "hairTypeId",
DROP COLUMN "washFrequencyId",
DROP COLUMN "yourHairAreId",
ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "chemicalProcess" TEXT NOT NULL,
ADD COLUMN     "complementary" TEXT[],
ADD COLUMN     "dandruff" TEXT NOT NULL,
ADD COLUMN     "frizzType" TEXT NOT NULL,
ADD COLUMN     "goal" TEXT[],
ADD COLUMN     "hairConsider" TEXT NOT NULL,
ADD COLUMN     "hairLength" TEXT NOT NULL,
ADD COLUMN     "hairLoss" TEXT NOT NULL,
ADD COLUMN     "hairType" TEXT NOT NULL,
ADD COLUMN     "washFrequency" TEXT NOT NULL,
ADD COLUMN     "yourHairAre" TEXT NOT NULL;

-- DropTable
DROP TABLE "Age";

-- DropTable
DROP TABLE "ChemicalProcess";

-- DropTable
DROP TABLE "Complementary";

-- DropTable
DROP TABLE "Dandruff";

-- DropTable
DROP TABLE "FrizzType";

-- DropTable
DROP TABLE "Goal";

-- DropTable
DROP TABLE "HairConsider";

-- DropTable
DROP TABLE "HairLength";

-- DropTable
DROP TABLE "HairLoss";

-- DropTable
DROP TABLE "HairType";

-- DropTable
DROP TABLE "WashFrequency";

-- DropTable
DROP TABLE "YourHairAre";
