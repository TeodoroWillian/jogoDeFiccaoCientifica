var escolheuEsperar = "noite";

var tempo = ["manhã", "tarde", "noite"];
for (let i = 0; i < tempo.length; i++) {
  if (escolheuEsperar == tempo[i]) {
    console.log("A noite Chegou!");
  } else {
    console.log("Ainda não é noite!");
  }
}
