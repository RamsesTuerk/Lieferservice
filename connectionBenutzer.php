
<?php
$servername = "localhost";
$user = "root";
$password = "";
$db = "benutzer";

$connection = new mysqli($servername, $user, $password, $db);

if ($connection->connect_error) {
    die("FAILED " . $connection->connect_error);
}
?>