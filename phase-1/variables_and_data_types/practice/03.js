// declarar una variable que se llame inputAge con un valor tipo String 17
// declarar otra variable que se llame inputCoins con un valor tipo String 150.75
// convertir inputAge a un valor tipo Number con una variable age
// convertir inputCoins a un valor tipo Number con una variable coins
// variable totalCoins que sume las coins con las 50 monedas de bono al depositar
// crear una variable tipo Boolean que evalúe si la persona mayor o igual de 18
// imprimir la edad convertida, el total de monedas (con decimales) y si es mayor o igual de 18

let inputAge = "17";
let inputCoins = "150.75";
let age = inputAge = Number(inputAge);
let coins = inputCoins = Number(inputCoins);
let bonoDeposito = 50;
totalCoins = coins + bonoDeposito;

if (age >= 18) {
    console.log(`La edad es ${age} teniendo un total de monedas de ${totalCoins.toFixed(2)}. ¿Es mayor de edad? ${true}`);
} else {
    console.log(`La edad es ${age} teniendo un total de monedas de ${totalCoins.toFixed(2)}. ¿Es mayor de edad? ${false}`);
}




// console.log(`La edad es ${age} teniendo un total de monedas de ${totalCoins.toFixed(2)}. ¿Es mayor de edad? ${age}`);
