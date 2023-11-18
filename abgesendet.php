<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> <!--Verbindet die Webseite mit der CSS-Datei "Style.css"-->
        <title>Burger, Pizza, Sushi</title> <!--Legt den Titel der Seite fest-->
        <script language="javascript" type="text/javascript" src="script.js"></script> <!--Verbindet die Webseite mit der JS-Datei-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">
    </head>
    <body>

<?php

require("connectionBestellungen.php");

$name = $_POST["first_name"];
$lastName = $_POST["last_name"];
$mail = $_POST["email"];
$phoneNumber = $_POST["tel"];
$city = $_POST["city"];
$plz = $_POST["plz"];
$street = $_POST["street"];
$streetNbr = $_POST["street_nbr"];
$price = $_POST["price"];
$products = $_POST["products"];
$restaurant_name = $_POST["restaurant"];
$i = 0;
echo '<div class="order_done_div">';
    echo '<div class="order_done">';
    echo '<h3>Bestellung erfolgreich!</h3>';
    echo "<h4>Zusammenfassung: </h4>";
        echo '<div class="order_details">';
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
        $sql = "INSERT INTO `safe_orders_$restaurant_name` (`ID`, `Name`, `Nachname`, `Mail`, `Telefonnummer`, `Stadt`, `Postleitzahl`, `Straße`, `HausNr`,`PreisGesamt`) VALUES 
        ('','$name','$lastName','$mail','$phoneNumber','$city','$plz','$street','$streetNbr','$price')";


        $result = $connection->query($sql);

        $sql = "INSERT INTO `orders_$restaurant_name` (`ID`, `Name`, `Nachname`, `Mail`, `Telefonnummer`, `Stadt`, `Postleitzahl`, `Straße`, `HausNr`,`PreisGesamt`) VALUES 
        ('','$name','$lastName','$mail','$phoneNumber','$city','$plz','$street','$streetNbr','$price')";


        $result = $connection->query($sql);

        $sql = "SELECT `ID` FROM `orders_$restaurant_name`";
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

            $sql = " INSERT INTO `order_products_$restaurant_name` (`ID`, `Gericht`, `Menge`, `Preis`) VALUES ('$ID','$prodName[$i]','$prodMenge[$i]','$prodPrice[$i]')";

            $result = $connection->query($sql);

            $i++;

        }
        echo '<br>';
        echo '<br>';
        echo 'Gesamtpreis: ';
        echo $price.' €';
        echo '</div>';
    echo '</div>';
        echo '<div class="back_btn">';
        echo "<a href='index.html'> ";
        echo '<button class="home_btn">Zurück zur Startseite</button>';
        echo "</a>";
    echo '</div>';
echo '</div>';

$connection->close();
?>
</body>
</html>