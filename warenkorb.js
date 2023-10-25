//Dieser Code wird dazu verwendet einen Warenkorb funktionstechnisch Darzustellen 
var warenkorb = {
  produkte: [],
  menge: [],
  preis: []
};
var warenkorbPreis = 0;

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



