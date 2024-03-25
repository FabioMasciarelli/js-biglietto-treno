
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
let finalPrice ="";

// calcolo del prezzo del biglietto in base all'età e al numero di Km che vuole fare il cliente
if (userAge < 18 && userAge > 0) {
    finalPrice = (variableKm * userKm) - 0.2; 
} else if (userAge > 65) {
    finalPrice = (variableKm * userKm) - 0.4; 
} else {
    finalPrice = (variableKm * userKm);
}
console.log(finalPrice, typeof finalPrice);

//trasformare il numero con soli due valori dopo la virgola
const number = finalPrice.toFixed(2);

finalMessage = `Abbiamo calcolato il prezzo del tuo biglietto ed è di: ${number} €`; // string


// OUTPUT 
document .getElementById("result") .innerHTML = finalMessage;






