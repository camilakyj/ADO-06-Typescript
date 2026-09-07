import promptSync from "prompt-sync";
const prompt = promptSync();

let frase = prompt("Digite uma frase: ");

for (let i = 0; i < frase.length; i++) {
    console.log(frase[i]);
}