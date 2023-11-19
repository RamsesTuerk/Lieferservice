//----------- Die Auswahl wird in einem Array("coice") gespeichert -----------
var choice = []
var warenkorbPreis = 0;

var warenkorbPreis = 0;
var warenkorb = {
  produkte: [],  // Array für die Namen der Produkte im Warenkorb
  menge: [],     // Array für die Menge jedes Produkts im Warenkorb
  preis: []      // Array für den Preis jedes Produkts im Warenkorb
};
var cookieStr = ''; // Initialisierung vom Cookie String
var expireTime = new Date(); // Erstellung einer endzeit des Cookies (24h)
expireTime = expireTime.getTime() +1000*60*60*24;

//Ajax funktion inklusive der ausgabe für Abfrage.php (Ramses)
$(document).ready(
  setInterval(function () { //ajax wir alle 0.5 secunden ausgefürt 
    $.ajax({
      url: 'getBestellungen.php',
      type: 'POST',
      data: { "restaurant_name": restaurant_name.trim() },
      dataType: 'json',
      success: function (data) {
        //Initialisierung von Objekten zur darstellung der Produkte sowie der Bestellinformationen
        var bestellungen ={
          id:[],
          name:[],
          nachname:[],
          mail:[],
          telefonnummer:[],
          stadt:[],
          postleitzahl:[],
          strasse:[],
          hausNr:[],
          preisGesamt:[]
        };
        
        var produkte ={
          id:[],
          gericht:[],
          menge:[]
        }
        var ordered_table = ''; //String für den HTML code

        try{ //Errorhandeling um errors zu vermeiden wenn data leer ist 
          data.forEach(function (item) {

          if(bestellungen.id.indexOf(item["ID"]) == -1 ){

            //schreiben der daten in objekte
            bestellungen.id.push(item["ID"]);
            bestellungen.name.push(item["Name"]);
            bestellungen.nachname.push(item["Nachname"]);
            bestellungen.mail.push(item["Mail"]);
            bestellungen.telefonnummer.push(item["Telefonnummer"]);
            bestellungen.stadt.push(item["Stadt"]);
            bestellungen.postleitzahl.push(item["Postleitzahl"])
            bestellungen.strasse.push(item["Straße"]);
            bestellungen.hausNr.push(item["HausNr"]);
            bestellungen.preisGesamt.push(item["PreisGesamt"]);

            produkte.id.push(item["ID"]);
            produkte.gericht.push(item["Gericht"]);
            produkte.menge.push(item["Menge"]);


          }else{

            produkte.id.push(item["ID"]);
            produkte.gericht.push(item["Gericht"]);
            produkte.menge.push(item["Menge"]);

          }});

          //generierung des HTML codes für die ausgabe auf Abfrage.php
          for(var i = 0 ; i < bestellungen.id.length; i++){ 
            ordered_table += '<table class="ordered_table">';
              ordered_table += '<tr>';
                ordered_table += '<td class =""><h3>Bestellnummer: ' + bestellungen.id[i] + '</h3></td>';
              ordered_table += '</tr>';
              ordered_table += '<tr>';
                ordered_table += '<td class="">Name: ' + bestellungen.name[i] + '</td>';
              ordered_table += '</tr>';
              ordered_table += '<tr>';
                ordered_table += '<td class="">Nachname: ' + bestellungen.nachname[i] + '</td>';
                ordered_table += '<td class="">Mailadresse: ' + bestellungen.mail[i] + '</td>';
              ordered_table += '</tr>';
              ordered_table += '<tr>';
                ordered_table += '<td class="_order">Telefonnummer: 0' + bestellungen.telefonnummer[i] + '</td>';
                ordered_table += '<td class="">Stadt: ' + bestellungen.stadt[i] + '</td>';
              ordered_table += '</tr>';
              ordered_table += '<tr>';
                ordered_table += '<td class="">PLZ: ' + bestellungen.postleitzahl[i] + '</td>';
                ordered_table += '<td class="">Straße: ' + bestellungen.strasse[i] + '</td>' + '</br>';
              ordered_table += '</tr>';
              ordered_table += '<tr>';
                ordered_table += '<td class="">HausNr: ' + bestellungen.hausNr[i] + '</td>';
                ordered_table += '<td class="">PreisGesamt: ' + bestellungen.preisGesamt[i] + '€' + '</td>' + '</br>';
              ordered_table += '</tr>';
              ordered_table += '<tr>';
                ordered_table += '<td class="">' + ' ' + '</td>';
              ordered_table += '</tr>';
              ordered_table += '<tr>';
                ordered_table += '<td class="">' + ' ' + '</td>';
              ordered_table += '</tr>';
            for(var j = 0; j < produkte.id.length ; j++){

              if(produkte.id[j] == bestellungen.id[i]){
                ordered_table += '<tr>'
                  ordered_table += '<td class="ordered_food">Gericht: '+produkte.gericht[j]+'</td>'
                  ordered_table += '<td class="ordered_food">Menge: '+produkte.menge[j]+'</td></br>'
                ordered_table += '</tr>'
              }

            }
            //schreiben der einzelnen Produkte in der Bestellansicht
            ordered_table += '</table>';
              ordered_table += '<form target="display-frame" action="delete_complete.php" method="post">';
                ordered_table += '<input type="submit"  value="Lösche Bestellung Nr: '+bestellungen.id[i]+'"></input>';
                ordered_table += '<input class="hidden" type="text" name="restaurant_name" value="'+restaurant_name.trim()+'">';
                ordered_table += '<input class="hidden" type="text" name="order"value="'+bestellungen.id[i]+'">';
              ordered_table += '</form>';
          }
        }catch{
          ordered_table += "Es sind keine Bestellungen vorhanden."
        }


        document.getElementById('Bestellungen').innerHTML = ordered_table; //ansprechen des Divs in Abfrage.php
      },
      error: function errorLog(xhr, status, error) {//errorhandeling fals daten nicht geladen werden konnten
        console.log('Fehler beim Laden der Daten.', status, error);
      }
    });
  }, 500)
);

