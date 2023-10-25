//Dieser Code wird dazu verwendet einen Warenkorb funktionstechnisch Darzustellen 
var warenkorbPreis = 0;
var warenkorb = {
  produkte: [],
  menge: [],
  preis: []
};

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

  warenkorbAusgeben();
}

function warenkorbAusgeben() {

    warenkorbSum()
    var ausgabe = '';

    for (var i = 0; i < warenkorb.produkte.length; i++) {
        ausgabe += '<li>';
        ausgabe += warenkorb.menge[i] + "x " + warenkorb.produkte[i] + ": " + (warenkorb.preis[i] / 100) + "€ ";
        ausgabe += '<input type="button" value="X" onclick="loescheProdukt(' + i + ');" />';
        ausgabe += '</li><br>';
    }

    ausgabe += (warenkorbPreis / 100) + "€"

    document.getElementById('waren').innerHTML = ausgabe;

    console.log(warenkorb.produkte);
    console.log(warenkorb.menge);
    console.log(warenkorb.preis);
    console.log(warenkorbPreis);
}

function warenkorbSum(){
  warenkorbPreis = 0;

  for (var i = 0; i < warenkorb.produkte.length; i++) {
       warenkorbPreis += warenkorb.menge[i] * warenkorb.preis[i];
  }
}

function loescheProdukt(index){
  
  if(warenkorb.menge[index] > 1){
    warenkorb.menge[index] -= 1;
  }else{
    warenkorb.produkte.splice(index, 1);
    warenkorb.menge.splice(index, 1);
    warenkorb.preis.splice(index, 1);
  }
    warenkorbAusgeben();
}



