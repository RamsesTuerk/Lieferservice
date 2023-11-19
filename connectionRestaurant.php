
<?php
// Erstellung der Datenbankverbindung (Max) Tabellen erstellt (Ramses) 
$servername = "localhost";
$user = "root";
$password = "";
$db = "restaurants";

$connection = new mysqli($servername, $user, $password, $db);

if ($connection->connect_error) {
    die("FAILED " . $connection->connect_error);
}
?>