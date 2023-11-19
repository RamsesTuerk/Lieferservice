-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 19. Nov 2023 um 16:40
-- Server-Version: 10.4.28-MariaDB
-- PHP-Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `bestellungen`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `orders_waybackburgers`
--

CREATE TABLE `orders_waybackburgers` (
  `ID` int(11) NOT NULL,
  `Name` varchar(40) NOT NULL,
  `Nachname` varchar(40) NOT NULL,
  `Mail` varchar(60) NOT NULL,
  `Telefonnummer` bigint(40) NOT NULL,
  `Stadt` varchar(40) NOT NULL,
  `Postleitzahl` int(15) NOT NULL,
  `Straße` varchar(40) NOT NULL,
  `HausNr` int(20) NOT NULL,
  `PreisGesamt` decimal(65,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `order_products_waybackburgers`
--

CREATE TABLE `order_products_waybackburgers` (
  `ID` int(11) NOT NULL,
  `Gericht` varchar(50) NOT NULL,
  `Menge` int(11) NOT NULL,
  `Preis` decimal(65,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `safe_orders_waybackburgers`
--

CREATE TABLE `safe_orders_waybackburgers` (
  `ID` int(11) NOT NULL,
  `Name` varchar(40) NOT NULL,
  `Nachname` varchar(40) NOT NULL,
  `Mail` varchar(60) NOT NULL,
  `Telefonnummer` bigint(40) NOT NULL,
  `Stadt` varchar(40) NOT NULL,
  `Postleitzahl` int(15) NOT NULL,
  `Straße` varchar(40) NOT NULL,
  `HausNr` int(20) NOT NULL,
  `PreisGesamt` decimal(65,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `orders_waybackburgers`
--
ALTER TABLE `orders_waybackburgers`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `order_products_waybackburgers`
--
ALTER TABLE `order_products_waybackburgers`
  ADD KEY `ID_Products` (`ID`),
  ADD KEY `ID` (`ID`);

--
-- Indizes für die Tabelle `safe_orders_waybackburgers`
--
ALTER TABLE `safe_orders_waybackburgers`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `orders_waybackburgers`
--
ALTER TABLE `orders_waybackburgers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `safe_orders_waybackburgers`
--
ALTER TABLE `safe_orders_waybackburgers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `order_products_waybackburgers`
--
ALTER TABLE `order_products_waybackburgers`
  ADD CONSTRAINT `order_products_waybackburgers_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `orders_waybackburgers` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
