<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> <!--Verbindet die Webseite mit der CSS-Datei "Style.css"-->
        <title>Burger, Pizza, Sushi</title>
        <script language="javascript" type="text/javascript" src="script.js"></script> <!--Verbindet die Webseite mit der JS-Datei-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body onload="loadCSV()">
        <div>
        </div>
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
            $skip = $_GET["skip"];
            if ($skip == "ja")
                $sql = "SELECT * FROM restaurants_all";
            else
                $sql = "SELECT * FROM restaurants_all WHERE Kategorie='$kategorie'AND Typ='$typ'AND Preis='$preis'";

            // Die Abfrage ausführen und das Ergebnis speichern
            $result = $connection->query($sql);

            // Überprüfen, ob die Abfrage erfolgreich war
            if ($result) {
                // Daten der Db als Tabelle ausgeben und auf der Webseite anzeigen
                while ($row = $result->fetch_assoc()) {
                    echo "<table class='choice_table'>";
                    echo "<tr>";
                    echo "<td>"."Restaurant: " . $row["Restaurant_Name"]."</td>". "<br>";
                    echo "</tr>";
                    echo "<tr>";
                    echo "<td>"."Mindestbestellwert: ". $row["Mindestbestellwert"]. " €"."</td>". "<br>";
                    echo "<td>"."Lieferzeit: ca. ". $row["Lieferzeit"]. "min."."</td>";
                    echo "<td>"."Lieferkosten: " . $row["Lieferkosten"]." €"."</td>";
                    echo "<td>"."Typ: " . $row["Typ"]."</td>";
                    echo "<td>"."Kategorie: " . $row["Kategorie"]."</td>";
                    echo "<td>"."Preis: " . $row["Preis"]."</td>";
                    echo "</tr>";
                    echo "</table>";
                }

                // Verbindung schließen
                $connection->close();
            } else {
                echo "Fehler bei der Abfrage: " . $connection->error;
            }
        ?>
        </table>
    </body>
</html>