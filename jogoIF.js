/*O programa será uma tentativa de fuga de um presídio.

 */

const prompt = require("prompt-sync")();

let jogo = true;

let inicio = prompt("Deseja iniciar o jogo? ");

if (inicio == "sim") {
  var player = {
    nome: prompt("Digite o nome do seu personagem: "),
    vida: 100,
    habilidadeEspecial: false,
    escolhaFuga: false,
    falhaNaFuga: function () {
      return (this.vida = 0);
    },
    perdaDeVida: function () {
      return (this.vida = this.vida - 20);
    },
  };
} else {
  console.log("Ok, tente novamente depois.");
}

console.log(
  "Você está em uma cela em um presídio, seu objetivo é sair da prisão."
);

// inicia funções
function esbarrarGuarda(probabilidade) {
  probabilidade = Math.floor(Math.random() * 3);
  return probabilidade;
}

function confereSePassouPeloGuarda(Esbarrar) {
  if (Esbarrar == 0) {
    player.falhaNaFuga();
    console.log("O guarde te viu e te deteve, você falhou.");
    inicio = prompt("Deseja jogar novamente?");
  } else {
    console.log("Muito bem, você conseguiu.");
    inicio = "fase03";
  }
}

//termina funções

while (jogo == true) {
  while (inicio == "sim") {
    console.log(
      "Só há uma forma de escapar do presídio, durante o jogo algumas perguntas serão feitas, você acertando, as dicas serão liberadas."
    );
    const personagemPrison = prompt(
      "Qual o nome do personagem principal da série: Prison Break?"
    ).toLowerCase();
    if (personagemPrison == "michael") {
      console.log(
        "Você acertou. Dica: O único caminho para para fugir do presídio é pela enfermaria!"
      );
      inicio = "proximaFase";
    } else {
      inicio = prompt("Você não acertou, deseja tentar novamente?");
    }
  }

  while (inicio == "proximaFase") {
    let escolha;
    console.log(
      "Agora que você sabe que o único caminho é pela enfermaria, acertando a próxima questão, será liberado duas opções para chegar até a enfermaria."
    );
    const anoSonho = prompt(
      "Em qual ano foi lançado o filme: Um sonho de Liberdade?"
    );
    if (anoSonho == 1995) {
      console.log(
        "Muito bem,você acertou! Você pode tentar chegar a enfermaria fingindo estar doente (escolha 1), ou pode tentar escondido durante o banho de sol (escolha 0)"
      );
      console.log();
      escolha = prompt("Escolha 01 ou 02 para prosseguir.");
    } else {
      inicio = prompt("você errou, deseja reiniciar o jogo?");

    }

    if (escolha == 1) {
      console.log(
        "Para prosseguir para a enfermaria e passar um grande tempo lá, você terá que se machucar, isso vai resultar na perda de 20 de sua vida."
      );
      player.perdaDeVida();
      inicio = "fase02";

    } else if (escolha == 2) {
      let parametro;
      let resultadoEsbarrar = esbarrarGuarda(parametro);
      confereSePassouPeloGuarda(resultadoEsbarrar);
    }

    console.log(player.vida);
  }
}

while (inicio = "fase02"){
  
}
