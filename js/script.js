// **********************************************************
// // CAMPO MINATO!
// **********************************************************

// Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50



// Generazione bombe (16 numeri casuali non doppioni)
var bombList = [];
var bombNumber = 16;
// Ciclo while per la generazione delle mie 16 bombe comprese tra 1 e 100
while (bombList.length < bombNumber) {
    var bomb = randomNumber(1, 100);
    // If per evitare di avere doppioni
    if (bombList.includes(bomb) === false) {
        bombList.push(bomb);
    }
}

console.log(bombList);


// FUNZIONI

// Funzione per la creazione di numeri random entro un determinato intervallo
function randomNumber(min, max) {
    var random = Math.floor( Math.random() * (max - min + 1) ) + min;

    return random;
}
