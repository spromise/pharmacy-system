-- CreateTable
CREATE TABLE `patients` (
    `visit_id` VARCHAR(12) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `gender` ENUM('男', '女') NOT NULL,
    `contact` VARCHAR(50) NULL,
    `first_visit_date` DATETIME(3) NOT NULL,
    `medical_history` TEXT NULL,

    PRIMARY KEY (`visit_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctors` (
    `doctor_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,
    `department` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`doctor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prescriptions` (
    `prescription_id` INTEGER NOT NULL AUTO_INCREMENT,
    `patient_visit_id` VARCHAR(191) NOT NULL,
    `doctor_id` INTEGER NOT NULL,
    `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `diagnosis` VARCHAR(500) NULL,
    `remarks` TEXT NULL,
    `total_amount` DOUBLE NOT NULL DEFAULT 0.0,

    INDEX `prescriptions_patient_visit_id_idx`(`patient_visit_id`),
    INDEX `prescriptions_doctor_id_idx`(`doctor_id`),
    PRIMARY KEY (`prescription_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prescription_details` (
    `prescription_id` INTEGER NOT NULL,
    `drug_code` VARCHAR(191) NOT NULL,
    `drug_name` VARCHAR(100) NOT NULL,
    `unit_price` DOUBLE NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `usage_instruction` VARCHAR(200) NOT NULL,
    `pickupStatus` ENUM('已取药', '未取药') NOT NULL DEFAULT '未取药',

    PRIMARY KEY (`prescription_id`, `drug_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Drug` (
    `drug_code` CHAR(14) NOT NULL,
    `generic_name` VARCHAR(100) NOT NULL,
    `brand_name` VARCHAR(100) NULL,
    `dosage_form` VARCHAR(50) NOT NULL,
    `specification` VARCHAR(500) NULL,
    `manufacturer` VARCHAR(100) NULL,
    `unit_price` DOUBLE NULL,

    UNIQUE INDEX `Drug_brand_name_key`(`brand_name`),
    PRIMARY KEY (`drug_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory` (
    `inventory_id` INTEGER NOT NULL AUTO_INCREMENT,
    `drug_code` CHAR(14) NOT NULL,
    `stock_quantity` INTEGER NOT NULL DEFAULT 0,
    `alert_threshold` INTEGER NOT NULL DEFAULT 50,
    `last_inbound_time` DATETIME(3) NULL,
    `last_outbound_time` DATETIME(3) NULL,

    PRIMARY KEY (`inventory_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pharmacists` (
    `pharmacist_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`pharmacist_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inbound` (
    `inbound_id` INTEGER NOT NULL AUTO_INCREMENT,
    `drug_code` CHAR(14) NOT NULL,
    `batch_number` VARCHAR(50) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `inbound_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expiration_date` DATETIME(3) NOT NULL,
    `pharmacist_id` INTEGER NULL,

    PRIMARY KEY (`inbound_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `outbound` (
    `outbound_id` INTEGER NOT NULL AUTO_INCREMENT,
    `drug_code` CHAR(14) NOT NULL,
    `batch_number` VARCHAR(50) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `prescription_id` INTEGER NULL,
    `outbound_type` VARCHAR(20) NOT NULL,
    `outbound_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pharmacist_id` INTEGER NULL,

    PRIMARY KEY (`outbound_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `price_history` (
    `price_id` INTEGER NOT NULL AUTO_INCREMENT,
    `drug_code` CHAR(14) NOT NULL,
    `old_price` DOUBLE NULL,
    `new_price` DOUBLE NOT NULL,
    `effective_date` DATETIME(3) NOT NULL,
    `pharmacist_id` INTEGER NULL,

    PRIMARY KEY (`price_id`)
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
ALTER TABLE `prescriptions` ADD CONSTRAINT `prescriptions_patient_visit_id_fkey` FOREIGN KEY (`patient_visit_id`) REFERENCES `patients`(`visit_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prescriptions` ADD CONSTRAINT `prescriptions_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `doctors`(`doctor_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prescription_details` ADD CONSTRAINT `prescription_details_prescription_id_fkey` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions`(`prescription_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prescription_details` ADD CONSTRAINT `prescription_details_drug_code_fkey` FOREIGN KEY (`drug_code`) REFERENCES `Drug`(`drug_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `inventory_drug_code_fkey` FOREIGN KEY (`drug_code`) REFERENCES `Drug`(`drug_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inbound` ADD CONSTRAINT `inbound_drug_code_fkey` FOREIGN KEY (`drug_code`) REFERENCES `Drug`(`drug_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inbound` ADD CONSTRAINT `inbound_pharmacist_id_fkey` FOREIGN KEY (`pharmacist_id`) REFERENCES `pharmacists`(`pharmacist_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `outbound` ADD CONSTRAINT `outbound_drug_code_fkey` FOREIGN KEY (`drug_code`) REFERENCES `Drug`(`drug_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `outbound` ADD CONSTRAINT `outbound_prescription_id_fkey` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions`(`prescription_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `outbound` ADD CONSTRAINT `outbound_pharmacist_id_fkey` FOREIGN KEY (`pharmacist_id`) REFERENCES `pharmacists`(`pharmacist_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `price_history` ADD CONSTRAINT `price_history_drug_code_fkey` FOREIGN KEY (`drug_code`) REFERENCES `Drug`(`drug_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `price_history` ADD CONSTRAINT `price_history_pharmacist_id_fkey` FOREIGN KEY (`pharmacist_id`) REFERENCES `pharmacists`(`pharmacist_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory_check` ADD CONSTRAINT `inventory_check_drug_code_fkey` FOREIGN KEY (`drug_code`) REFERENCES `Drug`(`drug_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory_check` ADD CONSTRAINT `inventory_check_pharmacist_id_fkey` FOREIGN KEY (`pharmacist_id`) REFERENCES `pharmacists`(`pharmacist_id`) ON DELETE SET NULL ON UPDATE CASCADE;
