<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> <!--Verbindet die Webseite mit der CSS-Datei "Style.css"-->
        <title>Burger, Pizza, Sushi</title> <!--Legt den Titel der Seite fest-->
        <script language="javascript" type="text/javascript" src="script.js"></script> <!--Verbindet die Webseite mit der JS-Datei-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <?php
        $servername = "localhost";  // Der Datenbankserver 
        $username = "root";  //Datenbank-Benutzername
        $password = "";  //Datenbank-Passwort
        $database = "bestellungen";  //Name der Datenbank
        
        $connection = new mysqli($servername, $username, $password, $database);
    
        $sql = "SELECT * FROM orders";
        
    
        $result = $connection->query($sql);


        $order = $_POST['order'];
        $sql = "DELETE FROM orders WHERE id=$order";

        if ($connection->query($sql) === TRUE) {
          echo "Record deleted successfully";
        } else {
          echo "Error deleting record: " . $conn->error;
        }
        ?>
    </body>
</html>