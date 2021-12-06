-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Dec 06, 2021 at 02:46 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `extreme_makeover`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank_transfer`
--

CREATE TABLE `bank_transfer` (
  `bank_transfer_id` int(11) DEFAULT NULL,
  `account_no` varchar(15) DEFAULT NULL,
  `bank_name` varchar(100) DEFAULT NULL,
  `branch` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bank_transfer`
--

INSERT INTO `bank_transfer` (`bank_transfer_id`, `account_no`, `bank_name`, `branch`) VALUES
(2, '200435556711', 'Fidelity Bank', 'Spintex Branch'),
(3, '200435556711', 'Fidelity Bank', 'Spintex Branch');

-- --------------------------------------------------------

--
-- Table structure for table `cash`
--

CREATE TABLE `cash` (
  `cash_id` int(11) DEFAULT NULL,
  `currency` varchar(50) DEFAULT NULL,
  `received_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cash`
--

INSERT INTO `cash` (`cash_id`, `currency`, `received_by`) VALUES
(1, 'Ghana Cedis', 22),
(4, 'Ghana Cedis', 22);

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `client_id` int(11) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL CHECK (`email` like '%@%.%'),
  `phone_no` char(10) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`client_id`, `fname`, `lname`, `email`, `phone_no`, `address`) VALUES
