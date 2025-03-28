-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "ageId" TEXT NOT NULL,
    "hairTypeId" TEXT NOT NULL,
    "hairConsiderId" TEXT NOT NULL,
    "hairLengthId" TEXT NOT NULL,
    "washFrequencyId" TEXT NOT NULL,
    "chemicalProcessId" TEXT NOT NULL,
    "hairLossId" TEXT NOT NULL,
    "yourHairAreId" TEXT NOT NULL,
    "dandruffId" TEXT NOT NULL,
    "frizzTypeId" TEXT NOT NULL,
    "authKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Age" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Age_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complementary" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Complementary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HairType" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "HairType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HairConsider" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "HairConsider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HairLength" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "HairLength_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashFrequency" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "WashFrequency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChemicalProcess" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "ChemicalProcess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HairLoss" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "HairLoss_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YourHairAre" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "YourHairAre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dandruff" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Dandruff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrizzType" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "FrizzType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ageId_fkey" FOREIGN KEY ("ageId") REFERENCES "Age"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_hairTypeId_fkey" FOREIGN KEY ("hairTypeId") REFERENCES "HairType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_hairConsiderId_fkey" FOREIGN KEY ("hairConsiderId") REFERENCES "HairConsider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_hairLengthId_fkey" FOREIGN KEY ("hairLengthId") REFERENCES "HairLength"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_washFrequencyId_fkey" FOREIGN KEY ("washFrequencyId") REFERENCES "WashFrequency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_chemicalProcessId_fkey" FOREIGN KEY ("chemicalProcessId") REFERENCES "ChemicalProcess"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_hairLossId_fkey" FOREIGN KEY ("hairLossId") REFERENCES "HairLoss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_yourHairAreId_fkey" FOREIGN KEY ("yourHairAreId") REFERENCES "YourHairAre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_dandruffId_fkey" FOREIGN KEY ("dandruffId") REFERENCES "Dandruff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_frizzTypeId_fkey" FOREIGN KEY ("frizzTypeId") REFERENCES "FrizzType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complementary" ADD CONSTRAINT "Complementary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
