import promptSync from "prompt-sync";
const prompt = promptSync();

let frase = prompt("Digite uma frase: ");

let contador = 0;

for (let i = 0; i < frase.length; i++) {

    if (frase[i] == " ") {
        console.log("Espaço");
    } else {
        contador++;
        console.log(contador + " - " + frase[i]);
    }
}