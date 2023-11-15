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
var choice = []
    


//----------- Diese Funktion übergibt die Werte der Auswahl in choice -----------
function addChoice(value){
    choice.push(value);
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

function postChoice(){
    if(choice[0] == 0)
        kategorie = "Burger"
    else if(choice[0] == 1)
        kategorie = ("Pizza")
    else if(choice[0] == 2)
        kategorie = ("Sushi")

    if(choice[1] == 0)
        typ = ("Rind")
    else if(choice[1] == 1)
        typ = ("Gefluegel")
    else if(choice[1] == 2)
        typ = ("Vegan")

    if(choice[2] == 0)
        preis = ("Guenstig")
    else if(choice[2] == 1)
        preis = ("Mittelpreisig")
    else if(choice[2] == 2)
        preis = ("Teuer")
}
//----------- Öffnet die Seite "auswahl.html" im selben tab -----------
function submitChoice() {
    postChoice()
    window.open("auswahl.php", "_self"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------
    window.location.href = "auswahl.php?kategorie=" + kategorie + "&" + "typ=" + typ + "&" + "preis=" + preis;
  }
function randomChoice(){
    kategorie = Math.floor(Math.random() * 3);
    typ = Math.floor(Math.random() * 3);
    preis = Math.floor(Math.random() * 3);

    if(kategorie == 0)
        kategorie = "Burger"
    else if(kategorie == 1)
        kategorie = ("Pizza")
    else if(kategorie == 2)
        kategorie = ("Sushi")

    if(typ == 0)
        typ = ("Rind")
    else if(typ == 1)
        typ = ("Gefluegel")
    else if(typ == 2)
        typ = ("Vegan")

    if(preis == 0)
        preis = ("Guenstig")
    else if(preis == 1)
        preis = ("Mittelpreisig")
    else if(preis == 2)
        preis = ("Teuer")

        window.open("auswahl.php", "_self"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------
        window.location.href = "auswahl.php?kategorie=" + kategorie + "&" + "typ=" + typ + "&" + "preis=" + preis;
}
function randomChoiceVegan(){
    kategorie = Math.floor(Math.random() * 3);
    typ = "Vegan"
    preis = Math.floor(Math.random() * 3);

    if(kategorie == 0)
        kategorie = "Burger"
    else if(kategorie == 1)
        kategorie = ("Pizza")
    else if(kategorie == 2)
        kategorie = ("Sushi")

    if(preis == 0)
        preis = ("Guenstig")
    else if(preis == 1)
        preis = ("Mittelpreisig")
    else if(preis == 2)
        preis = ("Teuer")

        window.open("auswahl.php", "_self"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------
        window.location.href = "auswahl.php?kategorie=" + kategorie + "&" + "typ=" + typ + "&" + "preis=" + preis;
}
function skipChoice(){

    window.open("auswahl_skip.php", "_self"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------
}
function submit_choice(){

    window.open("index.html", "_blank"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------
}
// Dieser Code wird dazu verwendet, einen Warenkorb funktional darzustellen.
var warenkorbPreis = 0;
var warenkorb = {
  produkte: [],  // Array für die Namen der Produkte im Warenkorb
  menge: [],     // Array für die Menge jedes Produkts im Warenkorb
  preis: []      // Array für den Preis jedes Produkts im Warenkorb
};
var cookieStr = ''; // Initialisierung vom Cookie String
var expireTime = new Date(); // Erstellung einer endzeit des Cookies (24h)
expireTime = new Date(a.getTime() +1000*60*60*24);

//checke Cookies und ausgabe des Warenkorbs
function warenkorbAnzeigenOnload(){
  checkCookie();
  warenkorbAnzeigen();
}

//Hinzufügen von Produkten in den Warenkorb
function zumWarenkorb(nr, pr) {
  var produktName = document.getElementById('produkt' + nr).innerHTML;
  var preis = pr;

  // Sucht nach dem Produkt im Warenkorb
  var index = warenkorb.produkte.indexOf(produktName);

  if (index === -1) {
    warenkorb.produkte.push(produktName);
    warenkorb.menge.push(1);
    warenkorb.preis.push(preis);
  } else {
    warenkorb.menge[index] += 1;
  }

  cookieSave();
  warenkorbAnzeigen();
}

//Ausgeben des Warenkorbs in form von <artikels> 
function warenkorbAnzeigen() {
  warenkorbSum();  // Warenkorb-Gesamtpreis berechnen
  var ausgabe = '<article class="warenkorbArtikel">' + "Bestellung:" + '</article>';

  for (var i = 0; i < warenkorb.produkte.length; i++) {
    ausgabe += '<article class="warenkorbArtikel">';
    ausgabe += '<table><tr><td class="warenkorbTabelleZellen">' + warenkorb.menge[i] + 'x </td><td class="warenkorbTabelleItem">' + warenkorb.produkte[i] + ': </td><td class="warenkorbTabellePrice"> ' + (warenkorb.preis[i] / 100) + '&#x20AC </td><td class="warenkorbTabelleZellen">';
    ausgabe += '<button class="warenkorbButtonLöschen" onclick="loescheProdukt(' + i + ');"><img src="pictures/delete.png" alt="delete"></button></td></tr></table>';
    ausgabe += '<br>';
    ausgabe += '</article>';
  }

  ausgabe += "Summe: " + warenkorbPreis/100 + "€";
  ausgabe += '<br>';
  ausgabe += '<br>';

  document.getElementById('waren').innerHTML = ausgabe;

  cookieSave();

  warenkorbPreis = 0;
}

// Löschen von Produkten aus dem Warenkorb
function loescheProdukt(index) {
  if (warenkorb.menge[index] > 1) {
    warenkorb.menge[index] -= 1;
  } else {
    warenkorb.produkte.splice(index, 1);
    warenkorb.menge.splice(index, 1);
    warenkorb.preis.splice(index, 1);
  }
  warenkorbAnzeigen();
}

//Zusammenrechnen der Warenkorbsumme
function warenkorbSum(){
  // Schleife durch alle Produkte im Warenkorb
  for (var i = 0; i < warenkorb.produkte.length; i++) {
    // Gesamtpreis berechnen, indem Menge und Preis multipliziert und zur Gesamtsumme hinzugefügt werden
    warenkorbPreis += warenkorb.menge[i] * warenkorb.preis[i];
  }
}

// Der check ob ein Cookie existiert und das Extrahieren seiner daten 
function checkCookie() {
  var cookieList = (document.cookie) ? document.cookie.split(';') : [];
  var cookieValues = {};




if(document.cookie){

    const decodedCookie = decodeURIComponent(document.cookie); // entfernen der Cookieinformationen 
    const cuttedString = decodedCookie.split('Warenkorb=').pop().split(';')[0]; //Inhalt unseres Cookies vom Namen und von Weiteren Cookies Trennen
    const cuttedStringWithoutSpaces = cuttedString.trim(); //Lehrzeichen entfernen
    const array2 = cuttedStringWithoutSpaces.split(",").filter(item => item !== ""); //Einzelne Cookieinformationen Trennen und leere Felder Löschen 

    // Schreiben der gespeicherten Informationen in den Warenkorb
    for (let i = 0; i < array2.length; i += 3) {
      warenkorb.produkte.push(array2[i]);
      warenkorb.menge.push(Number(array2[i + 1]));
      warenkorb.preis.push(Number(array2[i + 2]));
    }
}
}


//Cookie mit den Warenkorbinformationen speichern
function cookieSave(){
  for(var i = 0; i < warenkorb.produkte.length; i++) {
    cookieStr += warenkorb.produkte[i]+',';
    cookieStr += warenkorb.menge[i]+',';
    cookieStr += warenkorb.preis[i]+',';
  }
  //Cookie Speichern
  document.cookie = 'Warenkorb='+cookieStr+'; expires='+expireTime+';';
  cookieStr = ''; //Leeren des CookieStings
}


//DARKMODE//
function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");}



