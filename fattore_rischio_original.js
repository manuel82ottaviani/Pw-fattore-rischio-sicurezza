function calcola(){
  var p = parseFloat(document.getElementById('prob').value);
  var f = parseFloat(document.getElementById('freq').value);
  var g = parseFloat(document.getElementById('grav').value);
  var r = p * f * g;
  document.getElementById('risultato').innerText = "Fattore di rischio: " + r;
}