//----------- Diese Funktion übergibt die Werte der Auswahl in choice -----------(Max)
function addChoice(value){
    choice.push(value);
}

//----------- Slide-Out functions -----------(Max)
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

//----------- Slide-In functions -----------(Max)
function slideInTyp() {
    var element = document.getElementById("table_typ_select_container");
    element.classList.add("slide_in");
}
function slideInPrice() {
    var element = document.getElementById("table_price_select_container");
    element.classList.add("slide_in");
}

//----------- Slide-Back functions -----------(Max)
function slideBack() { //----------- Slide-Back von Typ zu Food -----------
    var element = document.getElementById("table_typ_select_container");
    element.classList.remove("slide_in");
    element.classList.add("slide_out");

    var element = document.getElementById("table_food_select_container");
    element.classList.remove("slide_out");
    element.classList.add("slide_in_food");

    choice.pop();       //----------- choice-array update -----------

}
function slideBackPrice() { //----------- Slide-Back von Price zu Typ -----------(Max)
    var element = document.getElementById("table_typ_select_container");
    element.classList.remove("slide_out");
    element.classList.add("slide_in");

    var element = document.getElementById("table_price_select_container");
    element.classList.remove("slide_in");
    element.classList.add("slide_out");

    choice.pop();          //----------- choice-array update -----------

}

    //umwandlung der Daten von codierung in String (Max)

    /*                  
                    Burger      Pizza        Sushi    
            Kategorie:      0            1            2    
                            
                            
                        Rind        Hähnchen    Vegan    
            typ:          0            1            2    
                            
                            
                        Günstig   Mittel      Teuer    
            preis:        0            1            2    
                            
                            
                            
                    Kategorie      Typ      Preis        Ergebnis
    Bsp.    1              0            0        0          Burger, Rind, Günstig
    Bsp.    2              2            1        0          Sushi, Hähnchen, Günstig
    Bsp.    3              0            2        0          Burger, Vegan, Günstig
    Bsp.    4              2            2        1          Sushi, Vegan, Mittel
    Bsp.    5              1            1        2          Pizza, Hähnchen, Teuer

    */

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
//----------- Öffnet die Seite "auswahl.html" im selben tab -----------(Max)
function submitChoice() {
    postChoice()
    window.open("auswahl.php", "_self"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------
    window.location.href = "auswahl.php?kategorie=" + kategorie + "&" + "typ=" + typ + "&" + "preis=" + preis;
  }
//Generierung einer zufälligen Auswahl (Max)
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
//Generierung einer zufälligen veganen Auswahl (Max)
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
// skippt die auswahl komplett (Max)
function skipChoice(){

    window.open("auswahl_skip.php", "_self"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------
}
function submit_choice(){

    window.open("index.html", "_blank"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------
}

//checke Cookies und ausgabe des Warenkorbs (Max)
function warenkorbAnzeigenOnload(){
    checkCookie();
    warenkorbAusgeben();
}


//Initalisieren von 3 Funktionen (Ramses)
function init(){
  checkCookie();
  speisekarteAusgeben();
  warenkorbAusgeben();
}

//ausgabe der Speisekate (Ramses)
function speisekarteAusgeben(){
  var speisekarte = '';
for(var i = 1; i < phpData.length; i++){
  speisekarte += '<button class="SpeiseKarteButton"  onclick="zumWarenkorb('+ i + ' , '+ phpData[i]["preis"] + ')">'
    speisekarte += '<div class="speisekarte_article">'
      speisekarte += '<article class="menuedata">'
        speisekarte += '<table class="Test">'
          speisekarte += '<tr>'
            speisekarte += '<th>'
              speisekarte += '<h5 class="food_data_name" id="produkt' + i +'">'+ phpData[i]["name"] + '</h5>'
              speisekarte += '<h6 class="food_data_price" >'+ phpData[i]["preis"] + ' €</h6>'
            speisekarte += '</th>'
          speisekarte += '</tr>'
          speisekarte += '<tr class="tr_class">'
            speisekarte += '<td class="inhalt">'+ phpData[i]["beschreibung"] + '</td>'
          speisekarte += '</tr>'
        speisekarte += '</table>'
      speisekarte += '</article>'
    speisekarte += '</div>'
  speisekarte += '</button>'  
    
}
  document.getElementById('menue').innerHTML = speisekarte

};

//Hinzufügen von Produkten in den Warenkorb(Ramses)
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
//Ausgeben des Warenkorbs in form von <articles> (Ramses) 
function warenkorbAusgeben() {
    warenkorbSum();
var bestelldifferenz = minBestellwert - (warenkorbPreis - lieferkosten)
// Ausgabe von HTML Elementen in dem von der var "ausgabe" Bereich auf einer Webseite(Ramses)
var ausgabe = '<h1>Warenkorb</h1>';
ausgabe += '<article class="warenkorbArtikel">';
  ausgabe += '<table>';
    ausgabe += '<tr>';
    ausgabe += '<td class="warenkorbTabelleZellen">Menge:</td>';
    ausgabe += '<td class="warenkorbTabelledata">Produkt: </td>';
    ausgabe += '<td class="warenkorbTabellePrice">Preis:</td>';
    ausgabe += '<td class="warenkorbTabelleZellen"></td>';
    ausgabe += '</tr>';
  ausgabe += '</table>';
ausgabe += '</article>';

// Erstellt einen Article, welcher eine Tabelle enthält. Diese zeigt die ausgewählten Menge,Produkte und Preise geordnet an(Ramses)
  for (var i = 0; i < warenkorb.produkte.length; i++) {                                                                                                                 
    ausgabe += '<article class="warenkorbArtikel">';                                                                                                                    
        ausgabe += '<table>';                                                                                                                                           
            ausgabe += '<tr>';                                                                                                                                          
                ausgabe += '<td class="warenkorbTabelleZellen">' + warenkorb.menge[i] + 'x </td>';                                                                      
                ausgabe += '<td class="warenkorbTabelledata">' + warenkorb.produkte[i] + ': </td>';                                                                     
                ausgabe += '<td class="warenkorbTabellePrice"> ' + warenkorb.preis[i] + '&#x20AC </td>';                                                                
                ausgabe += '<td class="warenkorbTabelleZellen">';                                                                                                       
                if (document.getElementById('waren') != null){                                                                                                          
                    ausgabe += '<button class="warenkorbButtonLöschen" onclick="loescheProdukt(' + i + ');"><img src="pictures/delete.png" alt="delete"></button>';     
                     }                                                                                                                                                  
                ausgabe += '</td>';                                                                                                                                     
            ausgabe += '</tr>';                                                                                                                                         
        ausgabe += '</table>';                                                                                                                                          
    ausgabe += '</article>';                                                                                                                                            
  }                                                                                                                                                                     
  ausgabe += '<article class="warenkorbArtikel">';                                                                                                                      
    ausgabe += '<table>'                                                                                                                                                
      ausgabe += '<tr>'                                                                                                                                                 
        ausgabe += '<td class="warenkorbTabelleZellen">' + "" + 'x </td>';                                                                                              
        ausgabe += '<td class="warenkorbTabelledata">' + "Lieferkosten" + ': </td>';                                                                                    
        ausgabe += '<td class="warenkorbTabellePrice"> ' + lieferkosten + '&#x20AC </td>';                                                                              
        ausgabe += '<td class="warenkorbTabelleZellen">';                                                                                                               
      ausgabe += '</td>';                                                                                                                                               
    ausgabe += '</table>'                                                                                                                                               
  ausgabe += '</article>';                                                                                                                                              
                                                                                                                                                                        
  ausgabe += '<article class="warenkorbArtikel">';                                                                                                                      
    ausgabe += '<table>';                                                                                                                                               
      ausgabe += '<tr>';                                                                                                                                                
        ausgabe += '<td class="warenkorbTabelleZellen">' + "" + '</td>';                                                                                                
        ausgabe += '<td class="warenkorbTabelledata">' + "Gesamtkosten" + ': </td>';                                                                                    
        ausgabe += '<td class="warenkorbTabellePrice"> ' + warenkorbPreis.toFixed(2) + '&#x20AC </td>';                                                                 
        ausgabe += '<td class="warenkorbTabelleZellen">';                                                                                                               
      ausgabe += '</td>';                                                                                                                                               
    ausgabe += '</table>'                                                                                                                                               
  ausgabe += '</article>';                                                                                                                                              



// Speichert die Werte der einzelnen Produkte in verteckten Inputs (nicht sichtbar), damit diese an die nächste Webseite übergeben werden können(Max / Ramses)___________________________
  for (var i = 0; i < warenkorb.produkte.length; i++) {                                                                                                                 
  ausgabe += '<input class="hidden" name="prodMenge' + i + '" value="' + warenkorb.menge[i] + '">';                                                                     
  ausgabe += '<input class="hidden" name="prodName' + i + '" value="' + warenkorb.produkte[i] + '">';                                                                   
  ausgabe += '<input class="hidden" name="prodPrice' + i + '" value="' + warenkorb.preis[i] + '">';                                                                
  };                                                                                                                                                                    
  ausgabe += '<input class="hidden" name="products' + '" value="' + i + '">';                                                                                           
  ausgabe += '<input class="hidden" name="price' + '" value="' + warenkorbPreis.toFixed(2) +'">';                                                                       
  ausgabe += '<input class="hidden" name="restaurant" value="' + restaurantName + '">';                                                                                 
//Schreiben des HTML codes in waren()
  if (document.getElementById('waren') != null){
    //Berechnen des noch zu fehlenden Betrags bis zum mindest Bestellwertes sowie die Generierung eines Buttons bei erreichen diese (Ramses)
    if(0 < bestelldifferenz){
        ausgabe += '<div class="minBestellwert">'
        ausgabe += 'Es fehlen noch ' + (bestelldifferenz.toFixed(2)) + '&#x20AC für den Mindestbestellwert!';
        ausgabe += '</div>'
      
        }else{
        ausgabe += '<div class="BtnBestellen">'
          ausgabe += '<a id="orderBtnPrice" href="bestellung.html"><input class="warenkorbButtonBestellen" type="button" value="bestellen"></a>';
        ausgabe += '</div>'
        }
    document.getElementById('waren').innerHTML = ausgabe;
  }else{
    document.getElementById('warenZusammenfassung').innerHTML = ausgabe;
  }
  ;

  warenkorbPreis = 0;
}


// Löschen von Produkten aus dem Warenkorb (Ramses)
function loescheProdukt(index) {
  if (warenkorb.menge[index] > 1) {
    warenkorb.menge[index] -= 1;
  } else {
    warenkorb.produkte.splice(index, 1);
    warenkorb.menge.splice(index, 1);
    warenkorb.preis.splice(index, 1);
  }
  cookieSave();
  warenkorbAusgeben();
}

//Zusammenrechnen der Warenkorbsumme (Ramses)
function warenkorbSum(){
  // Schleife durch alle Produkte im Warenkorb
  for (var i = 0; i < warenkorb.produkte.length; i++) {
    // Gesamtpreis berechnen, indem Menge und Preis multipliziert und zur Gesamtsumme hinzugefügt werden
    warenkorbPreis += warenkorb.menge[i] * warenkorb.preis[i];
  }
  warenkorbPreis += Number(lieferkosten);
}

// Der check ob ein Cookie existiert und das Extrahieren seiner daten  (Ramses)
function checkCookie() {

  if(document.cookie){
      const decodedCookie = decodeURIComponent(document.cookie); // entfernen der Cookieinformationen 
      const cuttedString = decodedCookie.split('Warenkorb=').pop().split(';')[0]; //Inhalt unseres Cookies vom Namen Restaurant und von Weiteren Cookies Trennen
      const cuttedStringWithoutSpaces = cuttedString.trim(); //Lehrzeichen entfernen
      const cookieData = cuttedStringWithoutSpaces.split("+").filter(data => data !== ""); //Einzelne Cookieinformationen Trennen und leere Felder Löschen
      restaurantName = cookieData[0];
      lieferkosten = cookieData[1];
      minBestellwert = cookieData[2];

    try{ //in diesen fall haben wir Try and catch benutzt um die seiten zu differenzieren (We know nicht die cleanste Lösung)
      if(restaurantName == restaurantPost){
        // Schreiben der gespeicherten Informationen in den Warenkorb
        for (let i = 3; i < cookieData.length; i += 3) {
          warenkorb.produkte.push(cookieData[i]);
          warenkorb.menge.push(Number(cookieData[i + 1]));
          warenkorb.preis.push(Number(cookieData[i + 2]));
          cookieSave();
          warenkorbAusgeben();
        }
      }else{
        if(confirm("Möchtest du zu deinem Aktuellen Warenkorb zurückkehren?")){
          window.open("order.php", "_self"); //----------- 1. Wert ist das ziel, 2. Wert ist der Ort------- um ein neuen Tab zu öffnen, wir nicht "_self" sondern "_blank" benutzt-----------
          window.location.href = "order.php?restaurant=" + restaurantName + "&" + "lieferkosten=" + lieferkosten + "&" + "minBestellwert=" + minBestellwert;
        }else{
          cookieSave();
          checkCookie();
        }
      }
    }catch(err){//Dies wird nur auf abgesendet.php getriggert 
      for (let i = 3; i < cookieData.length; i += 3) {
        warenkorb.produkte.push(cookieData[i]);
        warenkorb.menge.push(Number(cookieData[i + 1]));
        warenkorb.preis.push(Number(cookieData[i + 2]));
        warenkorbAusgeben();
      }
    }
  }else{
    cookieSave();
    checkCookie();
    warenkorbAusgeben();
  }
}

//Cookie mit den Warenkorbinformationen speichern (Ramses)
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


/// Umfragefunktion (Lukas)
function submitSurvey() {
  const question1 = document.querySelector('input[name="question1"]:checked').value;
  const question2 = document.querySelector('input[name="question2"]:checked').value;
  const question3 = document.getElementById('question3').value;
  
  const formData = {
    question1: question1,
    question2: question2,
    question3: question3
  }
.then(response => response.json())
  .then(result => {
      console.log('Umfrage erfolgreich eingereicht:', result);

  })
  .catch(error => {
      console.error('Fehler beim Einreichen der Umfrage:', error);
  });

};






