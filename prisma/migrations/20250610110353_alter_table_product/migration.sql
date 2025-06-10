/*
  Warnings:

  - You are about to drop the column `imageUrls` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "imageUrls",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrls" TEXT[];
