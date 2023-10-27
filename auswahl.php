<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> <!--Verbindet die Webseite mit der CSS-Datei "Style.css"-->
        <title>Burger, Pizza, Sushi</title>
        <script language="javascript" type="text/javascript" src="script.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body onload="loadCSV()">
        <div>
        </div>
        <?php
            $servername = "localhost";  // Der Datenbankserver (normalerweise "localhost" auf demselben Server)
            $username = "root";  // Ihr Datenbank-Benutzername
            $password = "";  // Ihr Datenbank-Passwort
            $database = "restaurants";  // Der Name Ihrer Datenbank
            
            // Verbindung zur Datenbank herstellen
            $connection = new mysqli($servername, $username, $password, $database);
            
            // Überprüfen, ob die Verbindung erfolgreich hergestellt wurde
            if ($connection->connect_error) {
                die("Verbindung zur Datenbank fehlgeschlagen: " . $connection->connect_error);
            }
            $kategorie = $_GET["kategorie"];
            $typ = $_GET["typ"];
            $sql = "SELECT * FROM restaurantes_all WHERE Kategorie='$kategorie'AND Typ='$typ'";

            // Die Abfrage ausführen und das Ergebnis speichern
            $result = $connection->query($sql);

            // Überprüfen, ob die Abfrage erfolgreich war
            if ($result) {
                // Daten verarbeiten, z.B. ausgeben
                while ($row = $result->fetch_assoc()) {
                    echo "<table class='choice_table'>";
                    echo "<tr>";
                    echo "<td>"."Restaurant: " . $row["Restaurant Name"]."</td>". "<br>";
                    echo "</tr>";
                    echo "<tr>";
                    echo "<td>"."Mindestbestellwert: ". $row["Mindestbestellwert"]. "0 €"."</td>". "<br>";
                    echo "<td>"."Lieferzeit: ca. ". $row["Lieferzeit (Minuten)"]. "min."."</td>";
                    echo "<td>"."Lieferkosten: " . $row["Lieferkosten"]."0 €"."</td>";
                    echo "<td>"."Typ: " . $row["Typ"]."</td>";
                    echo "<td>"."Kategorie: " . $row["Kategorie"]."</td>";
                    echo "</tr>";
                    echo "</table>";
                }

                // Verbindung schließen
                $connection->close();
            } else {
                echo "Fehler bei der Abfrage: " . $connection->error;
            }
        ?>
        <table id="csvTable1">
            <ol>
            <!-- Hier werden die CSV-Daten eingefügt -->
            </ol>
        </table>
    </body>
</html>