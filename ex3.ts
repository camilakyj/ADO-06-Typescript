import promptSync from "prompt-sync";
const prompt = promptSync();

let inicio = Number(prompt("Digite o número de início: "));
let fim = Number(prompt("Digite o número de fim: "));

for (let i = inicio; i <= fim; i++) {
    console.log(i);
}