(1, 'James', 'Barnes', 'jbb14@gmail.com', '294759271', '10 Brook Lane Cantonments'),
(2, 'Andrew', 'White', 'awhiteguy@yahoo.com', '194759374', '17 Maple Drive Tema'),
(3, 'Janet', 'Johnson', 'janj@yahoo.com', '292837492', '12 Ace Lane Dome'),
(4, 'Amy', 'Styles', 'astyles@gmail.com', '293339571', '9 Zoo Street La'),
(5, 'William', 'Effah', 'willef10@gmail.com', '247740221', '16 Sycamore Street Airport'),
(6, 'Rebecca', 'Rae', 'rerae@yahoo.com', '758463262', '15 Liberty Lane Labone'),
(7, 'William', 'Effah', 'willef10@icloud.com', '247740221', '16 Sycamore Street Airport'),
(8, 'Randy', 'Williams', 'rwill85@gmail.com', '827394753', '20A High Lane Dome'),
(9, 'Louis', 'Fall', 'l.fall10@gmail.com', '247243769', '1 World Way Spintex'),
(10, 'Ken', 'Osei', 'K.Osei10@gmail.com', '245634109', 'hydramform Mary Villa H2 Spintex');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_id` varchar(4) NOT NULL,
  `department_name` varchar(100) DEFAULT NULL,
  `head_id` int(11) DEFAULT NULL,
  `head_start_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_id`, `department_name`, `head_id`, `head_start_date`) VALUES
('ACH1', 'Achitecture Department', 1, '2018-03-04'),
('CON4', 'Construction Department', 8, '2021-03-19'),
('DES3', 'Design Department', 2, '2019-03-05'),
('ELC5', 'Electrical Department', 9, '2021-03-19'),
('ENG2', 'Engineering Department', 3, '2020-01-19'),
('FIN6', 'Financial Department', 22, '2021-03-19');

-- --------------------------------------------------------

--
-- Table structure for table `designs`
--

CREATE TABLE `designs` (
  `designs_id` varchar(10) NOT NULL,
  `designs_description` varchar(250) DEFAULT NULL,
  `designs_status` enum('approved','modify') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `designs`
--

INSERT INTO `designs` (`designs_id`, `designs_description`, `designs_status`) VALUES
('C11', 'Design is based on a small office building with two floors', 'approved'),
('C12', 'Design is based on a small office building', 'modify'),
('C21', 'Design is based on renovating home building kitchen and interior redesign', 'approved'),
('C31', 'Design is based on only interior of hall and bedrooms', 'modify'),
('C41', 'Design is based on a an entire home ground floor', 'approved'),
('C51', 'Design is based on a big office building with three floors', 'approved'),
('C61', 'Design is based on a small office building', 'approved');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL CHECK (`email` like '%@exmake%.%'),
  `phone_no` char(10) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `super_id` int(11) DEFAULT NULL,
  `department_id` varchar(4) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `fname`, `lname`, `email`, `phone_no`, `address`, `super_id`, `department_id`, `salary`) VALUES
(1, 'Rebecca', 'Badu', 'rebbad@exmake.com', '0261641586', 'Spintex Mary Villa Rd', NULL, 'ACH1', 40000),
(2, 'Emmanuel', 'Quickly', 'equick24@exmake.com', '283749203', '65 Amber Road Cantonments', NULL, 'DES3', 9500),
(3, 'Iris', 'Johnson', 'irisj11@exmake.com', '0233556677', '12 Joy Road Spintex', NULL, 'ENG2', 15000),
(4, 'Roger', 'Ingles', 'roger.ingles@exmake.com', '22223344', '32 Eagle Lane Dome', 3, 'ENG2', 10000),
(5, 'Daniel', 'Hood', 'danielhood@exmake.com', '222334567', '11A Crow Street Dome', 2, 'DES3', 8000),
(6, 'Alice', 'Fall', 'alicefalls97@exmake.com', '293847324', '101 Lily Lane Spintex', 1, 'ACH1', 8000),
(7, 'Rebecca', 'ASante', 'rebbad@exmake.com', '274734273', '22 Diamond Ave Osu', 3, 'DES3', 8000),
(8, 'Solomon', 'Wilson', 'solow@exmake.com', '294758294', '17 Ace Crescent La', NULL, 'CON4', 11500),
(9, 'Michael', 'Attah', 'm.attah@exmake.com', '293847222', '44 Dussey Road Labone', NULL, 'ELC5', 12000),
(10, 'Ishmael', 'Buri', 'iburi01@exmake.com', '293847333', '6 High Street Jamestown', 9, 'ELC5', 11600),
(11, 'Brandy', 'Gasu', 'bragasu@exmake.com', '283703273', '5 Sailor Drive Nima', 9, 'ELC5', 11600),
(12, 'Joseph', 'Doe', 'jdoe@exmake.com', '245624113', 'House 245 Cactus Street Osu', 1, 'ACH1', 10000),
(13, 'Ama', 'Rae', 'arae@exmake.com', '369375482', 'House 11 Spring Street Cantonments', 8, 'CON4', 11000),
(14, 'Cyril', 'Effah', 'ceffah@exmake.com', '385947385', 'House 58 Mankralo Road Osu', 3, 'CON4', 11000),
(15, 'Kweku', 'Boakye', 'kboakye@exmake.com', '475629374', '64 Zoo Lane Tema', 2, 'DES3', 8000),
(16, 'Issac', 'Wellington', 'iwellington@exmake.com', '374857362', '113 Giraffe Street Tema', 2, 'DES3', 8000),
(17, 'Sarah', 'Lou', 'slou@exmake.com', '472933855', '17B Susu Road Dome', 2, 'DES3', 8000),
(18, 'Henry', 'Williams', 'hwilliams@exmake.com', '227733847', '2 Polo Street Airport', 3, 'ENG2', 10000),
(19, 'Kojo', 'Antwi', 'kantwi@exmake.com', '338472112', 'House 5 Sycamore Lane Osu', 3, 'ENG2', 10000),
(20, 'Pao', 'Leonard', 'pleonard@exmake.com', '2284733977', '221 Liberty Street Airport', 8, 'CON4', 11000),
(21, 'Jane', 'Ansah', 'jansah@exmake.com', '283749273', '39 Second Avenue Cantonments', 8, 'CON4', 11000),
(22, 'Calvin', 'Harris', 'cHarriss@exmake.com', '24657958', '2 Polo Street Airport', NULL, 'FIN6', 16000),
(26, 'Admin', 'Admin', 'admin@exmake.com', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE `equipment` (
  `equipment_id` int(11) NOT NULL,
  `equipment_name` varchar(100) DEFAULT NULL,
  `equipment_amount` int(11) DEFAULT NULL,
  `equipment_status` enum('returned','not returned') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `equipment`
--

INSERT INTO `equipment` (`equipment_id`, `equipment_name`, `equipment_amount`, `equipment_status`) VALUES
(1, 'Bolster', 50, NULL),
(2, 'Brick hammer', 30, NULL),
(3, 'Chisel', 60, NULL),
(4, 'Crowbar', 40, NULL),
(5, 'Digging bar', 50, NULL),
(6, 'Helmet', 20, NULL),
(7, 'Measuring wheel', 30, NULL),
(8, 'Pick axe', 30, NULL),
(9, 'Safety helmet', 40, NULL),
(10, 'Iron pan', 20, NULL),
(11, 'Concrete mixer', 15, NULL),
(12, 'Boning rod', 20, NULL),
(13, 'Cordless drill', 15, NULL),
(14, 'Ladder', 20, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `login_db`
--

CREATE TABLE `login_db` (
  `id` int(20) NOT NULL,
  `user_id` int(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `password` varchar(128) NOT NULL,
  `privilege` int(10) DEFAULT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login_db`
