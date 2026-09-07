import promptSync from "prompt-sync";
const prompt = promptSync();

let tamanho = Number(prompt("Digite o tamanho do lado: "));

for (let linha = 1; linha <= tamanho; linha++) {
    let resultado = "";

    for (let coluna = 1; coluna <= tamanho; coluna++) {
        resultado = resultado + "* ";
    }

    console.log(resultado);
}