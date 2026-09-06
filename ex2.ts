import promptSync from "prompt-sync";
const prompt = promptSync();

let numero = Number(prompt("Digite um número: "));

for (let i = numero; i >= 1; i--) {
    console.log(i);
}