--

INSERT INTO `login_db` (`id`, `user_id`, `user_email`, `password`, `privilege`, `created_at`) VALUES
(31, 8994403, 'admin@exmake.com', '$2y$10$4Vh/1H1xTdE5FhMVmZo.4uIIwkIZAeh7ss5ZZSiibQmv8ezFkOqXO', 1, '2021-12-06 13:06:39.510882'),
(32, 2045531986, 'slou@exmake.com', '$2y$10$fU8DZcgXaEshk/xAmvEAoOm82GNQO9bfz/M/k.hX3ZXihhw7XL1LS', 0, '2021-12-06 13:09:27.857515'),
(33, 224961340, 'm.attah@exmake.com', '$2y$10$diYG.KUp/IITpsheMEpYce43MlXHeAIOyY7JVzlrRhBxV0m/1J6UG', 0, '2021-12-06 13:09:52.229935'),
(34, 2147483647, 'jdoe@exmake.com', '$2y$10$sxrO9D2Itq2LqWNgvkWLguJe9/AOqdBXrN9ns10ZaRxBBpviLETba', 0, '2021-12-06 13:10:31.425300');

-- --------------------------------------------------------

--
-- Table structure for table `mobile_money`
--

CREATE TABLE `mobile_money` (
  `momo_id` int(11) DEFAULT NULL,
  `transaction_id` int(11) DEFAULT NULL,
  `network` varchar(20) DEFAULT NULL,
  `phone_no` varchar(10) DEFAULT NULL,
  `registered_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mobile_money`
--

INSERT INTO `mobile_money` (`momo_id`, `transaction_id`, `network`, `phone_no`, `registered_name`) VALUES
(5, 1123435432, 'MTN', '246783456', 'James Barnes');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `project_id` varchar(10) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `client_id`, `project_id`, `order_date`, `price`) VALUES
(1, 1, 'P11', '2021-03-15', 20000),
(2, 2, 'P21', '2021-03-20', 10000),
(3, 4, 'P41', '2021-04-15', 20000),
(4, 5, 'P51', '2021-05-01', 20000),
(5, 6, NULL, '2021-05-05', 20000);

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `Organization_name` varchar(50) NOT NULL,
  `Tel_no` char(10) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL CHECK (`Email` like '%@%.%')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`Organization_name`, `Tel_no`, `Email`) VALUES
('Azro Group LTD', '263457867', 'AzTD@lazT.org'),
('Inocon Group LTD', '263457867', 'Inogroup@inocon.org'),
('Larz Transport', '263457867', 'ltransort@lazT.org'),
('Oasis LTD', '263457867', 'OasisTD@asis.org'),
('Roofling LTD', '263457867', 'rlingt@rgl.org');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `payment_descrip` varchar(100) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `amount_paid` int(11) DEFAULT NULL,
  `MoP` enum('Mobile Money','Cash','Bank Transfer') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payment_id`, `order_id`, `payment_descrip`, `amount`, `amount_paid`, `MoP`) VALUES
(1, 1, 'downpayment of 50%', 15000, 7500, 'Cash'),
(2, 1, 'remaining 50% for the completed project', 7500, 75000, 'Bank Transfer'),
(3, 2, 'downpayment of 50%', 8000, 4000, 'Bank Transfer'),
(4, 2, 'subsequent payment made', 4000, 2000, 'Cash'),
(5, 2, 'remaining payment for completed project', 2000, 2000, 'Mobile Money');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `project_id` varchar(10) NOT NULL,
  `proj_description` varchar(250) NOT NULL,
  `Designs_id` varchar(10) DEFAULT NULL,
  `start_date` varchar(30) DEFAULT NULL,
  `end_date` char(10) DEFAULT NULL,
  `proj_location` varchar(50) DEFAULT NULL,
  `proj_cost` varchar(100) DEFAULT NULL,
  `proj_status` enum('completed','ongoing','on hold') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_id`, `proj_description`, `Designs_id`, `start_date`, `end_date`, `proj_location`, `proj_cost`, `proj_status`) VALUES
