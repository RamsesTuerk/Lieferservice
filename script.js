// Hier wird der JavaScript Code für das Einlesen und Anzeigen von CSV-Daten implementiert.
var csvFile = "/Datenbanken/burger_restaurants.csv";

var table = document.getElementById("csvTable");
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var lines = this.responseText.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var row = table.insertRow(-1);
            var cells = lines[i].split(",");
            for (var j = 0; j < cells.length; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = cells[j];
            }
        }
    }
};

xhttp.open("GET", csvFile, true);
xhttp.send();