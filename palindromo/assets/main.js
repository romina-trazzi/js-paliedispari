
/*====================================================
=            CODICE JS PAROLA PALINDROMA            =
======================================================*/

/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// Chiediamo all'utente di inserire la parola da controllare
var parola = prompt("Inserisci una parola e ti dirò se è palindroma");

/* Togliamo gli spazi per creare una unica parola nel caso l'utente avesse digitato
una frase e mettiamo tutte le lettere minuscole */
parola.trim();
parola.toLowerCase();

/* Questo codice serve da esempio per mostrare la parola dritta

var parolaDritta = "";

for (var i = 0; i < parola.length; i++) {
    console.log(parola[i]);
    parolaDritta = parolaDritta + parola[i];
} 
console.log(parolaDritta);  */

function palindroma (parola) {

    var parolaInversa = "";

        for (var i = parola.length -1; i >= 0; i--) {
            // console.log(parola[i]);
            parolaInversa = parolaInversa + parola[i];
        }
        
        return parolaInversa;

}

var saveParolaInversa = palindroma(parola);

console.log(saveParolaInversa, parola);

//Messaggi per l'utente
if (parola === saveParolaInversa) {
    alert("La parola cercata è palindroma, complimenti!");
} else {
    alert("Mi dispiace ma la parola cercata non è palindroma");
} 


