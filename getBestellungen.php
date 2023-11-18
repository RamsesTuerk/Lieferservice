<?php

require("connectionBestellungen.php");


$restaurant_name = $_POST["restaurant_name"];


$sql = "SELECT * FROM orders_$restaurant_name";
    
$result = $connection->query($sql);

$data=array();

    // Überprüfen, ob Daten vorhanden sind, bevor json_encode aufgerufen wird
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
   }
}

    // Setzen Sie den Content-Type-Header auf application/json
 header('Content-Type: application/json');

 

    // Verwenden Sie json_encode nur, wenn Daten vorhanden sind
 if (!empty($data)) {
     echo json_encode($data);
} else {
     echo json_encode(array("message" => "No products found"));
}

$connection->close();

?>