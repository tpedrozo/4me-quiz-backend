/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "complementary" TEXT[],
    "goal" TEXT[],
    "hairType" TEXT NOT NULL,
    "hairConsider" TEXT NOT NULL,
    "hairLength" TEXT NOT NULL,
    "washFrequency" TEXT NOT NULL,
    "chemicalProcess" TEXT[],
    "hairLoss" TEXT NOT NULL,
    "yourWireAre" TEXT NOT NULL,
    "dandruff" TEXT NOT NULL,
    "frizzType" TEXT NOT NULL,
    "authKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lead_email_key" ON "Lead"("email");
