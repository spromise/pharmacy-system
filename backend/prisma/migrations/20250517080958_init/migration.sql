/*
  Warnings:

  - You are about to drop the column `expiration_date` on the `inventory` table. All the data in the column will be lost.
  - Added the required column `expiration_date` to the `inbound` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inbound` ADD COLUMN `expiration_date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `inventory` DROP COLUMN `expiration_date`;
