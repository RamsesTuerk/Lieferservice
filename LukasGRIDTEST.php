<?php
$servername = "localhost";  // Der Datenbankserver 
$username = "root";  //Datenbank-Benutzername
$password = "";  //Datenbank-Passwort
$dbname = "restaurants";  //Name der Datenbank
$restaurant = $_GET["Restaurant"];
$restaurantLow = strtolower($restaurant);

// Verbindung herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

// SQL-Abfrage, um alle Daten aus der Tabelle abzurufen
$sql = "SELECT * FROM $restaurantLow";
$result = $conn->query($sql);

// Überprüfen, ob Daten vorhanden sind
if ($result->num_rows > 0) {
    // Daten in ein assoziatives Array konvertieren
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "Keine Daten gefunden";
}

echo '<script>';
echo 'var phpData = ' . json_encode($data) . ';';
echo '</script>';

// Verbindung schließen
$conn->close();
?>

<!DOCTYPE html>
<html>
<head lang="DE">
    <title>Your order</title>
    <script type="text/javascript" src="warenkorb.js"></script>
    <link rel="stylesheet" href="LukasCSSTest.css">
</head>

<body onload="init()">
  <div class="container">

    <div class="Header">

      <h1>RaLuMa Lieferservice.</h1>
    </div>
    <div class="Headside">
      <a href="index.html" class="home">Home</a>
      <button onclick="darkmode()">Darkmode</button>
    </div>
    <div class="Content">

      <article id="menue" class="menueList">
       
      </article>

    </div>
  
    
    <div class="Side"> 

      <article id="waren" class="warenkorb"></article>  
      
    </div>
    
    <div class="Footer"></div>
  </div>
  
</body>
</html>