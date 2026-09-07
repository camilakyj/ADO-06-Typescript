import promptSync from "prompt-sync";
const prompt = promptSync();

let quantidade = Number(prompt("Digite a quantidade de pontos: "));

let linha = "";

for (let i = 1; i <= quantidade; i++) {
    linha = linha + "*";
}

console.log(linha);