('P11', 'A renovation project for a small office with two floors', 'C11', '2021-03-20', '2021-02-08', '64 Zoo Lane Tema, Accra', '10000', 'completed'),
('P21', 'A renovation project for home building kitchen and interior redesign', 'C21', '2021-04-20', '2021-05-05', 'House 245 Cactus Street Osu, Accra', '9000', 'completed'),
('P41', 'A renovation project for a an entire home ground floor', 'C41', '2020-02-01', '2021-06-14', 'House 11 Spring Street Cantonments, Accra', '8000', 'ongoing'),
('P51', 'A major renovation project for a big office building with three floors', 'C51', '2021-06-20', '2021-07-24', '2 Polo Street Airport, Accra', '4000', 'on hold'),
('P61', 'A minor renovation project for a small office building', 'C61', '2021-08-01', '2021-08-30', '17B Susu Road Dome, Accra', '8000', 'on hold'),
('P62', 'A minor renovation project for a small office building', 'C61', '2021-08-01', '2021-08-30', '17B Susu Road Dome, Accra', '8000', 'on hold'),
('P63', 'A minor renovation project for a small office building', 'C61', NULL, '2021-08-30', '17B Susu Road Dome, Accra', '8000', 'on hold'),
('P64', 'A minor renovation project for a small office building', 'C61', '2020-08-30', '2021-08-30', '17B Susu Road Dome, Accra', '8000', 'on hold'),
('P65', 'A renovation of a tall building with 10 rooms', 'C21', '2020-20-02', '2021-20-02', 'Spintex', '20000', 'ongoing'),
('P66', 'A renovation of a new building', 'C21', '2020-20-02', '2021-20-02', 'Spintex RD', '20000', 'completed'),
('P68', 'A new test from index', 'C21', '2020-02-03', '2021-02-03', 'Spintex RD, Accra', '100000', 'ongoing'),
('P69', 'A new test without C21', 'C11', '2020-20-03', '2021-20-03', 'Accra, GH', '100000', 'on hold'),
('P70', 'A new insert with design', 'C21', '2021-02-03', '2022-02-03', 'Accraaa', '20000', 'on hold'),
('P71', 'A minor renovation project for a small office building', 'C61', '2021-08-01', '2021-08-30', '17B Susu Road Dome, Accra', '8000', 'on hold'),
('P73', 'A new insert with design ID', 'C61', '2021-04-03', '2022-04-03', 'Accraaaa', '2000', 'on hold'),
('P81', 'A minor renovation project for a big office building', 'C61', '2021-08-01', '2021-08-30', '17B Susu Road Dome, Accra', '80000', 'completed'),
('P91', 'A minor renovation project for a big office building', 'C61', '2021-08-01', '2021-08-30', '17B Susu Road Dome, Accra', '80000', 'ongoing');

-- --------------------------------------------------------

--
-- Table structure for table `proj_employee`
--

