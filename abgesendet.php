<?php
$servername = "localhost";  // Der Datenbankserver 
$username = "root";  //Datenbank-Benutzername
$password = "";  //Datenbank-Passwort
$database = "bestellungen";  //Name der Datenbank

$connection = new mysqli($servername, $username, $password, $database);

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
$sql = "INSERT INTO `orders`(`ID`, `Name`, `Nachname`, `Mail`, `Telefonnummer`, `Stadt`, `Postleitzahl`, `Straße`, `HausNr`,`PreisGesamt`) VALUES 
('','$name','$lastName','$mail','$phoneNumber','$city','$plz','$street','$streetNbr','$price')";


$result = $connection->query($sql);

$sql = "SELECT `ID` FROM `orders`";
foreach ($connection->query($sql) as $row) {
$ID = "$row[ID]";
}
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

    $sql = " INSERT INTO `order_products`(`ID`, `Gericht`, `Menge`, `Preis`) VALUES ('$ID','$prodName[$i]','$prodMenge[$i]','$prodPrice[$i]')";

    $result = $connection->query($sql);

    $i++;

}
echo '<br>';
echo '<br>';
echo 'Gesamtpreis: ';
echo $price.' €';
$connection->close();
?>