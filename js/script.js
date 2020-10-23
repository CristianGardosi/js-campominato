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


// LV DI DIFFICOLTA'
// Faccio scegliere all'utente il livello di difficoltà desiderato e setto il while in modo da renderlo continuativo fino a quando l'utente non inserisce un valore valido



// Setto le var che mi serviranno in seguito
var bombList = [];
var bombNumber = 16;
var min = 1;
var max = 100;

// GENERAZIONE 16 BOMBE
while (bombList.length < bombNumber) {
    var bomb = bombeRandom(1, 100);
    // If per evitare di avere doppioni
    if (bombList.includes(bomb) === false) {
        bombList.push(bomb);
    }
}
console.log(bombList);

// RICHIESTA NUMERI ALL'UTENTE (Inizio partita)
// Var vuota che indica il numero di volta in volta inserito dall'utente
var inserimentoNumero = '';
// Numero massimo totale meno il numero delle bombe mi da come risultato il numero massimo di volte in cui il loop può ripetersi, coincide con la vittoria finale del giocatore che non calpesta nessuna mina
for (var i = 0; i < (max - bombNumber); i++) {
    // Array che va man mano riempiendosi dei numeri inseriti dall'utente
    var numeriInseriti = [];

    var inserimentoNumero = parseInt( prompt('Inserisci un numero compreso tra ' + min + ' e ' + max) );

    while (isNaN(inserimentoNumero) || inserimentoNumero < min || inserimentoNumero > max || numeriInseriti.includes(inserimentoNumero)) {
        inserimentoNumero = parseInt( prompt('ATTENZIONE tentativo fallito! Inserisci un numero compreso tra ' + min + ' e ' + max) );
    }

    // Imposto attraverso if le situazioni che si vengono a creare in base al numero di volta in volta inserito
    if (! bombList.includes(inserimentoNumero)) {
        alert('Nessuna mina qui... Il gioco continua');
        numeriInseriti.push(inserimentoNumero);
        inserimentoNumero++;
    }
    else {
        alert('Bomba innescata! Hai perso!'); 
        break;
    }

}




// FUNZIONI

// Funzione per la creazione di numeri random entro un determinato intervallo
function bombeRandom(min, max) {
    var random = Math.floor( Math.random() * (max - min + 1) ) + min;

    return random;
}
