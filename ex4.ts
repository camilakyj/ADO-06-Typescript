import promptSync from "prompt-sync";
const prompt = promptSync();

let fim = Number(prompt("Digite o número de fim: "));
let inicio = Number(prompt("Digite o número de início: "));

for (let i = fim; i >= inicio; i--) {
    console.log(i);
}