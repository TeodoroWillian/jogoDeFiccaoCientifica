const prompt = require("prompt-sync")();

let player = {
  nome: prompt("Digite o nome do seu personagem: "),
  vida: 100,
  habilidadeEspecial: false,
  escolhaFuga: false,
  falhaNaFuga: function () {
    return (this.vida = 0);
  },
  perdaDeVida: function () {
    return (this.vida = this.vida - 10);
  },
};

player.perdaDeVida();
console.log(player.vida);
