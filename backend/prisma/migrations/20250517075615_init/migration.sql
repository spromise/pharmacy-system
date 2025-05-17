/*
  Warnings:

  - A unique constraint covering the columns `[drug_code,brand_name]` on the table `Drug` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Drug_drug_code_brand_name_key` ON `Drug`(`drug_code`, `brand_name`);
