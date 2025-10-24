function calcola(){
  var p = parseFloat(document.getElementById('prob').value);
  var f = parseFloat(document.getElementById('freq').value);
  var g = parseFloat(document.getElementById('grav').value);

  if(isNaN(p) || isNaN(f) || isNaN(g)){
    document.getElementById('risultato').innerText = "⚠️ Inserire tutti i valori.";
    return;
  }

  var r = p * f * g;
  let livello = "";
  let classe = "";

  if(r <= 20){ livello = "Basso"; classe = "basso"; }
  else if(r <= 50){ livello = "Medio"; classe = "medio"; }
  else if(r <= 80){ livello = "Alto"; classe = "alto"; }
  else { livello = "Molto alto"; classe = "molto-alto"; }

  document.getElementById('risultato').innerHTML =
    "Fattore di rischio: <strong>" + r + "</strong> – Livello: <strong class='" + classe + "'>" + livello + "</strong>";
}
