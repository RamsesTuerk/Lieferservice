<?php
// Datenbankverbindung herstellen
$servername = "localhost";
$username = "root";
$password = "";
$db = "survey";
// Eine Verbindung zur Datenbank herstellen
$conn = new mysqli($servername, $username, $password, $db);

// Überprüfen, ob die Verbindung erfolgreich hergestellt wurde
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

// Die eingegangenen Daten aus dem Formular abrufen 
$question1 = isset($_POST['question1']) ? $_POST['question1'] : '';
$question2 = isset($_POST['question2']) ? $_POST['question2'] : '';
$question3 = isset($_POST['question3']) ? $_POST['question3'] : '';


// SQL-Abfrage für das Einfügen der Daten in die Datenbank-Tabelle
$sql = "INSERT INTO survey_questions (question1, question2, question3) VALUES ('$question1', '$question2', '$question3')";
// Überprüfen, ob die SQL-Abfrage erfolgreich war
if ($conn->query($sql) === TRUE) {
//Erfolgsmeldung
  echo "Vielen Dank für die Teilnahme.";
} else {
   echo json_encode(array("success" => false, "error" => $conn->error));
}
// Verbindung schließen
$conn->close();
?>