/*
  Warnings:

  - You are about to drop the column `operator_id` on the `inbound` table. All the data in the column will be lost.
  - You are about to drop the column `operator_id` on the `price_history` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `inbound` DROP COLUMN `operator_id`,
    ADD COLUMN `pharmacist_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `outbound` ADD COLUMN `pharmacist_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `price_history` DROP COLUMN `operator_id`,
    ADD COLUMN `pharmacist_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `pharmacists` (
    `pharmacist_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`pharmacist_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_check` (
    `check_id` INTEGER NOT NULL AUTO_INCREMENT,
    `drug_code` CHAR(14) NOT NULL,
    `physical_quantity` INTEGER NOT NULL,
    `system_quantity` INTEGER NOT NULL,
    `discrepancy_reason` TEXT NULL,
    `check_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pharmacist_id` INTEGER NULL,

    PRIMARY KEY (`check_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inbound` ADD CONSTRAINT `inbound_pharmacist_id_fkey` FOREIGN KEY (`pharmacist_id`) REFERENCES `pharmacists`(`pharmacist_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `outbound` ADD CONSTRAINT `outbound_pharmacist_id_fkey` FOREIGN KEY (`pharmacist_id`) REFERENCES `pharmacists`(`pharmacist_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `price_history` ADD CONSTRAINT `price_history_pharmacist_id_fkey` FOREIGN KEY (`pharmacist_id`) REFERENCES `pharmacists`(`pharmacist_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory_check` ADD CONSTRAINT `inventory_check_drug_code_fkey` FOREIGN KEY (`drug_code`) REFERENCES `Drug`(`drug_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory_check` ADD CONSTRAINT `inventory_check_pharmacist_id_fkey` FOREIGN KEY (`pharmacist_id`) REFERENCES `pharmacists`(`pharmacist_id`) ON DELETE SET NULL ON UPDATE CASCADE;
