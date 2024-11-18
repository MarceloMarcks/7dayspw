let tentativa = null;
// Constantes com valores mínimo e máximo
const min = 0;
const max = 20;

// Constante valor recebe número aleatório através do Math.random
const valor = Math.floor(Math.random() * (max + 1 - min) + min);

// Loop de tentativas
for (let numTentativa = 1; numTentativa < 4 && tentativa != valor; numTentativa++) {
    tentativa = prompt(Jogo da Adivinhação!! Digite um número de ${min} a ${max}. Tentativa ${numTentativa} de 3.);
    if (tentativa == valor) {
        alert('Parabéns, você acertou!!!');
        numTentativa = 3; // Para sair do loop
    } else if (numTentativa === 3 && tentativa != valor) {
        alert(Game Over! O número correto era ${valor}.);
    }
}