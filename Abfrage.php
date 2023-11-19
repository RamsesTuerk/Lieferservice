<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> <!--Verbindet die Webseite mit der CSS-Datei "Style.css"-->
        <title>Burger, Pizza, Sushi</title> <!--Legt den Titel der Seite fest-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script language="javascript" type="text/javascript" src="script.js"></script> <!--Verbindet die Webseite mit der JS-Datei-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">
        <script type="text/javascript">
        </script>

    </head>
    <body>
    <?php
    $restaurant_name = strtolower($_POST['restaurant_name']);

    echo '<script>';
        echo 'var restaurant_name ="' . $restaurant_name.'";';
    echo '</script>';
    if ($_SERVER["REQUEST_METHOD"] == "POST") 

     require("connectionBenutzer.php");


    $restaurant_name = $_POST["restaurant_name"];
    $pw = $_POST["pw"];

    $sql = "SELECT * FROM benutzer WHERE restaurant_name = '$restaurant_name' AND pw = '$pw'";
    $result = $connection->query($sql);

    if ($result->num_rows > 0) {


    } else {
        echo "Login fehlgeschlagen. Benutzername oder Passwort ist falsch.";
    }

    $connection->close();

    echo '<script>';
        echo 'var restaurant_name ="' . $restaurant_name.'";';
    echo '</script>';
    ?>
    <div id="Bestellungen"></div>
    </body>
</html>