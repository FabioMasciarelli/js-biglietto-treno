
//INPUT
let userAge = prompt("Ciao utente! Quanti anni hai?"); // string | null
console.log(userAge, typeof userAge);

userAge = parseInt(userAge); // number
console.log(userAge, typeof userAge);

let userKm = prompt("Quanti Km vuoi percorrere?"); //string | null
console.log (userKm, typeof userKm);

userKm = parseInt(userKm); // number
console.log(userKm, typeof userKm);


//LOGICA
const variableKm = 0.21; // number
const youngDiscount = 0.2; // number
const oldDiscount = 0.4; // number

let finalPrice ="" ;

if (userAge < 18 && userAge > 0) {
    let finalPrice = (variableKm * userKm) - 0.2; 
} else if (userAge > 65) {
    let finalPrice = (variableKm * userKm) - 0.4;
} else {
    let finalPrice = (variableKm * userKm)
}

console.log(finalPrice, typeof finalPrice);


// OUTPUT 
document .getElementById("result") .innerHTML = finalPrice






