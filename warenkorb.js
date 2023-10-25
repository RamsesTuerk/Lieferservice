warenkorb = [];

function zumWarenkorb(nr, pr) {
  var produktName = document.getElementById('produkt' + nr).innerHTML;
  var preis = pr;

  // Sucht nach dem Produkt im Warenkorb
  var existingProduct = warenkorb.find(item => item.name === produktName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    warenkorb.push({ name: produktName, price: preis, quantity: 1 });
  }

  warenkorbAusgeben();
}

function warenkorbAusgeben() {
  var ausgabe = '';

  warenkorbSum();
  
  for (var i = 0; i < warenkorb.length; i++) {
    var item = warenkorb[i];
    ausgabe += '<li>';
    ausgabe += item.quantity + "x " + item.name + ": " + (item.price / 100) + "€ ";
    ausgabe += '<input type="button" value="X" onclick="loescheProdukt(' + i + ');" />';
    ausgabe += '</li><br>';
  }

  ausgabe += (warenkorbPreis / 100) + "€"

  document.getElementById('waren').innerHTML = ausgabe;
}

function warenkorbSum() {
  warenkorbPreis = warenkorb.reduce((total, item) => total + item.quantity * item.price, 0);
}

function loescheProdukt(index) {
  var item = warenkorb[index];

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    warenkorb.splice(index, 1);
  }

  warenkorbAusgeben();
}
