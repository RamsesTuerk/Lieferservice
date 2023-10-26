function loadCSV() {                                                                /* Erstellt eine Funktion mit dem namen loadCSV*/

    var csvFile = "/Datenbanken/restaurants_all.csv";                            /* Erstellt eine Variable mit dem Namen csvFile. 
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
//----------- Die Auswahl wird in einem Array("coice") gespeichert -----------
var choice = [
    
]

//----------- Diese Funktion übergibt die Werte der Auswahl in choice -----------
function addChoice(value){
    choice.push(value);
    console.log(choice)
}

//----------- Slide-Out functions -----------
function slideOutFood() {
    var element = document.getElementById("table_food_select_container");
    element.classList.add("slide_out");
    element.classList.remove("slide_in_food");
}
function slideOutTyp() {
    var element = document.getElementById("table_typ_select_container");
    element.classList.remove("slide_in");
    element.classList.add("slide_out_typ");
}

//----------- Slide-In functions -----------
function slideInTyp() {
    var element = document.getElementById("table_typ_select_container");
    element.classList.add("slide_in");
}
function slideInPrice() {
    var element = document.getElementById("table_price_select_container");
    element.classList.add("slide_in");
}

//----------- Slide-Back functions -----------
function slideBack() { //----------- Slide-Back von Typ zu Food -----------
    var element = document.getElementById("table_typ_select_container");
    element.classList.remove("slide_in");
    element.classList.add("slide_out");

    var element = document.getElementById("table_food_select_container");
    element.classList.remove("slide_out");
    element.classList.add("slide_in_food");

    choice.pop();       //----------- choice-array update -----------
    console.log(choice)

}
function slideBackPrice() { //----------- Slide-Back von Price zu Typ -----------
    var element = document.getElementById("table_typ_select_container");
    element.classList.remove("slide_out");
    element.classList.add("slide_in");

    var element = document.getElementById("table_price_select_container");
    element.classList.remove("slide_in");
    element.classList.add("slide_out");

    choice.pop();          //----------- choice-array update -----------
    console.log(choice)

}
//----------- Öffnet die Seite "auswahl.html" im selben tab -----------
function submitChoice() {
    window.open("auswahl.html", "_self"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort-----------
  }                                        //----------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------