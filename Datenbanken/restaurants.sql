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
-- Datenbank: `restaurants`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `logindata`
--

CREATE TABLE `logindata` (
  `Benutzername` varchar(40) NOT NULL,
  `Passwort` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `logindata`
--

INSERT INTO `logindata` (`Benutzername`, `Passwort`) VALUES
('waybackburgers', 'Start.123');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `restaurants_all`
--

CREATE TABLE `restaurants_all` (
  `Restaurant_Name` varchar(59) DEFAULT NULL,
  `Mindestbestellwert` decimal(5,2) DEFAULT NULL,
  `Lieferzeit` int(11) DEFAULT NULL,
  `Lieferkosten` decimal(5,2) DEFAULT NULL,
  `Typ` varchar(50) DEFAULT NULL,
  `Kategorie` varchar(50) DEFAULT NULL,
  `Preis` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `restaurants_all`
--

INSERT INTO `restaurants_all` (`Restaurant_Name`, `Mindestbestellwert`, `Lieferzeit`, `Lieferkosten`, `Typ`, `Kategorie`, `Preis`) VALUES
('Burger King', 12.00, 25, 2.00, 'Gefluegel', 'Burger', 'Guenstig'),
('McDonald\'s', 14.50, 23, 4.00, 'Vegan', 'Burger', 'Guenstig'),
('Wendy\'s', 9.50, 43, 3.00, 'Rind', 'Burger', 'Mittelpreisig'),
('Five Guys', 9.00, 22, 4.50, 'Gefluegel', 'Burger', 'Guenstig'),
('In-N-Out Burger', 13.50, 20, 2.50, 'Vegan', 'Burger', 'Teuer'),
('Shake Shack', 14.00, 33, 4.00, 'Gefluegel', 'Burger', 'Mittelpreisig'),
('Whataburger', 14.50, 23, 3.00, 'Rind', 'Burger', 'Guenstig'),
('Sonic Drive-In', 14.00, 36, 4.00, 'Rind', 'Burger', 'Mittelpreisig'),
('Carl\'s Jr.', 10.50, 21, 5.00, 'Vegan', 'Burger', 'Mittelpreisig'),
('Jack in the Box', 10.00, 35, 2.50, 'Vegan', 'Burger', 'Teuer'),
('White Castle', 8.50, 38, 3.00, 'Gefluegel', 'Burger', 'Mittelpreisig'),
('Culver\'s', 8.00, 23, 3.50, 'Gefluegel', 'Burger', 'Mittelpreisig'),
('Checkers & Rally\'s', 14.00, 42, 3.00, 'Gefluegel', 'Burger', 'Teuer'),
('A&W Restaurants', 11.00, 34, 3.00, 'Rind', 'Burger', 'Teuer'),
('Smashburger', 14.50, 45, 4.00, 'Rind', 'Burger', 'Mittelpreisig'),
('Hardee\'s', 10.00, 25, 4.50, 'Rind', 'Burger', 'Mittelpreisig'),
('Krystal', 14.00, 44, 4.00, 'Rind', 'Burger', 'Guenstig'),
('The Habit Burger Grill', 13.00, 29, 4.50, 'Vegan', 'Burger', 'Teuer'),
('Elevation Burger', 14.50, 43, 3.00, 'Gefluegel', 'Burger', 'Mittelpreisig'),
('Fuddruckers', 14.00, 41, 4.50, 'Gefluegel', 'Burger', 'Mittelpreisig'),
('Red Robin', 13.50, 23, 3.50, 'Vegan', 'Burger', 'Guenstig'),
('Wayback Burgers', 15.00, 30, 2.50, 'Rind', 'Burger', 'Mittelpreisig'),
('MOOYAH Burgers Fries & Shakes', 11.00, 32, 2.50, 'Gefluegel', 'Burger', 'Teuer'),
('Big Boy', 12.50, 31, 3.50, 'Vegan', 'Burger', 'Mittelpreisig'),
('Good Times Burgers & Frozen Custard', 14.00, 31, 3.50, 'Vegan', 'Burger', 'Guenstig'),
('Burgerville', 11.00, 38, 3.50, 'Gefluegel', 'Burger', 'Mittelpreisig'),
('Back Yard Burgers', 11.50, 38, 4.50, 'Rind', 'Burger', 'Guenstig'),
('FATZ', 12.50, 44, 3.00, 'Gefluegel', 'Burger', 'Guenstig'),
('Farmer Boys', 14.50, 45, 3.50, 'Vegan', 'Burger', 'Mittelpreisig'),
('Braum\'s Ice Cream & Dairy Store', 11.00, 35, 3.50, 'Gefluegel', 'Burger', 'Guenstig'),
('Ted\'s Montana Grill', 11.00, 29, 4.50, 'Rind', 'Burger', 'Guenstig'),
('Lick\'s Homeburgers', 10.00, 44, 2.00, 'Rind', 'Burger', 'Teuer'),
('BGR - The Burger Joint', 12.00, 36, 3.00, 'Gefluegel', 'Burger', 'Mittelpreisig'),
('Zinburger Wine & Burger Bar', 14.50, 34, 3.50, 'Rind', 'Burger', 'Mittelpreisig'),
('Bobby\'s Burger Palace', 8.00, 26, 4.00, 'Rind', 'Burger', 'Mittelpreisig'),
('Bareburger', 13.00, 29, 4.00, 'Rind', 'Burger', 'Teuer'),
('Bison Witches Bar & Deli', 12.00, 24, 4.50, 'Rind', 'Burger', 'Mittelpreisig'),
('Green Turtle', 13.00, 25, 3.50, 'Gefluegel', 'Burger', 'Teuer'),
('Hickory\'s Famous Burgers', 12.50, 21, 2.50, 'Rind', 'Burger', 'Mittelpreisig'),
('The Counter', 11.50, 45, 3.50, 'Vegan', 'Burger', 'Mittelpreisig'),
('Pizza Hut', 19.00, 55, 2.00, 'Gefluegel', 'Pizza', 'Teuer'),
('Domino\'s Pizza', 14.50, 34, 4.00, 'Vegan', 'Pizza', 'Guenstig'),
('Papa John\'s', 12.00, 58, 3.50, 'Vegan', 'Pizza', 'Teuer'),
('Little Caesars', 17.50, 52, 5.50, 'Rind', 'Pizza', 'Teuer'),
('Marco\'s Pizza', 12.00, 47, 4.00, 'Rind', 'Pizza', 'Teuer'),
('Hungry Howie\'s', 13.00, 41, 5.50, 'Vegan', 'Pizza', 'Mittelpreisig'),
('Jets Pizza', 14.00, 47, 4.00, 'Rind', 'Pizza', 'Teuer'),
('Cicis Pizza', 17.00, 36, 3.50, 'Vegan', 'Pizza', 'Teuer'),
('Sbarro', 18.00, 56, 4.00, 'Rind', 'Pizza', 'Teuer'),
('Blaze Pizza', 14.00, 41, 3.50, 'Rind', 'Pizza', 'Teuer'),
('Mellow Mushroom', 13.50, 51, 4.50, 'Vegan', 'Pizza', 'Teuer'),
('California Pizza Kitchen', 15.50, 43, 4.00, 'Rind', 'Pizza', 'Guenstig'),
('Round Table Pizza', 17.00, 44, 2.50, 'Rind', 'Pizza', 'Teuer'),
('Uno Pizzeria & Grill', 11.00, 35, 5.00, 'Rind', 'Pizza', 'Teuer'),
('Godfathers Pizza', 17.00, 49, 5.50, 'Gefluegel', 'Pizza', 'Mittelpreisig'),
('Papa Murphy\'s', 15.50, 37, 5.50, 'Rind', 'Pizza', 'Guenstig'),
('Donatos Pizza', 19.50, 32, 2.00, 'Rind', 'Pizza', 'Mittelpreisig'),
('Imo\'s Pizza', 11.50, 42, 3.50, 'Rind', 'Pizza', 'Teuer'),
('Grotto Pizza', 11.00, 32, 3.00, 'Rind', 'Pizza', 'Mittelpreisig'),
('Mountain Mike\'s Pizza', 10.50, 41, 5.00, 'Vegan', 'Pizza', 'Guenstig'),
('Ledo Pizza', 14.50, 40, 3.00, 'Vegan', 'Pizza', 'Teuer'),
('MOD Pizza', 18.00, 41, 3.00, 'Vegan', 'Pizza', 'Guenstig'),
('Old Chicago Pizza & Taproom', 10.50, 58, 5.00, 'Vegan', 'Pizza', 'Teuer'),
('Pizza Ranch', 11.00, 60, 5.50, 'Vegan', 'Pizza', 'Mittelpreisig'),
('Pieology Pizzeria', 12.00, 32, 4.50, 'Vegan', 'Pizza', 'Mittelpreisig'),
('Your Pie', 13.50, 56, 4.00, 'Gefluegel', 'Pizza', 'Guenstig'),
('Bertucci\'s', 16.00, 38, 3.00, 'Vegan', 'Pizza', 'Guenstig'),
('Rotolo\'s Pizzeria', 11.50, 54, 3.00, 'Rind', 'Pizza', 'Mittelpreisig'),
('Pizza Inn', 17.00, 46, 2.00, 'Rind', 'Pizza', 'Teuer'),
('Fox\'s Pizza Den', 17.00, 51, 4.50, 'Rind', 'Pizza', 'Mittelpreisig'),
('Pie Five Pizza', 14.50, 43, 3.00, 'Gefluegel', 'Pizza', 'Teuer'),
('Fazoli\'s', 13.50, 53, 4.00, 'Rind', 'Pizza', 'Guenstig'),
('CiCi\'s To Go', 16.00, 35, 2.50, 'Vegan', 'Pizza', 'Teuer'),
('Little Caesar\'s Express', 12.00, 57, 5.50, 'Rind', 'Pizza', 'Mittelpreisig'),
('Topper\'s Pizza', 11.00, 57, 5.00, 'Gefluegel', 'Pizza', 'Teuer'),
('Pizza My Heart', 16.00, 60, 3.50, 'Gefluegel', 'Pizza', 'Mittelpreisig'),
('Mountain Mike\'s Pizza', 16.00, 36, 3.00, 'Gefluegel', 'Pizza', 'Mittelpreisig'),
('Figaro\'s Pizza', 19.00, 59, 6.00, 'Gefluegel', 'Pizza', 'Teuer'),
('Zpizza', 11.00, 56, 3.50, 'Rind', 'Pizza', 'Mittelpreisig'),
('Russo\'s New York Pizzeria', 18.00, 53, 6.00, 'Vegan', 'Pizza', 'Teuer'),
('Sushi Bar', 21.50, 50, 3.50, 'Gefluegel', 'Sushi', 'Teuer'),
('Sakura Sushi', 16.00, 42, 5.50, 'Rind', 'Sushi', 'Mittelpreisig'),
('Tokyo Sushi', 27.50, 57, 3.00, 'Vegan', 'Sushi', 'Teuer'),
('Sushi Express', 15.50, 49, 5.00, 'Rind', 'Sushi', 'Teuer'),
('Ocean Sushi', 24.00, 70, 4.50, 'Vegan', 'Sushi', 'Mittelpreisig'),
('Sushi Garden', 25.00, 45, 5.50, 'Rind', 'Sushi', 'Mittelpreisig'),
('Mikado Sushi', 29.50, 43, 5.50, 'Rind', 'Sushi', 'Guenstig'),
('Zen Sushi', 16.50, 54, 5.00, 'Gefluegel', 'Sushi', 'Guenstig'),
('Yama Sushi', 26.50, 46, 7.00, 'Rind', 'Sushi', 'Guenstig'),
('Sushi World', 27.00, 70, 3.50, 'Gefluegel', 'Sushi', 'Mittelpreisig'),
('Wasabi Sushi', 29.50, 73, 3.50, 'Rind', 'Sushi', 'Teuer'),
('Sushi Palace', 23.00, 52, 6.00, 'Gefluegel', 'Sushi', 'Guenstig'),
('Sushiro', 19.50, 54, 6.50, 'Vegan', 'Sushi', 'Mittelpreisig'),
('Sushi Station', 29.00, 66, 4.00, 'Gefluegel', 'Sushi', 'Guenstig'),
('Sushi House', 25.50, 71, 4.00, 'Vegan', 'Sushi', 'Mittelpreisig'),
('Sushi Time', 17.50, 72, 4.50, 'Gefluegel', 'Sushi', 'Teuer'),
('Sushi Planet', 28.50, 48, 4.00, 'Gefluegel', 'Sushi', 'Mittelpreisig'),
('Sushi Boat', 26.00, 74, 5.50, 'Vegan', 'Sushi', 'Guenstig'),
('Sushi Land', 27.50, 41, 6.00, 'Rind', 'Sushi', 'Guenstig'),
('Sushi Cove', 28.50, 68, 4.00, 'Vegan', 'Sushi', 'Teuer'),
('Sushi Ninja', 28.00, 45, 3.50, 'Rind', 'Sushi', 'Guenstig'),
('Sushi Kingdom', 26.50, 67, 4.50, 'Gefluegel', 'Sushi', 'Guenstig'),
('Sushi Bay', 27.50, 64, 6.50, 'Rind', 'Sushi', 'Mittelpreisig'),
('Sushi Island', 22.00, 41, 5.00, 'Vegan', 'Sushi', 'Teuer'),
('Sushi Heaven', 22.00, 57, 4.00, 'Vegan', 'Sushi', 'Guenstig'),
('Sushi Zenith', 27.50, 62, 5.50, 'Gefluegel', 'Sushi', 'Guenstig'),
('Sushi Fusion', 30.00, 45, 5.50, 'Vegan', 'Sushi', 'Mittelpreisig'),
('Sushi Oasis', 18.50, 70, 6.00, 'Vegan', 'Sushi', 'Mittelpreisig'),
('Sushi Harbor', 25.50, 55, 6.00, 'Vegan', 'Sushi', 'Mittelpreisig'),
('Sushi Cove', 24.00, 60, 5.00, 'Gefluegel', 'Sushi', 'Mittelpreisig'),
('Sushi Garden', 20.50, 56, 5.00, 'Rind', 'Sushi', 'Mittelpreisig'),
('Sushi Fusion', 16.50, 44, 5.50, 'Gefluegel', 'Sushi', 'Guenstig'),
('Sushi Harbor', 29.50, 47, 3.00, 'Rind', 'Sushi', 'Mittelpreisig'),
('Sushi Island', 16.00, 56, 6.00, 'Gefluegel', 'Sushi', 'Guenstig'),
('Sushi Kingdom', 20.00, 61, 7.00, 'Vegan', 'Sushi', 'Teuer'),
('Sushi Land', 28.50, 70, 5.50, 'Gefluegel', 'Sushi', 'Guenstig'),
('Sushi Ninja', 28.50, 40, 6.50, 'Gefluegel', 'Sushi', 'Mittelpreisig'),
('Sushi Oasis', 17.50, 68, 6.00, 'Gefluegel', 'Sushi', 'Guenstig'),
('Sushi Planet', 27.00, 51, 4.00, 'Vegan', 'Sushi', 'Teuer'),
('Sushi Zenith', 23.50, 55, 6.50, 'Rind', 'Sushi', 'Mittelpreisig');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `waybackburgers`
--

CREATE TABLE `waybackburgers` (
  `id` int(4) NOT NULL,
  `name` varchar(40) NOT NULL,
  `beschreibung` varchar(200) NOT NULL,
  `preis` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `waybackburgers`
--

INSERT INTO `waybackburgers` (`id`, `name`, `beschreibung`, `preis`) VALUES
(1, 'Classic Beef Burger', 'Saftiger Rindfleisch-Burger mit frischen Gemüsen und hausgemachter Sauce.', '9.99'),
(3, 'Spicy BBQ Bliss', 'Pikant gewürzter Rindfleisch-Burger mit rauchiger BBQ-Sauce.', '11.49'),
(4, 'Mushroom Swiss Supreme', 'Rindfleisch-Burger mit sautierten Pilzen und zart schmelzendem Schweizer Käse.', '12.99'),
(5, 'Bacon Explosion', 'Herzhafter Rindfleisch-Burger mit knusprigem Bacon und würziger Mayo.', '13.49'),
(6, 'Avocado Tango', 'Rindfleisch-Burger mit cremiger Avocado, Frischkäse und Tomaten.', '11.99'),
(7, 'Pepper Jack Punch', 'Würziger Rindfleisch-Burger mit scharfem Pepper Jack Käse und Jalapeños.', '10.79'),
(8, 'Double Decker Deluxe', 'Doppelter Rindfleisch-Burger mit allen klassischen Belägen.', '14.99'),
(9, 'Southwest Fiesta', 'Rindfleisch-Burger mit Mais, schwarzen Bohnen, Tomaten und würziger Sauce.', '12.29'),
(10, 'Blue Cheese Breeze', 'Rindfleisch-Burger mit blauem Käse, karamellisierten Zwiebeln und Rucola.', '13.79'),
(11, 'Teriyaki Temptation', 'Saftiger Rindfleisch-Burger mit Teriyaki-Glasur, Ananas und Sesam-Mayo.', '11.89'),
(12, 'Crispy Onion Symphony', 'Rindfleisch-Burger mit knusprigen Zwiebelringen und Barbecue-Sauce.', '10.59'),
(13, 'Garlic Parmesan Passion', 'Rindfleisch-Burger mit Knoblauch-Parmesan-Sauce und frischen Kräutern.', '12.49'),
(14, 'Hawaiian Luau', 'Rindfleisch-Burger mit gegrillter Ananas, Schinken und süßem Chili-Senf.', '13.29'),
(15, 'Ranch Rodeo', 'Rindfleisch-Burger mit Ranch-Dressing, gebratenem Speck und Tomaten.', '11.69'),
(16, 'Jalapeño Popper Paradise', 'Scharfer Rindfleisch-Burger mit cremigem Jalapeño-Popper-Aufstrich.', '10.99'),
(17, 'Buffalo Blue Blaze', 'Würziger Rindfleisch-Burger mit scharfer Buffalo-Sauce und Blauschimmelkäse.', '12.79'),
(18, 'Greek Goddess', 'Rindfleisch-Burger mit Feta-Kräutercreme, Tomaten und Oliven.', '11.39'),
(19, 'Sun-dried Tomato Tango', 'Rindfleisch-Burger mit sonnengetrockneten Tomaten und Basilikum-Pesto.', '12.89'),
(20, 'Sweet and Smoky Symphony', 'Rindfleisch-Burger mit süßem Rauchpaprika-Bacon und Honig-Senf-Sauce.', '13.49');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `zinburgerwine`
--

CREATE TABLE `zinburgerwine` (
  `id` int(4) NOT NULL,
  `name` varchar(40) NOT NULL,
  `beschreibung` varchar(200) NOT NULL,
  `preis` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `zinburgerwine`
--

INSERT INTO `zinburgerwine` (`id`, `name`, `beschreibung`, `preis`) VALUES
(1, 'Cabernet Classic Burger', 'Saftiger Rindfleisch-Burger mit Cabernet-Sauvignon-Senf, karamellisierten Zwiebeln und Aged Cheddar.', '12.99'),
(2, 'Peppercorn Perfection', 'Rindfleisch-Burger mit Peppercorn-Kruste, Blauschimmelkäse und knusprigem Bacon.', '13.49'),
(3, 'Vineyard Ranch Delight', 'Rindfleisch-Burger mit Ranch-Dressing, frischem Gemüse und Swiss-Käse.', '11.79'),
(4, 'Mushroom Merlot Melody', 'Rindfleisch-Burger mit Merlot-geschmorten Pilzen, Gruyère-Käse und Trüffel-Mayo.', '14.29'),
(5, 'Balsamic Bacon Bliss', 'Rindfleisch-Burger mit Balsamico-Glasur, knusprigem Bacon und Gorgonzola.', '12.49'),
(6, 'Zinful Blue Burger', 'Würziger Rindfleisch-Burger mit Zinfandel-Senf, Blauschimmelkäse und karamellisierten Zwiebeln.', '13.99'),
(7, 'Portobello Pinot Paradise', 'Rindfleisch-Burger mit Pinot-Noir-Reduktion, gegrilltem Portobello und Swiss-Käse.', '13.79'),
(8, 'Chardonnay Cheddar Twist', 'Rindfleisch-Burger mit Chardonnay-Senf, scharfem Cheddar und karamellisierten Zwiebeln.', '12.89'),
(9, 'Sangria Smokehouse Sensation', 'Rindfleisch-Burger mit Sangria-Barbecue-Sauce, Rauchspeck und Gouda.', '14.49'),
(10, 'Merlot Maple Bacon Burger', 'Rindfleisch-Burger mit Merlot-Maple-Glasur, knusprigem Bacon und Gruyère-Käse.', '13.29'),
(11, 'Zesty Zinful Zing', 'Würziger Rindfleisch-Burger mit Zinfandel-Barbecue-Sauce, Pepper Jack Käse und Jalapeños.', '12.69'),
(12, 'Rosémary Ranch Delight', 'Rindfleisch-Burger mit Rosmarin-Ranch-Dressing, Tomaten und Avocado.', '11.99'),
(13, 'Syrah Swiss Symphony', 'Rindfleisch-Burger mit Syrah-Senf, geschmolzenem Swiss-Käse und sautierten Pilzen.', '14.19'),
(14, 'Zinful Turkey Tango', 'Gegrillter Puten-Burger mit Zinfandel-Cranberry-Sauce, Brie-Käse und Feldsalat.', '11.59'),
(15, 'Pinot Portobello Paradise', 'Rindfleisch-Burger mit Pinot-Noir-Glasur, gegrilltem Portobello und Gouda.', '14.09'),
(16, 'Sauvignon Bacon Bliss', 'Rindfleisch-Burger mit Sauvignon-Blanc-Senf, knusprigem Bacon und Gruyère-Käse.', '12.79'),
(17, 'Zin-ful Veggie Victory', 'Gemüse-Burger mit Zinfandel-Barbecue-Sauce, gegrilltem Gemüse und Pepper Jack Käse.', '11.89'),
(18, 'Champagne Cheddar Celebration', 'Rindfleisch-Burger mit Champagner-Senf, scharfem Cheddar und karamellisierten Zwiebeln.', '14.49');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `waybackburgers`
--
ALTER TABLE `waybackburgers`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `zinburgerwine`
--
ALTER TABLE `zinburgerwine`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `waybackburgers`
--
ALTER TABLE `waybackburgers`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT für Tabelle `zinburgerwine`
--
ALTER TABLE `zinburgerwine`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
