-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 07, 2023 at 02:23 AM
-- Server version: 8.0.30
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `BrainOut`
--

-- --------------------------------------------------------

--
-- Table structure for table `chgkdb`
--

CREATE TABLE `chgkdb` (
  `question_text` varchar(123) NOT NULL,
  `answer_text` varchar(123) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `chgkdb`
--

INSERT INTO `chgkdb` (`question_text`, `answer_text`) VALUES
('1234', '154'),
('1234', '154'),
('1234', '154'),
('123', '123'),
('123', '123'),
('123', '123');

-- --------------------------------------------------------

--
-- Table structure for table `chgk_game`
--

CREATE TABLE `chgk_game` (
  `game_id` int NOT NULL,
  `question_text` varchar(1114) NOT NULL,
  `answer_text` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chgk_game`
--
ALTER TABLE `chgk_game`
  ADD PRIMARY KEY (`game_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chgk_game`
--
ALTER TABLE `chgk_game`
  MODIFY `game_id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
