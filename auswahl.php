<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> <!--Verbindet die Webseite mit der CSS-Datei "Style.css"-->
        <title>Burger, Pizza, Sushi</title>
        <script language="javascript" type="text/javascript" src="script.js"></script> <!--Verbindet die Webseite mit der JS-Datei-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body onload="loadCSV()">
        <?php
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
            $kategorie = $_GET["kategorie"];
            $typ = $_GET["typ"];
            $preis = $_GET["preis"];

            $sql = "SELECT * FROM restaurants_all WHERE Kategorie='$kategorie'AND Typ='$typ'AND Preis='$preis'";
            // Die Abfrage ausführen und das Ergebnis speichern
            $result = $connection->query($sql);

            // Überprüfen, ob die Abfrage erfolgreich war
            if ($result) {
                // Daten der Db als Tabelle ausgeben und auf der Webseite anzeigen
                while ($row = $result->fetch_assoc()) {
                    echo "<table class='choice_table'>";
                    echo "<tr>";
                    echo "<td class='restaurant_name'>"."Restaurant: " . $row["Restaurant_Name"]."</td>". "<br>";
                    echo "</tr>";
                    echo "<tr>";
                    echo "<td class='restaurant_min_order'>"."Mindestbestellwert: ". $row["Mindestbestellwert"]. " €"."</td>". "<br>";
                    echo "<td class='restaurant_time_order'>"."Lieferzeit: ca. ". $row["Lieferzeit"]. "min."."</td>";
                    echo "<td class='restaurant_price_order'>"."Lieferkosten: " . $row["Lieferkosten"]." €"."</td>";
                    echo "<td class='restaurant_typ_order'>"."Typ: " . $row["Typ"]."</td>";
                    echo "<td class='restaurant_categorie_order'>"."Kategorie: " . $row["Kategorie"]."</td>";
                    echo "<td class='restaurant_price'>"."Preis: " . $row["Preis"]."</td>";
                    echo "</tr>";
                    echo "</table>";
                }

                // Verbindung schließen
                $connection->close();
            } else {
                echo "Fehler bei der Abfrage: " . $connection->error;
            }
        ?>
    </body>
</html>