-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 24, 2019 at 11:42 AM
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
CREATE DATABASE IF NOT EXISTS `robotros_wmpq` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `robotros_wmpq`;

-- --------------------------------------------------------

--
-- Table structure for table `royale`
--

DROP TABLE IF EXISTS `royale`;
CREATE TABLE `royale` (
  `id` int(11) NOT NULL,
  `channel` varchar(80) NOT NULL,
  `rank` varchar(80) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Truncate table before insert `royale`
--

TRUNCATE TABLE `royale`;
--
-- Dumping data for table `royale`
--

INSERT INTO `royale` (`id`, `channel`, `rank`) VALUES
(103, 'Risky', 'Diamond'),
(2, 'RakerTV', 'Royale'),
(3, 'ZavierKonz', 'Royale'),
(4, 'iSanjimo', 'Royale'),
(5, '8BBattle', 'Sapphire'),
(6, 'BrAshPop', 'Sapphire'),
(7, 'CIGNUS', 'Sapphire'),
(8, 'DeoxysA', 'Sapphire'),
(9, 'Earlswood', 'Sapphire'),
(10, 'GoodIntroMusic', 'Sapphire'),
(11, 'TheRabbleWrangler', 'Sapphire'),
(12, 'xKyreLx', 'Diamond'),
(13, 'AnD4D', 'Diamond'),
(14, 'Armageddon', 'Diamond'),
(15, 'beardmyth', 'Diamond'),
(16, 'Bearkittty', 'Diamond'),
(17, 'captaingecoo', 'Diamond'),
(18, 'Cpt_Cuddles__', 'Diamond'),
(19, 'CrazeG4', 'Diamond'),
(20, 'DecimLEL', 'Diamond'),
(21, 'derp_', 'Diamond'),
(22, 'Dewinged_Moth', 'Diamond'),
(23, 'Dreklo', 'Diamond'),
(24, 'DrLucianoJr', 'Diamond'),
(25, 'Edge419', 'Diamond'),
(26, 'fkflaviuskings', 'Diamond'),
(27, 'FluxFer', 'Diamond'),
(28, 'Hadouless', 'Diamond'),
(29, 'HibikiFox', 'Diamond'),
(30, 'InsaiyanSaiyan', 'Diamond'),
(31, 'ipushtrees24', 'Diamond'),
(32, 'itsjayste', 'Diamond'),
(33, 'itzBrittney', 'Diamond'),
(34, 'Jaraxlle', 'Diamond'),
(35, 'JayKraze', 'Diamond'),
(36, 'jesstreams', 'Diamond'),
(37, 'Jwaitt86', 'Diamond'),
(38, 'KaibiganTV', 'Diamond'),
(39, 'keekeexbabyy', 'Diamond'),
(40, 'Kelydrex', 'Diamond'),
(41, 'Kidritch', 'Diamond'),
(42, 'KrakonSkullz', 'Diamond'),
(43, 'LastKardax', 'Diamond'),
(44, 'Leedly', 'Diamond'),
(45, 'LeoWurf', 'Diamond'),
(46, 'Litework', 'Diamond'),
(47, 'Lucipherion', 'Diamond'),
(48, 'Mister_Hooks', 'Diamond'),
(49, 'MisterSkids', 'Diamond'),
(50, 'MoistPrune2', 'Diamond'),
(51, 'MuklukTwitch', 'Diamond'),
(52, 'NexGenInsanity', 'Diamond'),
(53, 'nidzation_', 'Diamond'),
(54, 'OvidiuZ94', 'Diamond'),
(55, 'QuazarFC', 'Diamond'),
(56, 'RestlessShark', 'Diamond'),
(57, 'RikuEstia', 'Diamond'),
(58, 'RJersak', 'Diamond'),
(59, 'sharpsaber', 'Diamond'),
(60, 'SillyNetwork', 'Diamond'),
(61, 'smelliee', 'Diamond'),
(62, 'SmirkinLIVE', 'Diamond'),
(63, 'smonme', 'Diamond'),
(64, 'spazzxattack', 'Diamond'),
(65, 'Swiftizm', 'Diamond'),
(66, 'teambrianlee', 'Diamond'),
(67, 'the_5th_god', 'Diamond'),
(68, 'TheKayJ', 'Diamond'),
(69, 'Thumper0069', 'Diamond'),
(70, 'Timmy_BITS', 'Diamond'),
(71, 'Turannos_Pax', 'Diamond'),
(72, 'Velion83', 'Diamond'),
(73, 'Vesi', 'Diamond'),
(74, 'ViviXAlive', 'Diamond'),
(75, 'vulcanlg', 'Diamond'),
(76, 'Wizurd_Merlin', 'Diamond'),
(77, 'Woottodoo', 'Diamond'),
(78, 'ay0kay', 'Sapphire'),
(79, 'Captain_Cab1net', 'Sapphire'),
(80, 'dublyfe', 'Sapphire'),
(81, 'JBMagic', 'Sapphire'),
(82, 'MrClassicDale', 'Sapphire'),
(83, 'Nicko1117', 'Sapphire'),
(84, 'Prospering', 'Sapphire'),
(85, 'Tomasina', 'Sapphire'),
(86, 'imbeergoggles', 'Sapphire'),
(87, 'roostie', 'Sapphire'),
(88, 'Pulse35', 'Platinum'),
(89, 'RAIDONKU', 'Platinum'),
(90, 'RealJayden', 'Platinum'),
(91, 'SenVale', 'Platinum'),
(92, 'KB_3', 'Platinum'),
(93, 'Beauty_AnDa_Beard', 'Platinum'),
(94, 'bettrn_u', 'Platinum'),
(95, 'Blipo', 'Platinum'),
(96, 'DaMikey', 'Platinum'),
(97, 'deranged420', 'Platinum'),
(98, 'bigcfromrbc', 'Platinum'),
(99, 'DJ_Doobie', 'Platinum'),
(102, 'BamBam_210', 'Sapphire');

-- --------------------------------------------------------

--
-- Table structure for table `streamers`
--

DROP TABLE IF EXISTS `streamers`;
CREATE TABLE `streamers` (
  `id` int(11) NOT NULL,
  `channel` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Truncate table before insert `streamers`
--

TRUNCATE TABLE `streamers`;
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `streamers`
--
ALTER TABLE `streamers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
