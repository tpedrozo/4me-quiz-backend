/*
  Warnings:

  - Added the required column `origin` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "origin" TEXT NOT NULL;
