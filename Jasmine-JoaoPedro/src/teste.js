 // TESTE.JS AQUI VAMOS COLOCAR O CÓDIGO FONTE

//  function inteiro(inteiro){
//     return inteiro ; //Essa é a solução mais simplres para o erro
//  }

// fizz buzz 
// function jogo(numero){

// if(numero %3 == 0) {
//     return "Fizz"
// }
// if (numero %5 == 0){
//     return "Buzz"
// }

//     return numero
// }

// const aluno = (nota, media) => {
//     let resultado;
//     let desempenho = 3;
//     if(desempenho >= 7){
//         resultado = "Aprovado"
//     } else {
//         resultado = "Reprovado"
//     }
//     return resultado;
// }

// class Pessoa {
//     constructor(_Nome, _Sobrenome, _Idade){

//         let nome = _Nome;
//         let sobrenome = _Sobrenome;
//         let idade = _Idade;

//     this.nome = () => {
//         return nome
//     }
//     this.nome_completo = () => {
//         return nome + ' ' + sobrenome
//     }
//     this.nome_tudo = () => {
//         return nome + ' ' + sobrenome + ' tem a idade de ' + idade;
//     }
// }}

//Ex.1
function multiplicacao(resultado){
    return resultado
}

//Ex.2
function divisao (X,Y){
    let resultado = X / Y;

    if (Y == 0){
        return "Não é possivel dividir por 0"
    } 
        return resultado
}

//Ex.3
function conversao(C, F){
    let CF = (F - 32) / 1.8;
    let FC = C + (32 * 1.8);

if (CF == 0) {
    return CF
}
if (FC == 32){
    return FC
}

    return CF, FC
}

//Ex.4
function calcularMedia(num1, num2, num3){
    let media = (num1 + num2 + num3) / 3;
    return media
}

//Ex.5
function contarCaracteres(texto){
    let quant = texto.length;
    return quant
}

//Ex.6
function calculadora(X, Y, sinal){
    let operacao = sinal;

    if (operacao == "+") {
        resultado = X + Y;
    } else if (operacao == "-") {
        resultado = X - Y
    } else if (operacao == "*") {
        resultado = X * Y
    } else if (operacao == "/") {
        resultado = X / Y
    }

    return resultado
}