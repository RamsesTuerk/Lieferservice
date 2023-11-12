<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> <!--Verbindet die Webseite mit der CSS-Datei "Style.css"-->
        <title>Burger, Pizza, Sushi</title> <!--Legt den Titel der Seite fest-->
        <script language="javascript" type="text/javascript" src="script.js"></script> <!--Verbindet die Webseite mit der JS-Datei-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body class="choice_body" onload="loadCSV()">
        <div class="">
            <div class="header">
                <h1>Die für dich passende Auswahl an Restaurants</h1>
            </div>
            <div class="container">
                <?php //Beginn des PHP Codes
                    $servername = "localhost";  // Der Datenbankserver 
                    $username = "root";  //Datenbank-Benutzername
                    $password = "";  //Datenbank-Passwort
                    $database = "restaurants";  //Name der Datenbank
                    
                    // Verbindung zur Datenbank herstellen
                    $connection = new mysqli($servername, $username, $password, $database);
                    
                    // Überprüfen, ob die Verbindung erfolgreich hergestellt wurde
                    if ($connection->connect_error) {
                        die("Verbindung zur Datenbank fehlgeschlagen: " . $connection->connect_error);
                    }
                    $kategorie = $_GET["kategorie"]; // Setzt die Variable $kategorie auf den durch die URL übergebenen Wert der Kategorie
                    $typ = $_GET["typ"]; // Setzt die Variable $typ auf den durch die URL übergebenen Wert des Typen
                    $preis = $_GET["preis"];// Setzt die Variable $preis auf den durch die URL übergebenen Wert des Preises

                    $sql = "SELECT * FROM restaurants_all WHERE Kategorie='$kategorie'AND Typ='$typ'AND Preis='$preis'";
                    // Die Abfrage ausführen und das Ergebnis speichern
                    $result = $connection->query($sql);

                    // Überprüfen, ob die Abfrage erfolgreich war
                    if ($result) {
                        // Daten der Db als Tabelle ausgeben und auf der Webseite anzeigen
                        while ($row = $result->fetch_assoc()) {
                            echo "<div class=''>";
                                echo "<table class='choice_table'>";
                                echo "<tr>";
                                echo "<a href='google.com'>"."<td class='td restaurant_name'>"."Restaurant: " . $row["Restaurant_Name"]."</td>"."</a>";
                                echo "</tr>";
                                echo "<tr>";
                                echo "<td class='td restaurant_min_order'>"."Mindestbestellwert: ". $row["Mindestbestellwert"]. " €"."</td>";
                                echo "<td class='td restaurant_time_order'>"."Lieferzeit: ca. ". $row["Lieferzeit"]. "min."."</td>";
                                echo "</tr>";
                                echo "<tr>";
                                echo "<td class='td restaurant_price_order'>"."Lieferkosten: " . $row["Lieferkosten"]." €"."</td>";
                                echo "<td class='td restaurant_typ_order'>"."Typ: " . $row["Typ"]."</td>";
                                echo "</tr>";
                                echo "<tr>";
                                echo "<td class='td restaurant_categorie_order'>"."Kategorie: " . $row["Kategorie"]."</td>";
                                echo "<td class='td restaurant_price'>"."Preis: " . $row["Preis"]."</td>"."</br>";
                                echo "</tr>";
                                echo "</table>";
                            echo "</div>";
                        }

                        // Verbindung schließen
                        $connection->close();
                    } else {
                        echo "Fehler bei der Abfrage: " . $connection->error;
                    }
                ?> <!--Ende des PHP Codes-->
            </div>
            <div class="side">
            </div>
            <div class="footer">
            </div>
        </div>
    </body>
</html>