CREATE TABLE `proj_employee` (
  `Employee_id` int(11) DEFAULT NULL,
  `Project_id` varchar(10) DEFAULT NULL,
  `roles` enum('team memmber','team captain','Project supervisor') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `proj_employee`
--

INSERT INTO `proj_employee` (`Employee_id`, `Project_id`, `roles`) VALUES
(1, 'P11', 'Project supervisor'),
(4, 'P11', 'team memmber'),
(5, 'P11', 'team captain'),
(7, 'P11', 'team memmber'),
(13, 'P11', 'team memmber'),
(4, 'P11', 'team memmber'),
(20, 'P21', 'Project supervisor'),
(4, 'P21', 'team captain'),
(5, 'P21', 'team memmber'),
(2, 'P21', 'team memmber'),
(13, 'P21', 'team memmber');

-- --------------------------------------------------------

--
-- Table structure for table `proj_equipment`
--

CREATE TABLE `proj_equipment` (
  `equipment_id` int(11) DEFAULT NULL,
  `project_id` varchar(10) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `equipment_status` enum('all returned','all not returned','in use') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `proj_equipment`
--

INSERT INTO `proj_equipment` (`equipment_id`, `project_id`, `amount`, `equipment_status`) VALUES
(1, 'P11', 5, 'all returned'),
(2, 'P11', 3, 'all returned'),
(5, 'P11', 6, 'all returned'),
(7, 'P11', 4, 'all returned'),
(9, 'P11', 7, 'all returned'),
(5, 'P11', 4, 'all not returned'),
(3, 'P21', 4, 'all not returned'),
(2, 'P21', 2, 'all not returned'),
(11, 'P21', 6, 'all not returned'),
(8, 'P21', 8, 'all returned'),
(10, 'P21', 5, 'all returned'),
(14, 'P41', 10, 'in use'),
(4, 'P41', 8, 'in use'),
(8, 'P41', 5, 'in use'),
(13, 'P41', 8, 'in use'),
(5, 'P41', 6, 'in use');

-- --------------------------------------------------------

--
-- Table structure for table `proj_partners`
--

CREATE TABLE `proj_partners` (
  `Organization_name` varchar(50) DEFAULT NULL,
  `Project_id` varchar(10) DEFAULT NULL,
  `contribution` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `proj_partners`
--

INSERT INTO `proj_partners` (`Organization_name`, `Project_id`, `contribution`) VALUES
('Larz Transport', 'P11', 1000),
('Azro Group LTD', 'P51', 5000),
('Larz Transport', 'P51', 1500),
('Inocon Group LTD', 'P51', 2000),
('Oasis LTD', 'P21', 500),
('Roofling LTD', 'P11', 2000),
('Roofling LTD', NULL, 6000),
('Inocon Group LTD', 'P41', 1900),
('Larz Transport', 'P21', 1000),
('Azro Group LTD', 'P41', 4000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`client_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`),
  ADD KEY `head_id` (`head_id`);

--
-- Indexes for table `designs`
--
ALTER TABLE `designs`
  ADD PRIMARY KEY (`designs_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `department_id` (`department_id`),
  ADD KEY `super_id` (`super_id`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `equipment`
--
ALTER TABLE `equipment`
  ADD PRIMARY KEY (`equipment_id`);

--
-- Indexes for table `login_db`
--
ALTER TABLE `login_db`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `client_id` (`client_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`Organization_name`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `All_payment_description` (`payment_descrip`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `Designs_id` (`Designs_id`),
  ADD KEY `Dates_for_Projects` (`end_date`),
  ADD KEY `All__Project_cost` (`proj_cost`);

--
-- Indexes for table `proj_employee`
--
ALTER TABLE `proj_employee`
  ADD KEY `Employee_id` (`Employee_id`),
  ADD KEY `Project_id` (`Project_id`);

--
-- Indexes for table `proj_equipment`
--
ALTER TABLE `proj_equipment`
  ADD KEY `equipment_id` (`equipment_id`),
  ADD KEY `project_id` (`project_id`),
  ADD KEY `All_Project_Equipment` (`equipment_status`);

--
-- Indexes for table `proj_partners`
--
ALTER TABLE `proj_partners`
  ADD KEY `Organization_name` (`Organization_name`),
  ADD KEY `Project_id` (`Project_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `equipment`
--
ALTER TABLE `equipment`
  MODIFY `equipment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `login_db`
--
ALTER TABLE `login_db`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `department_ibfk_1` FOREIGN KEY (`head_id`) REFERENCES `employee` (`employee_id`) ON DELETE SET NULL;

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`) ON DELETE SET NULL,
  ADD CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`super_id`) REFERENCES `employee` (`employee_id`) ON DELETE SET NULL;

--
-- Constraints for table `login_db`
--
ALTER TABLE `login_db`
  ADD CONSTRAINT `login_db_ibfk_1` FOREIGN KEY (`user_email`) REFERENCES `employee` (`email`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`client_id`) ON DELETE SET NULL,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE SET NULL;

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`Designs_id`) REFERENCES `designs` (`designs_id`) ON DELETE SET NULL;

--
-- Constraints for table `proj_employee`
--
ALTER TABLE `proj_employee`
  ADD CONSTRAINT `proj_employee_ibfk_1` FOREIGN KEY (`Employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE SET NULL,
  ADD CONSTRAINT `proj_employee_ibfk_2` FOREIGN KEY (`Project_id`) REFERENCES `project` (`project_id`) ON DELETE SET NULL;

--
-- Constraints for table `proj_equipment`
--
ALTER TABLE `proj_equipment`
  ADD CONSTRAINT `proj_equipment_ibfk_1` FOREIGN KEY (`equipment_id`) REFERENCES `equipment` (`equipment_id`) ON DELETE SET NULL,
  ADD CONSTRAINT `proj_equipment_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE SET NULL;

--
-- Constraints for table `proj_partners`
--
ALTER TABLE `proj_partners`
  ADD CONSTRAINT `proj_partners_ibfk_1` FOREIGN KEY (`Organization_name`) REFERENCES `partners` (`Organization_name`) ON DELETE SET NULL,
  ADD CONSTRAINT `proj_partners_ibfk_2` FOREIGN KEY (`Project_id`) REFERENCES `project` (`project_id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
