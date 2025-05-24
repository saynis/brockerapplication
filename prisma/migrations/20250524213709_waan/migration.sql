-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mathernName" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "work" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "idimageUrl" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "homeAddress" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_idNumber_key" ON "employee"("idNumber");

-- CreateIndex
CREATE UNIQUE INDEX "employee_registrationNumber_key" ON "employee"("registrationNumber");
