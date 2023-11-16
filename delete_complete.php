<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> <!--Verbindet die Webseite mit der CSS-Datei "Style.css"-->
        <title>Burger, Pizza, Sushi</title> <!--Legt den Titel der Seite fest-->
        <script language="javascript" type="text/javascript" src="script.js"></script> <!--Verbindet die Webseite mit der JS-Datei-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body onload="close()">
        <?php
        $restaurant_name = strtolower($_POST['restaurant_name']);
        $servername = "localhost";  // Der Datenbankserver 
        $username = "root";  //Datenbank-Benutzername
        $password = "";  //Datenbank-Passwort
        $database = "bestellungen";  //Name der Datenbank
        
        $connection = new mysqli($servername, $username, $password, $database);
    
        $sql = "SELECT * FROM orders_$restaurant_name";
        
    
        $result = $connection->query($sql);


        $order = $_POST['order'];
        $sql = "DELETE FROM orders_$restaurant_name WHERE id=$order";

        if ($connection->query($sql) === TRUE) {
            echo "<div class='congrats'>";
                echo "Erfolgreich gelöscht";
            echo "</div>";
        }
        ?>
    </body>
</html>