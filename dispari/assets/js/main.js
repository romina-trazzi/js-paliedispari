/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto. */

// Acquisiamo i dati dall'utente
var userEvenOdds = prompt("Scegli pari o dispari");
var userChoice = Number(prompt("Scegli un numero da 1 a 5"));
// console.log(userEvenOdds, userChoice);

// Controlliamo le scelte dell'utente 
if (!(isNaN(userEvenOdds))) {
    alert("Non hai inserito pari o dispari, riprova!");
} else if (isNaN(userChoice)) {
    alert("Non hai inserito un numero, riprova!");
} 

// Generiamo un numero random da 1 a 5 per il computer
var pcNumber = (Math.floor(Math.random() * 4) + 1);
// console.log(pcNumber);

// Sommiamo i due numeri
var sum = userChoice + pcNumber; 
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari
var risultato = sum % 2;

if (risultato == 0) {
    var risultatoFinale = "pari"
} else if (risultato != 0) {
    var risultatoFinale = "dispari"
}
// console.log(risultatoFinale);

// Dichiariamo chi ha vinto con un messaggio all'utente
var msg = "Il risultato è " + risultatoFinale + ".";
console.log(msg);

if (userEvenOdds == "pari" && risultatoFinale == "pari") {
    console.log(msg + " Hai vinto!");
} else if (userEvenOdds == "dispari" && risultatoFinale == "pari") {
    console.log(msg + " Hai perso!");
} else if (userEvenOdds == "dispari" && risultatoFinale == "dispari") {
    console.log(msg + " Hai vinto!"); 
} else if (userEvenOdds == "pari" && risultatoFinale == "dispari") {
    console.log(msg + " Hai perso!");
} 








