/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto. */

// Acquisiamo i dati dall'utente
var userEvenOdds = prompt("Scegli pari o dispari");
var userChoice = Number(prompt("Scegli un numero da 1 a 5"));
console.log(userEvenOdds, userChoice);

// Controlliamo le scelte dell'utente 
if (!(isNaN(userEvenOdds))) {
    alert("Non hai inserito pari o dispari, riprova!");
} else if (isNaN(userChoice)) {
    alert("Non hai inserito un numero, riprova!");
} /*else if (userChoice = 0 || userChoice > 5); {
    alert("Il numero inserito è maggiore di 5 o uguale a 0, riprova!");
} */

// Generiamo un numero random da 1 a 5 per il computer
var pcNumber = (Math.floor(Math.random() * 4) + 1);
console.log(pcNumber);

// Sommiamo i due numeri
var sum = userChoice + pcNumber;
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari
if (sum % 2 == 0) {
    var even = sum;
} else {
    var odds = sum;
} 

// Dichiariamo chi ha vinto con un messaggio all'utente
if (userEvenOdds == "pari" && even == sum) {
    alert("Il risultato è pari. Hai vinto!");
} else if (userEvenOdds == "dispari" && even == sum) {
    alert("Il risultato è pari. Hai perso!");
} else if (userEvenOdds == "dispari" && odds == sum) {
    alert("Il risultato è dispari. Hai vinto!"); 
} else (userEvenOdds == "pari" && odds == sum); {
    alert("Il risultato è dispari. Hai perso!")
}








