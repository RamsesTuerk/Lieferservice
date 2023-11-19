
<?php
// Erstellung der Datenbankverbindung (Ramses) Tabellen erstellt (Lukas)
$servername = "localhost";
$user = "root";
$password = "";
$db = "anmeldung";

$connection = new mysqli($servername, $user, $password, $db);

if ($connection->connect_error) {
    die("FAILED " . $connection->connect_error);
}
?>