//Dieser Code wird dazu verwendet einen Warenkorb funktionstechnisch Darzustellen 
var warenkorb;
var warenkorbProdukte = [];
var warenkorbMenge = [];
var ausgabe = '';

function zumWarenkorb(nr) {
    var produkt = document.getElementById('produkt' + nr).innerHTML;
    warenkorb = produkt;
    warenkorbAusgeben();
}



function warenkorbAusgeben() {

   
    var isInWarenkorbProdukte = (element) => element == warenkorb;
    var index = warenkorbProdukte.findIndex(isInWarenkorbProdukte);

    if(index == -1){
        warenkorbProdukte.push(warenkorb);
        warenkorbMenge.push(1);     
    }else{
        warenkorbMenge[index] += 1;
    }

    console.log(warenkorbProdukte);
    console.log(warenkorbMenge);
   
      // for (var j = 0; j < warenkorbProdukte.length; ++j) {
        //    ausgabe += '<li id="nr' + j + '">';
          //  ausgabe += warenkorbProdukte[j]  + warenkorbMenge[j];
            //ausgabe += '<input type="button" value="X" id="loeschen" onclick="loescheNr(' + j + ');" />';
            //ausgabe += '</li>';
   // }
    document.getElementById('waren').innerHTML = ausgabe;
}

function loescheNr(id) {
    warenkorb.splice(id, 1);
    warenkorbAusgeben();
}

