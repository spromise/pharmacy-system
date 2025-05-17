/*
  Warnings:

  - You are about to drop the column `status` on the `prescriptions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `prescription_details` ADD COLUMN `pickupStatus` ENUM('已取药', '未取药') NOT NULL DEFAULT '未取药';

-- AlterTable
ALTER TABLE `prescriptions` DROP COLUMN `status`;
