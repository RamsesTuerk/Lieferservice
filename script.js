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

}
function slideBackPrice() { //----------- Slide-Back von Price zu Typ -----------
    var element = document.getElementById("table_typ_select_container");
    element.classList.remove("slide_out");
    element.classList.add("slide_in");

    var element = document.getElementById("table_price_select_container");
    element.classList.remove("slide_in");
    element.classList.add("slide_out");

    choice.pop();          //----------- choice-array update -----------

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
    warenkorbAusgeben();
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
expireTime = expireTime.getTime() +1000*60*60*24;

//checke Cookies und ausgabe des Warenkorbs
function init(){
  speisekarteAusgeben();
  checkCookie();
  warenkorbAusgeben();
}

function speisekarteAusgeben(){
  var speisekarte = '';
for(var i = 1; i < phpData.length; i++){
  speisekarte += '<button class="SpeiseKarteButton"  onclick="zumWarenkorb('+ i + ' , '+ phpData[i]["COL 4"] + ')">'
    speisekarte += '<div class="speisekarte_article">'
      speisekarte += '<article class="menueItem">'
        speisekarte += '<table class="Test">'
          speisekarte += '<tr>'
            speisekarte += '<th>'
              speisekarte += '<h5 class="food_item_name" id="produkt' + i +'">'+ phpData[i]["COL 2"] + '</h5>'
              speisekarte += '<h6 class="food_item_price" >'+ phpData[i]["COL 4"] + ' €</h6>'
            speisekarte += '</th>'
          speisekarte += '</tr>'
          speisekarte += '<tr class="tr_class">'
            speisekarte += '<td class="inhalt">'+ phpData[i]["COL 3"] + '</td>'
          speisekarte += '</tr>'
        speisekarte += '</table>'
      speisekarte += '</article>'
    speisekarte += '</div>'
  speisekarte += '</button>'  
    
}
  document.getElementById('menue').innerHTML = speisekarte

};

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
  warenkorbAusgeben();
}

//Ausgeben des Warenkorbs in form von <articles> 
function warenkorbAusgeben() {
  warenkorbSum();  // Warenkorb-Gesamtpreis berechnen

// Ausgabe von HTML Elementen in dem von der var "ausgabe" Bereich auf einer Webseite
var ausgabe = '<h1>Warenkorb</h1>';
ausgabe += '<article class="warenkorbArtikel">';
  ausgabe += '<table>';
    ausgabe += '<tr>';
      ausgabe += '<td class="warenkorbTabelleZellen">Menge:</td>';
      ausgabe += '<td class="warenkorbTabelleItem">Produkt: </td>';
      ausgabe += '<td class="warenkorbTabellePrice">Preis:</td>';
      ausgabe += '<td class="warenkorbTabelleZellen"></td>';
    ausgabe += '</tr>';
  ausgabe += '</table>';
ausgabe += '</article>';

// Erstellt einen Article, welcher eine Tabelle enthält. Diese zeigt die ausgewählten Menge,Produkte und Preise geordnet an________________________________________________
  for (var i = 0; i < warenkorb.produkte.length; i++) {                                                                                                                 //|
    ausgabe += '<article class="warenkorbArtikel">';                                                                                                                    //|
        ausgabe += '<table>';                                                                                                                                           //|
            ausgabe += '<tr>';                                                                                                                                          //|
                ausgabe += '<td class="warenkorbTabelleZellen">' + warenkorb.menge[i] + 'x </td>';                                                                      //|
                ausgabe += '<td class="warenkorbTabelleItem">' + warenkorb.produkte[i] + ': </td>';                                                                     //|
                ausgabe += '<td class="warenkorbTabellePrice"> ' + warenkorb.preis[i] + '&#x20AC </td>';                                                                //|
                ausgabe += '<td class="warenkorbTabelleZellen">';                                                                                                       //|                                                                                                       //|
                    ausgabe += '<button class="warenkorbButtonLöschen" onclick="loescheProdukt(' + i + ');"><img src="pictures/delete.png" alt="delete"></button>';     //|
                ausgabe += '</td>';                                                                                                                                     //|
            ausgabe += '</tr>';                                                                                                                                         //|
        ausgabe += '</table>';                                                                                                                                          //|
    ausgabe += '</article>';                                                                                                                                            //|
  }                                                                                                                                                                     //|
  ausgabe += '<article class="warenkorbArtikel">';                                                                                                                      //|
    ausgabe += '<table>'                                                                                                                                                //| Ramses / Max
      ausgabe += '<tr>'                                                                                                                                                 //|
        ausgabe += '<td class="warenkorbTabelleZellen">' + "" + 'x </td>';                                                                                              //|
        ausgabe += '<td class="warenkorbTabelleItem">' + "Lieferkosten" + ': </td>';                                                                                    //|
        ausgabe += '<td class="warenkorbTabellePrice"> ' + lieferkostenPost + '&#x20AC </td>';                                                                              //|
        ausgabe += '<td class="warenkorbTabelleZellen">';                                                                                                               //|
      ausgabe += '</td>';                                                                                                                                               //|
    ausgabe += '</table>'                                                                                                                                               //|
  ausgabe += '</article>';                                                                                                                                              //|
                                                                                                                                                                        //|
  ausgabe += '<article class="warenkorbArtikel">';                                                                                                                      //|
    ausgabe += '<table>';                                                                                                                                               //|
      ausgabe += '<tr>';                                                                                                                                                //|
        ausgabe += '<td class="warenkorbTabelleZellen">' + "" + '</td>';                                                                                                //|
        ausgabe += '<td class="warenkorbTabelleItem">' + "Gesamtkosten" + ': </td>';                                                                                    //|
        ausgabe += '<td class="warenkorbTabellePrice"> ' + warenkorbPreis.toFixed(2) + '&#x20AC </td>';                                                                 //|
        ausgabe += '<td class="warenkorbTabelleZellen">';                                                                                                               //|
      ausgabe += '</td>';                                                                                                                                               //|
    ausgabe += '</table>'                                                                                                                                               //|
  ausgabe += '</article>';                                                                                                                                              //|
//_________________________________________________________________________________________________________________________________________________________________________


// Speichert die Werte der einzelnen Produkte in verteckten Inputs (nicht sichtbar), damit diese an die nächste Webseite übergeben werden können___________________________
  for (var i = 0; i < warenkorb.produkte.length; i++) {                                                                                                                 //|
  ausgabe += '<input class="hidden" name="prodMenge' + i + '" value="' + warenkorb.menge[i] + '">';                                                                     //|
  ausgabe += '<input class="hidden" name="prodName' + i + '" value="' + warenkorb.produkte[i] + '">';                                                                   //|
  ausgabe += '<input class="hidden" name="prodPrice' + i + '" value="' + warenkorb.preis[i] + '">';                                                                     //| Ramses / Max
  };                                                                                                                                                                    //|
  ausgabe += '<input class="hidden" name="products' + '" value="' + i + '">';                                                                                           //|
  ausgabe += '<input class="hidden" name="price' + '" value="' + warenkorbPreis.toFixed(2) +'">';                                                                       //|
  ausgabe += '<input class="hidden" name="restaurant" value="' + restaurantPost + '">';                                                                                 //|
//_________________________________________________________________________________________________________________________________________________________________________

  ausgabe += '<div class="BtnBestellen">'
    ausgabe += '<a id="orderBtnPrice" href="bestellung.html"><input class="warenkorbButtonBestellen" type="button" value="bestellen"></a>';
  ausgabe += '</div>'

  if (document.getElementById('waren') != null){
    document.getElementById('waren').innerHTML = ausgabe;
  }else{
    document.getElementById('warenZusammenfassung').innerHTML = ausgabe;
    element = document.getElementById("orderBtnPrice");
    element.classList.add("hidden");
  }
  ;

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
  warenkorbAusgeben();
  cookieSave();
}

