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
        require("connectionBestellungen.php");

        $restaurant_name = $_POST['restaurant_name'];
    
        $sql = "SELECT * FROM orders_$restaurant_name";

        $order = $_POST['order'];

        echo $order;

        $sql = "DELETE FROM orders_$restaurant_name WHERE ID='$order'";

        $result = $connection->query($sql);

        if ($connection->query($sql) === TRUE) {
            echo "<div class='congrats'>";
                echo "Erfolgreich gelöscht";
            echo "</div>";
        }
        ?>
    </body>
</html>