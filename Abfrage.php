<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> <!--Verbindet die Webseite mit der CSS-Datei "Style.css"-->
        <title>Burger, Pizza, Sushi</title> <!--Legt den Titel der Seite fest-->
        <script language="javascript" type="text/javascript" src="script.js"></script> <!--Verbindet die Webseite mit der JS-Datei-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">
    </head>
    <body>
    <?php
    if($_POST['pw'] == "Start.123") {
    echo "Richtig! Du bist drin!";
    echo "Der geheime Inhalt (...)";
    } else {
    die("Falsches Passwort!");
    }
    ?>
    </body>
</html> 