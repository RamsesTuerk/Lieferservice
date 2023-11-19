</head>
    <body>
    <?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") 

     require("connectionBenutzer.php");
	@@ -25,21 +29,81 @@
    $result = $connection->query($sql);

    if ($result->num_rows > 0) {

    } else {
        echo "Login fehlgeschlagen. Benutzername oder Passwort ist falsch.";
    }

    $connection->close();

    echo '<script>';
        echo 'var restaurant_name ="' . $restaurant_name.'";';
    echo '</script>';