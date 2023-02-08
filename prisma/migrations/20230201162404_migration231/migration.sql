/*
  Warnings:

  - You are about to drop the `ordersonproducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ordersonproducts` DROP FOREIGN KEY `OrdersOnProducts_ordersId_fkey`;

-- DropForeignKey
ALTER TABLE `ordersonproducts` DROP FOREIGN KEY `OrdersOnProducts_productId_fkey`;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `productId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `ordersonproducts`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
