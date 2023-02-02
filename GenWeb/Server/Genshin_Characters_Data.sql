-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: bsu-gimm260-fall-2021.cwtgn0g8zxfm.us-west-2.rds.amazonaws.com
-- Generation Time: Dec 06, 2022 at 07:29 PM
-- Server version: 8.0.23
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `KAYLAHUYNH`
--

-- --------------------------------------------------------

--
-- Table structure for table `Genshin_Characters_Data`
--

CREATE TABLE `Genshin_Characters_Data` (
  `id` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Reddit_Freq` int NOT NULL,
  `Google_Freq` int NOT NULL,
  `Location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Genshin_Characters_Data`
--

INSERT INTO `Genshin_Characters_Data` (`id`, `Name`, `Reddit_Freq`, `Google_Freq`, `Location`) VALUES
(1, 'Zhongli', 60, 21500000, 'Liyue'),
(2, 'Klee', 49, 9090000, 'Mondstadt'),
(3, 'Lumine', 47, 11600000, '???'),
(4, 'Hu Tao', 43, 11400000, 'Liyue'),
(5, 'Jean', 43, 26300000, 'Mondstadt'),
(6, 'Aether', 39, 20800000, '???'),
(7, 'Ganyu', 37, 23200000, 'Liyue'),
(8, 'Mona', 35, 16300000, 'Mondstadt'),
(9, 'Venti', 32, 11000000, 'Mondstadt'),
(10, 'Raiden Shogun', 31, 26500000, 'Inazuma'),
(11, 'Keqing', 30, 19100000, 'Liyue'),
(12, 'Barbara', 29, 12800000, 'Mondstadt'),
(13, 'Diluc', 28, 11800000, 'Mondstadt'),
(14, 'Xiao', 27, 14000000, 'Liyue'),
(15, 'Eula', 27, 16700000, 'Mondstadt'),
(16, 'Paimon', 26, 13400000, '???'),
(17, 'Childe', 25, 8570000, 'Snezhnaya'),
(18, 'Ningguang', 24, 7670000, 'Liyue'),
(19, 'Qiqi', 22, 6100000, 'Liyue'),
(20, 'Albedo', 22, 13100000, 'Mondstadt'),
(21, 'Amber', 21, 18800000, 'Mondstadt'),
(22, 'Fischl', 20, 8450000, 'Mondstadt'),
(23, 'Noelle', 20, 11200000, 'Mondstadt'),
(24, 'Xiangling', 19, 5470000, 'Liyue'),
(25, 'Kaeya', 19, 7710000, 'Mondstadt'),
(26, 'Kamisato Ayaka', 19, 9270000, 'Inazuma'),
(27, 'Beidou', 18, 6670000, 'Liyue'),
(28, 'Kaedehara Kazuha', 18, 9730000, 'Inazuma'),
(29, 'Xingqiu', 13, 5650000, 'Liyue'),
(30, 'Xinyan', 13, 1970000, 'Liyue'),
(31, 'Lisa', 12, 18000000, 'Mondstadt'),
(32, 'Kujou Sara', 12, 18100000, 'Inazuma'),
(33, 'Naganohara Yoimiya', 12, 6380000, 'Inazuma'),
(34, 'Bennett', 11, 6890000, 'Mondstadt'),
(35, 'Yae Miko', 11, 13300000, 'Inazuma'),
(36, 'Chongyun', 11, 3230000, 'Liyue'),
(37, 'Sucrose', 10, 5430000, 'Mondstadt'),
(38, 'La Signora', 9, 708000, 'Mondstadt'),
(39, 'Diona', 9, 5240000, 'Mondstadt'),
(40, 'Sangonomiya Kokomi', 8, 7730000, 'Inazuma'),
(41, 'Scaramouche', 8, 7150000, 'Inazuma'),
(42, 'Arataki Itto', 8, 5210000, 'Inazuma'),
(43, 'Rosaria', 8, 7550000, 'Mondstadt'),
(44, 'Yanfei', 7, 4230000, 'Liyue'),
(45, 'Shenhe', 6, 7710000, 'Liyue'),
(46, 'Sayu', 6, 3210000, 'Inazuma'),
(47, 'Yelan', 6, 5960000, 'Liyue'),
(48, 'Razor', 5, 7680000, 'Mondstadt'),
(49, 'Thoma', 4, 12500000, 'Inazuma'),
(50, 'Kamisato Ayato', 3, 5390000, 'Inazuma'),
(51, 'Yaoyao', 2, 391000, 'Liyue'),
(52, 'Yun Jin', 2, 3180000, 'Liyue'),
(53, 'Gorou', 2, 5330000, 'Inazuma'),
(54, 'Baizhu', 2, 513000, 'Liyue'),
(55, 'Kuki Shinobu', 2, 14900000, 'Inazuma'),
(56, 'Dainsleif', 1, 826000, 'Khaenri\'ah'),
(57, 'Shikanoin Heizou', 1, 2150000, 'Inazuma'),
(58, 'Nilou', 1, 9530000, 'Sumeru');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Genshin_Characters_Data`
--
ALTER TABLE `Genshin_Characters_Data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Genshin_Characters_Data`
--
ALTER TABLE `Genshin_Characters_Data`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
