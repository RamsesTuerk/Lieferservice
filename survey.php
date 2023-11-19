<?php
// Datenbankverbindung herstellen
$servername = "localhost";
$username = "root";
$password = "";
$db = "survey";

$conn = new mysqli($servername, $username, $password, $db);


if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}


$question1 = isset($_POST['question1']) ? $_POST['question1'] : '';
$question2 = isset($_POST['question2']) ? $_POST['question2'] : '';
$question3 = isset($_POST['question3']) ? $_POST['question3'] : '';



$sql = "INSERT INTO survey_questions (question1, question2, question3) VALUES ('$question1', '$question2', '$question3')";

if ($conn->query($sql) === TRUE) {
  echo json_encode(array("success" => true, "message" => "Vielen Dank fuer die Teilnahme."));
} else {
   echo json_encode(array("success" => false, "error" => $conn->error));
}

$conn->close();
?>