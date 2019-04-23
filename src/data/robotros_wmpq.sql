-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 23, 2019 at 12:25 AM
-- Server version: 10.1.38-MariaDB-cll-lve
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `robotros_wmpq`
--

-- --------------------------------------------------------

--
-- Table structure for table `royale`
--

CREATE TABLE `royale` (
  `id` int(11) NOT NULL,
  `channel` varchar(80) NOT NULL,
  `rank` varchar(80) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `streamers`
--

CREATE TABLE `streamers` (
  `id` int(11) NOT NULL,
  `channel` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `streamers`
--

INSERT INTO `streamers` (`id`, `channel`, `name`) VALUES
(1, 'robotros', 'robotros'),
(2, 'triedge', 'zack'),
(3, 'CarmineCarnage', 'carmine'),
(4, 'topher269', 'topher'),
(5, 'Kosmiic_', 'quay'),
(6, 'flaash15', 'flaash'),
(7, 'firebird2270', 'geoffy'),
(8, 'draco18772', 'Draco'),
(9, 'protomansp25', 'roberto'),
(10, 'leroyalgaming', 'leroy'),
(11, 'pastaf4r1an', 'pasta'),
(12, 'michaelbork2kil_', 'michael'),
(13, 'virtuallycanadian', 'vaas'),
(14, 'DvDplaya1', 'dvd'),
(15, 'jamerk_here', 'jameak');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `royale`
--
ALTER TABLE `royale`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `channel` (`channel`);

--
-- Indexes for table `streamers`
--
ALTER TABLE `streamers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `channel` (`channel`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `royale`
--
ALTER TABLE `royale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `streamers`
--
ALTER TABLE `streamers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
