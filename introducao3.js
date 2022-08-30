// 01

// Crie uma função que receba dois números como parâmetro, 
// retorne a soma dos valores, em seguida execute a função mostrando na tela o seguinte texto: 'A soma dos valores é ${(resultado)}'.

function somarValores(n1,n2) {

    let total=0;
    total=n1+n2
    return (total)
   
}

alert(`a soma dos valores é: ${somarValores(11,22)}`)

// 02

// Crie uma função que receba um array de números (crie uma segunda função para validar os dados dentro do array) 
// e depois calcule a soma de  todos os valores dentro do array. Execute a função mostrando na tela o seguinte texto: 
// 'A soma dos valores do array é ${(resultado)}'.

function Somar(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 2) {
            total += array[i];
        }
    }
    return total;
}
var array = [0, 5, 1, 2];
alert(`A soma dos valores do array é: ${Somar(array)}`);

// 03

// Crie uma função que receba duas strings como parâmetro, primeiro nome e segundo nome, em seguida retorne o nome completo do indivíduo.

let nome="Luiz "
let segundoNome="Roberto"
var array3 = nome.concat(segundoNome);


alert(`O nome e o segundo nomes são: ${array3}`)

// 04

// Crie uma função que receba um string como parâmetro  e execute um "windows.prompt" com o texto recebido como parâmetro, e em seguida retorne o valor que o usuário digitou.

// 05

// Crie uma função que receba um array de números (Valide os dados dentro do array, reaproveite a função criada no exercício 1) 
// e depois calcule a média de todos os valores dentro do array. Execute a função mostrando na tela o seguinte texto:
// 'A média dos valores do array é ${(resultado)}'.

/** function SomarArray(notas) {
    var totalNotas = 0;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i] >= notas.length) {
            totalNotas += notas[i];
        }
    }
    return totalNotas;
}
var notas = [0, 5, 1, 2];
const media = (totalNotas / 4);
alert(`A média dos valores do array é: ${SomarArray(media)}`);
**/

// 06

/** 
 Neste exercício, temos um array composto de letras repetidas e uma letra isolada. Por exemplo, temos um array chamado vetor:
let vetor = ["a", "b", "a", "a", "c", "b"]
Aqui, temos:
 vetor[0] = "a"; 
 vetor[1] = "b";
 vetor[2] = "a";
 vetor[3] = "a";
 vetor[4] = "c";
 vetor[5] = "b";
Sabemos que a única letra que não possui repetição está na posição [4], elemento “c”. Então, crie uma função que retornar este elemento.
 */


