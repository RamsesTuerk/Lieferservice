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
  cookieSave();
  warenkorbAusgeben();
}

function speisekarteAusgeben(){
  var speisekarte = '';
  console.log(phpData[1]["COL 2"])


for(var i = 1; i < phpData.length; i++){
  speisekarte += '<article class="menueItem"><table class="Test"><tr><td><h1 id="produkt' + i +'">'+ phpData[i]["COL 2"] + '</h1></td></tr><tr><td class="produktBeschreibung">'+ phpData[i]["COL 3"] + '</td><td><input class="warenkorbButtonBestellen" id ="button' + i +'" type="button" value="'+ phpData[i]["COL 4"] +'&#x20AC" onclick="zumWarenkorb('+ i + ' , '+ phpData[i]["COL 4"] + ')"/></td></tr></table></article>'
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

//Ausgeben des Warenkorbs in form von <artikels> 
function warenkorbAusgeben() {
  warenkorbSum();  // Warenkorb-Gesamtpreis berechnen
  var ausgabe = '<h1>Warenkorb</h1> <article class="warenkorbArtikel"><table><tr><td class="warenkorbTabelleZellen">Menge:</td><td class="warenkorbTabelleItem">Produkt: </td><td class="warenkorbTabellePrice">Preis:</td><td class="warenkorbTabelleZellen"></td></tr></table></article>';

  for (var i = 0; i < warenkorb.produkte.length; i++) {
    ausgabe += '<article class="warenkorbArtikel">';
    ausgabe += '<table><tr><td class="warenkorbTabelleZellen">' + warenkorb.menge[i] + 'x </td><td class="warenkorbTabelleItem">' + warenkorb.produkte[i] + ': </td><td class="warenkorbTabellePrice"> ' + warenkorb.preis[i] + '&#x20AC </td><td class="warenkorbTabelleZellen">';
    ausgabe += '<button class="warenkorbButtonLöschen" onclick="loescheProdukt(' + i + ');"><img src="pictures/delete.png" alt="delete"></button></td></tr></table>';
    ausgabe += '</article>';
  }

  ausgabe += '<a href="bestellung.html"><input class="warenkorbButtonBestellen" type="button" value="f&#252;r ' + warenkorbPreis.toFixed(2) + '&#x20AC bestellen"></a>';

  document.getElementById('waren').innerHTML = ausgabe;

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

  if(document.cookie){
      const decodedCookie = decodeURIComponent(document.cookie); // entfernen der Cookieinformationen 
      const cuttedString = decodedCookie.split('Warenkorb=').pop().split(';')[0]; //Inhalt unseres Cookies vom Namen und von Weiteren Cookies Trennen
      const cuttedStringWithoutSpaces = cuttedString.trim(); //Lehrzeichen entfernen
      const array2 = cuttedStringWithoutSpaces.split("+").filter(item => item !== ""); //Einzelne Cookieinformationen Trennen und leere Felder Löschen 

      console.log("test" + array2[0])
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
    cookieStr += warenkorb.produkte[i]+'+';
    cookieStr += warenkorb.menge[i]+'+';
    cookieStr += warenkorb.preis[i]+'+';
  }
  //Cookie Speichern
  document.cookie = 'Warenkorb='+cookieStr+'; expires='+expireTime+';';
  cookieStr = ''; //Leeren des CookieStings
}

//DARKMODE//
function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");}



