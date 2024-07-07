/*
  Warnings:

  - A unique constraint covering the columns `[stripeId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_stripeId_key" ON "Product"("stripeId");
