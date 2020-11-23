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

function randomPcNumber () {
// Generiamo un numero random da 1 a 5 per il computer
var pcNumber = (Math.floor(Math.random() * 4) + 1);
return pcNumber;
}

var savePcNumber = randomPcNumber();
// console.log(savePcNumber);

// Sommiamo i due numeri
var sum = userChoice + savePcNumber; 
// console.log(sum);

function result () {
// Stabiliamo se la somma dei due numeri è pari o dispari
var risultato = sum % 2;

if (risultato == 0) {
    var risultatoFinale = "pari";
} else if (risultato != 0) {
    var risultatoFinale = "dispari";
}

return risultatoFinale;

}

var saveRisultatoFinale = result();
// console.log(saveRisultatoFinale);


// Dichiariamo chi ha vinto con un messaggio all'utente
var msg = "La somma è: " + sum + ". " + "Il risultato è " + saveRisultatoFinale + ".";
// console.log(msg);

if (userEvenOdds == "pari" && saveRisultatoFinale == "pari") {
   alert(msg + " Hai vinto!");
} else if (userEvenOdds == "dispari" && saveRisultatoFinale == "pari") {
    alert(msg + " Hai perso!");
} else if (userEvenOdds == "dispari" && saveRisultatoFinale == "dispari") {
   alert(msg + " Hai vinto!"); 
} else if (userEvenOdds == "pari" && saveRisultatoFinale == "dispari") {
    alert(msg + " Hai perso!");
} 








