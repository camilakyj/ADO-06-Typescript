import promptSync from "prompt-sync";
const prompt = promptSync();

let altura = Number(prompt("Digite a altura: "));

for (let linha = 1; linha <= altura; linha++) {
    let resultado = "";

    for (let coluna = 1; coluna <= linha; coluna++) {
        resultado = resultado + "* ";
    }

    console.log(resultado);
}