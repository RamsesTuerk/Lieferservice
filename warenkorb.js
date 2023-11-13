// Dieser Code wird dazu verwendet, einen Warenkorb funktional darzustellen.
var warenkorbPreis = 0;
var warenkorb = {
  produkte: [],  // Array für die Namen der Produkte im Warenkorb
  menge: [],     // Array für die Menge jedes Produkts im Warenkorb
  preis: []      // Array für den Preis jedes Produkts im Warenkorb
};
var cookieStr = '';
var expireTime = new Date();
expireTime = new Date(a.getTime() +1000*60*60*24);

function init(){
  checkCookie();
  warenkorbAusgeben();
}

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

function warenkorbAusgeben() {
  warenkorbSum();  // Warenkorb-Gesamtpreis berechnen
  var ausgabe = '<h1>Warenkorb</h1> <article class="warenkorbArtikel"><table><tr><td class="warenkorbTabelleZellen">Menge:</td><td class="warenkorbTabelleItem">Produkt: </td><td class="warenkorbTabellePrice">Preis:</td><td class="warenkorbTabelleZellen"></td></tr></table></article>';

  for (var i = 0; i < warenkorb.produkte.length; i++) {
    ausgabe += '<article class="warenkorbArtikel">';
    ausgabe += '<table><tr><td class="warenkorbTabelleZellen">' + warenkorb.menge[i] + 'x </td><td class="warenkorbTabelleItem">' + warenkorb.produkte[i] + ': </td><td class="warenkorbTabellePrice"> ' + (warenkorb.preis[i] / 100) + '&#x20AC </td><td class="warenkorbTabelleZellen">';
    ausgabe += '<button class="warenkorbButtonLöschen" onclick="loescheProdukt(' + i + ');"><img src="pictures/delete.png" alt="delete"></button></td></tr></table>';
    ausgabe += '</article>';
  }



  ausgabe += '<a href="bestellübersicht.html"><input class="warenkorbButtonBestellen" type="button" value="f&#252;r ' + (warenkorbPreis / 100) + '&#x20AC bestellen"></a>';

  document.getElementById('waren').innerHTML = ausgabe;

  warenkorbPreis = 0;
}

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

function checkCookie(){

  if (document.cookie){

    var test = decodeURIComponent(document.cookie);
    var array = test.split("=");
    var test2 = array[1];
    var array2 = test2.split(",");

    for (var i = 0; i <= array2.length; i +=3){

      warenkorb.produkte.push(array2[i]);
      warenkorb.menge.push(array2[i+1]);
      warenkorb.preis.push(array2[i+2]);
    }

    warenkorbAusgeben();

  }else{

    cookieSave();
  }

}

function cookieSave(){


  for(var i = 0; i < warenkorb.produkte.length; i++) {
    cookieStr += warenkorb.produkte[i]+',';
    cookieStr += warenkorb.menge[i]+',';
    cookieStr += warenkorb.preis[i]+',';
  }

  cookieStr.slice(0, -1);
  document.cookie = 'Warenkorb='+cookieStr+'; expires='+expireTime+';';
  cookieStr = '';
}

function warenkorbSum(){
  // Schleife durch alle Produkte im Warenkorb
  for (var i = 0; i < warenkorb.produkte.length; i++) {
    // Gesamtpreis berechnen, indem Menge und Preis multipliziert und zur Gesamtsumme hinzugefügt werden
    warenkorbPreis += warenkorb.menge[i] * warenkorb.preis[i];
  }
}



