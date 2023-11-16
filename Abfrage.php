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
    $servername = "localhost";  // Der Datenbankserver 
    $username = "root";  //Datenbank-Benutzername
    $password = "";  //Datenbank-Passwort
    $database = "bestellungen";  //Name der Datenbank
    
    $connection = new mysqli($servername, $username, $password, $database);

    $sql = "SELECT * FROM orders";
    

    $result = $connection->query($sql);

    if($_POST['pw'] == "Start.123") {
    if ($result) {
        // Daten der Db als Tabelle ausgeben und auf der Webseite anzeigen
        while ($row = $result->fetch_assoc()) {
            $ID = $row["ID"];
            echo "<table class='choice_table'>";
                echo "<tr>";
                echo "<td class=''>"."Name: ". $row["Name"]."</td>";
                echo "</tr>";
                echo "<tr>";
                echo "<td class=''>"."Nachname: ". $row["Nachname"]."</td>";
                echo "<td class=''>"."Mailadresse: . ". $row["Mail"]."</td>";
                echo "</tr>";
                echo "<tr>";
                echo "<td class='_order'>"."Telefonnummer: 0" . $row["Telefonnummer"]."</td>";
                echo "<td class=''>"."Stadt: " . $row["Stadt"]."</td>";
                echo "</tr>";
                echo "<tr>";
                echo "<td class=''>"."PLZ: " . $row["Postleitzahl"]."</td>";
                echo "<td class=''>"."Straße: " . $row["Straße"]."</td>"."</br>";
                echo "</tr>";
                echo "<tr>";
                echo "<td class=''>"."HausNr: " . $row["HausNr"]."</td>";
                echo "<td class=''>"."PreisGesamt: " . $row["PreisGesamt"]." €"."</td>"."</br>";
                echo "</tr>";
                $sqlA = "SELECT `Gericht`, `Menge` FROM order_products WHERE ID='$ID'";
                $resultA = $connection->query($sqlA);
                while ($row = $resultA->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td class=''>"."Gericht: " . $row["Gericht"]."</td>";
                    echo "<td class=''>"."Menge: " . $row["Menge"]."</td>"."</br>";
                    echo "</tr>";
                }
                echo "</table>";
        }
}else{
    die("Falsches Passwort!");
    }}
    ?>
    </body>
</html> 