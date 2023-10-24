function loadCSV() {                                                                /* Erstellt eine Funktion mit dem namen loadCSV*/

    var csvFile = "/Datenbanken/burger_restaurants.csv";                            /* Erstellt eine Variable mit dem Namen csvFile. 
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


function showTyp(){                                                                //erstellt eine Funktion, die eine Tabelle ins Bild sliden lässt
    
        const tableContainer = document.querySelector('.table_typ_select_container');
        if (tableContainer.style.left !== '-100%') {
            tableContainer.style.left = '50%';
        } else {
            console.error("Failed to load Table. Status code: " + this.status);
            tableContainer.style.left = '-100%';
        }
    
}
function hideTyp(){                                                                 //erstellt eine Funktion, die eine Tabelle aus dem Bild sliden lässt
    
    const tableContainer = document.querySelector('.table_food_select');
    if (tableContainer.style.left !== '-100%') {
        tableContainer.style.left = '-100%';
    } else {
        console.error("Failed to load Table. Status code: " + this.status);
        tableContainer.style.left = '-100%';
    }

}