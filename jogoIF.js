/*O programa será uma tentativa de fuga de um presídio.

 */

const prompt = require("prompt-sync")();

let jogo = true;
var tempo = "manhã";
var tempoPeriodo = ["manhã", "tarde", "noite"];

var inicio = prompt("Deseja iniciar o jogo? ");

if (inicio == "sim") {
  var player = {
    nome: prompt("Digite o nome do seu personagem: "),
    vida: 100,
    falhaNaFuga: function () {
      this.vida = 0;
    },
    perdaDeVida: function () {
      this.vida = this.vida - 50;
    },
    verificaSeTemVida: function () {
      if (this.vida == 0) {
        console.log("Você morreu!");
      }
    },
  };
} else {
  console.log("Ok, tente novamente depois.");
  jogo = false;
}

function esbarrarGuarda(probabilidade) {
  probabilidade = Math.floor(Math.random() * 3);
  return probabilidade;
}

// inicia a primeira fase do jogo
while (jogo == true) {
  console.log(
    "Você está em uma cela em um presídio, seu objetivo é sair da prisão."
  );
  while (inicio == "sim") {
    console.log(
      "Só há uma forma de escapar do presídio, durante o jogo algumas perguntas serão feitas, você acertando, as dicas serão liberadas."
    );
    const personagemPrison = prompt(
      "Qual o nome do personagem principal da série: Prison Break? "
    ).toLowerCase();
    if (personagemPrison == "michael") {
      console.log(
        "Você acertou. Dica: O único caminho para para fugir do presídio é pela enfermaria!"
      );
      inicio = "proximaFase";
    } else {
      inicio = prompt("Você não acertou, deseja tentar novamente? ");
      tempo = "manhã";
    }
  }
  while (inicio == "proximaFase") {
    console.log(
      "Agora que você sabe que o único caminho é pela enfermaria, acertando a próxima questão, será liberado duas opções para chegar até a enfermaria."
    );
    console.log();
    const anoSonho = prompt(
      "Em qual ano foi lançado o filme: Um sonho de Liberdade ? "
    );
    console.log();
    if (anoSonho == 1995) {
      console.log(
        "Muito bem,você acertou! Você pode tentar chegar a enfermaria fingindo estar doente (escolha 1), ou pode tentar escondido durante o banho de sol (escolha 0)"
      );

      inicio = "proximaFase02";
      console.log();
    } else {
      inicio = prompt("você errou, deseja jogar novamente ?");
      tempo = "manhã";
    }
  }

  while (inicio == "proximaFase02") {
    var escolhaFase02 = prompt(
      "escolha 1 para fingir estar doente ou 1 para entrar na enfermaria durante o banho de sol"
    );

    if (escolhaFase02 == 1) {
      console.log(
        "Você cometeu um ferimento a si mesmo para entrar na enfermaria, este movimento irá custa -50 de vida"
      );
      player.perdaDeVida();
      inicio = "proximaFase03";
    } else if (escolhaFase02 == 2) {
      var esbarrou = esbarrarGuarda(esbarrou);
      console.log(esbarrou);
    }
    if (esbarrou == 0) {
      player.falhaNaFuga();
      inicio = prompt("O guarde te viu, você perdeu, deseja continuar? ");
      tempo = "manhã";
    } else if (esbarrou != 0) {
      console.log("Muito bem, você passou pelo guarda.");
      inicio = "proximaFase03";
      tempo = "manhã";
    }
  }
  while (inicio == "proximaFase03") {
    console.log(
      "Parabéns, você passou mais uma fase, para seguir adiante e poder escolher opções para seguir em frente, você terá que acerta a próxima questão"
    );
    var escolhaFase04 = prompt(
      "Qual o nome do irmão do Michael em Prison Break?"
    );
    if (escolhaFase04 == "lincoln") {
      console.log("Parabéns, você acertou.");
      inicio = "proximaFase04";
      tempo = "tarde";
    } else {
      inicio = prompt("Você errou, deseja jogar novamente? ");
      tempo = "manhã";
    }
  }

  while (inicio == "proximaFase04") {
    console.log("Você chegou a enfermaria.");
    var desejaEsperar = prompt(
      "Você pode esperar escurer para fugir (escolha 1), ou pode fugir agora(escolha2)"
    );
    if (desejaEsperar == 1) {
      var escolheuEsperar = "noite";
      for (let i = 0; i < tempoPeriodo.length; i++) {
        if (tempo == tempoPeriodo[i]) {
          tempo = 1;
        }
      }
      for (let i = tempo; i < tempoPeriodo.length; i++) {
        if (escolheuEsperar == tempoPeriodo[i]) {
          console.log("A noite Chegou!");
          break;
        } else {
          console.log("Ainda não é noite!");
        }
      }
      console.log();
    } else if (desejaEsperar == 2) {
      player.perdaDeVida();
      player.verificaSeTemVida();
    }
    console.log(player.vida);
    if (player.vida == 0) {
      inicio = prompt("Você morreu, deseja iniciar novamente? ");
    } else if (player.vida != 0) {
      console.log("Parabéns, você escapou!");
      inicio = prompt("Parabéns você escapou, deseja jogar novamente? ");
    }
  }
}


/* RESPOSTA CORRETAS:

PERSONAGEM PRINCIPAL DE PRISION BREAK: MICHAEL;
ANO DE LANÇAMENTO UM SONHO DE LIBERDADE: 1995;
IRMÃO DO MICHAEL: LINCOLN;



*/