//Zusammenrechnen der Warenkorbsumme
function warenkorbSum(){
  // Schleife durch alle Produkte im Warenkorb
  for (var i = 0; i < warenkorb.produkte.length; i++) {
    // Gesamtpreis berechnen, indem Menge und Preis multipliziert und zur Gesamtsumme hinzugefügt werden
    warenkorbPreis += warenkorb.menge[i] * warenkorb.preis[i];
  }
  warenkorbPreis += Number(lieferkostenPost);
}

// Der check ob ein Cookie existiert und das Extrahieren seiner daten 
function checkCookie() {

  if(document.cookie){
      const decodedCookie = decodeURIComponent(document.cookie); // entfernen der Cookieinformationen 
      const cuttedString = decodedCookie.split('Warenkorb=').pop().split(';')[0]; //Inhalt unseres Cookies vom Namen Restaurant und von Weiteren Cookies Trennen
      const cuttedStringWithoutSpaces = cuttedString.trim(); //Lehrzeichen entfernen
      const array2 = cuttedStringWithoutSpaces.split("+").filter(item => item !== ""); //Einzelne Cookieinformationen Trennen und leere Felder Löschen
      restaurantName = array2[0];
      lieferkosten = array2[1];
      minBestellwert = array2[2];

    if(restaurantName == restaurantPost){
      // Schreiben der gespeicherten Informationen in den Warenkorb
      for (let i = 3; i < array2.length; i += 3) {
        warenkorb.produkte.push(array2[i]);
        warenkorb.menge.push(Number(array2[i + 1]));
        warenkorb.preis.push(Number(array2[i + 2]));
        cookieSave();
        warenkorbAusgeben();
      }
    }else{
      if(confirm("Möchtest du zu deinem Aktuellen Warenkorb zurückkehren?")){
        window.open("order.php", "_self"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------
        window.location.href = "order.php?restaurant=" + restaurantName + "&" + "lieferkosten=" + lieferkosten + "&" + "minBestellwert=" + minBestellwert;
      }
    }
  }else{
    cookieSave();
    warenkorbAusgeben();
  }
}

//Cookie mit den Warenkorbinformationen speichern
function cookieSave(){
  for(var i = 0; i < warenkorb.produkte.length; i++) {
    cookieStr += warenkorb.produkte[i]+'+';
    cookieStr += warenkorb.menge[i]+'+';
    cookieStr += warenkorb.preis[i]+'+';
  }
  //Cookie Speichern
  document.cookie = 'Warenkorb='+ restaurantPost+ '+' + lieferkostenPost +'+'+ minBestellwertPost +'+' +cookieStr+'; expires='+expireTime+';';
  cookieStr = ''; //Leeren des CookieStings
}
