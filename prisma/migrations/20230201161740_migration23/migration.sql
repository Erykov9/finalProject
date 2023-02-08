/*
  Warnings:

  - The primary key for the `order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `order` table. All the data in the column will be lost.
  - Added the required column `email` to the `Order` table without a default value. This is not possible if the table is not empty.
  - The required column `orderId` was added to the `Order` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `payment` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_productId_fkey`;

-- AlterTable
ALTER TABLE `order` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `productId`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `orderId` VARCHAR(191) NOT NULL,
    ADD COLUMN `payment` VARCHAR(191) NOT NULL,
    ADD COLUMN `total` INTEGER NOT NULL,
    ADD PRIMARY KEY (`orderId`);

-- CreateTable
CREATE TABLE `OrdersOnProducts` (
    `ordersId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrdersOnProducts` ADD CONSTRAINT `OrdersOnProducts_ordersId_fkey` FOREIGN KEY (`ordersId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdersOnProducts` ADD CONSTRAINT `OrdersOnProducts_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
