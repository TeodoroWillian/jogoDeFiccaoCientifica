const prompt = require("prompt-sync")();

var inicio = "proximaFase04";
var tempo = 4;

while (inicio == "proximaFase04") {
  console.log("Você chegou a enfermaria.");
  for (let i = 0; i < tempo == 8; i++) {
    esperaAnoitecer = prompt(
      "Deseja esperar anoitecer? para iniciar a fuga?"
    ).toLocaleLowerCase();
    if (esperaAnoitecer == "sim") {
      tempo = tempo++;
    } else {
      break;
    }
    if (tempo == 8) {
      break;
    }
  }
  console.log(tempo);
}
