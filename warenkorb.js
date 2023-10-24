//Dieser Code wird dazu verwendet einen Warenkorb funktionstechnisch Darzustellen 
var warenkorb = [];

function zumWarenkorb(nr) {
    var produkt = document.getElementById('produkt' + nr).innerHTML;
    warenkorb.push(produkt);
    warenkorbAusgeben();
}

function warenkorbAusgeben() {
    var ausgabe = '';
        for (var i = 0; i < warenkorb.length; ++i) {
            warenkorb.sort();
            ausgabe += '<li id="nr' + i + '">';
            ausgabe += warenkorb[i];
            ausgabe += '<input type="button" value="X" id="loeschen" onclick="loescheNr(' + i + ');" />';
            ausgabe += '</li>';
    }
    document.getElementById('waren').innerHTML = ausgabe;
}

function loescheNr(id) {
    warenkorb.splice(id, 1);
    warenkorbAusgeben();
}