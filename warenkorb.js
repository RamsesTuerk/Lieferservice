//Dieser Code wird dazu verwendet einen Warenkorb funktionstechnisch Darzustellen 
var warenkorb;
var preis;
var warenkorbPreis = 0;
var warenkorbProdukte = [];
var warenkorbMenge = [];
var produktPreis = [];
var ausgabe = '';

function zumWarenkorb(nr, pr) {
    warenkorb = document.getElementById('produkt' + nr).innerHTML;
    preis = pr
    warenkorbAusgeben();
}



function warenkorbAusgeben() {
    var isInWarenkorbProdukte = (element) => element == warenkorb;
    var index = warenkorbProdukte.findIndex(isInWarenkorbProdukte);

    if(index == -1){
        warenkorbProdukte.push(warenkorb);
        warenkorbMenge.push(1);
        produktPreis.push(preis);     
    }else{
        warenkorbMenge[index] += 1;
    }

    warenkorbSum()
    console.log(warenkorbProdukte);
    console.log(warenkorbMenge);
    console.log(produktPreis);
    console.log(warenkorbPreis);
    warenkorbPreis = 0;
   
      // for (var j = 0; j < warenkorbProdukte.length; ++j) {
        //    ausgabe += '<li id="nr' + j + '">';
          //  ausgabe += warenkorbProdukte[j]  + warenkorbMenge[j];
            //ausgabe += '<input type="button" value="X" id="loeschen" onclick="loescheNr(' + j + ');" />';
            //ausgabe += '</li>';
   // }

   // document.getElementById('waren').innerHTML = ausgabe;
}

function warenkorbSum(){
  for (var i = 0; i < warenkorbMenge.length;++i){
    warenkorbPreis += warenkorbMenge[i] * produktPreis[i] 
  }
}


//function loescheNr(id) {
//    warenkorb.splice(id, 1);
//    warenkorbAusgeben();
//}

