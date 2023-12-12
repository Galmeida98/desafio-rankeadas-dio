var vitorias = prompt("Digite o número de vitórias: ");
var derrotas = prompt("Digite o número de derrotas: ");

function partidas(vitorias, derrotas){
    return vitorias - derrotas;      
}
let saldo = partidas(vitorias,derrotas);

if(saldo <= 10){
    console.log("O Herói tem o saldo de: " + saldo + " e está no nível: " + "Ferro");
} else if(saldo >= 11 && saldo <= 20){
    console.log("O Herói tem o saldo de: " + saldo + " e está no nível: " + "Bronze");
} else if(saldo >= 21 && saldo <= 50){
    console.log("O Herói tem o saldo de: " + saldo + " e está no nível: " + "Prata");
} else if(saldo >= 51 && saldo <= 80){
    console.log("O Herói tem o saldo de: " + saldo + " e está no nível: " + "Ouro");
} else if(saldo >= 81 && saldo <= 90){
    console.log("O Herói tem o saldo de: " + saldo + " e está no nível: " + "Diamante");
} else if(saldo >= 91 && saldo <= 100){
    console.log("O Herói tem o saldo de: " + saldo + " e está no nível: " + "Lendário");
} else{
    console.log("O Herói tem o saldo de: " + saldo + " e está no nível: " + "Imortal");
}
