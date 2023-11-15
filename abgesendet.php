<?php
$name = $_POST["first_name"];
$lastName = $_POST["last_name"];
$mail = $_POST["email"];
$phoneNumber = $_POST["tel"];
$city = $_POST["city"];
$plz = $_POST["plz"];
$street = $_POST["street"];
$streetNbr = $_POST["street_nbr"];
$products = $_POST["products"];
$price = $_POST["price"];
$i = 0;

echo 'Name: ';
echo $name;
echo '<br>';
echo 'Nachname: ';
echo $lastName;
echo '<br>';
echo 'Mailadresse: ';
echo $mail;
echo '<br>';
echo 'Telefonnummer: ';
echo $phoneNumber;
echo '<br>';
echo 'Stadt: ';
echo $city;
echo '<br>';
echo 'Postleitzahl: ';
echo $plz;
echo '<br>';
echo 'Straße: ';
echo $street;
echo '<br>';
echo 'Hausnummer: ';
echo $streetNbr;
echo '<br>';
echo '<br>';
echo 'Bestellung:';
echo '<br>';
echo '<br>';

while ($i <= $products - 1) {
    $prodMenge[$i] = $_POST["prodMenge".$i];
    $prodName[$i] = $_POST["prodName".$i];
    $prodPrice[$i] = $_POST["prodPrice".$i];

    echo $prodMenge[$i];
    echo 'x ';
    echo $prodName[$i];
    echo ' Preis ';
    echo $prodPrice[$i];
    echo ' € <br>';
    $i++;


}
echo '<br>';
echo '<br>';
echo 'Gesamtpreis: ';
echo $price.' €';

$servername = "localhost";  // Der Datenbankserver 
$username = "root";  //Datenbank-Benutzername
$password = "";  //Datenbank-Passwort
$database = "bestellungen";  //Name der Datenbank

// Verbindung zur Datenbank herstellen
$connection = new mysqli($servername, $username, $password, $database);
$sql = "
    CREATE TABLE `adressen.$i` (
    `id` INT( 10 ) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    `nachname` VARCHAR( 150 ) NOT NULL ,
    `vorname` VARCHAR( 150 ) NULL ,
    `akuerzel` VARCHAR( 2 ) NOT NULL ,
    `strasse` VARCHAR( 150 ) NULL ,
    `plz` INT( 5 ) NOT NULL ,
    `telefon` VARCHAR( 20 ) NULL
    )";
$result = $connection->query($sql);
?>