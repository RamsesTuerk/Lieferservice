function loadCSV() {                                                                /* Erstellt eine Funktion mit dem namen loadCSV*/

    var csvFile = "/Datenbanken/pizza_restaurants.csv";                            /* Erstellt eine Variable mit dem Namen csvFile. 
                                                                                    Diese Variable speichert den Ablageort der zu verwendenden CSV */

    var table = document.getElementById("csvTable");                                /* Erstellt eine Variable mit dem Namen table. 
                                                                                    Diese Variable sucht in der HTML den bereich mit der ID="csvTable"*/
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var lines = this.responseText.split("\n");
                for (var i = 0; i < lines.length; i++) {
                    var row = table.insertRow(-1);
                    var cells = lines[i].split(",");
                    for (var j = 0; j < cells.length; j++) {
                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[j];
                    }
                }
            } else {
                console.error("Failed to load CSV. Status code: " + this.status);
            }
        }else {
            console.error("Failed to load CSV. Status code: " + this.status);
        }
    };

    xhttp.open("GET", csvFile, true);
    xhttp.send();
}

function slideOut() {
    var element = document.getElementById("table_food_select_container");
    element.classList.add("slide_out");
}

function slideIn() {
    var element = document.getElementById("table_typ_select_container");
    element.classList.add("slide_in");
}
function slideBack() {
    var element = document.getElementById("table_typ_select_container");
    element.classList.remove("slide_in");
    
    var element = document.getElementById("table_food_select_container");
    element.classList.remove("slide_out");
}