import promptSync from "prompt-sync";
const prompt = promptSync();

let numero = Number(prompt("Digite um número: "));

for (let i = 1; i <= numero; i++) {
    console.log(i);
}