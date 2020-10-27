// // ************************************************************
// // CORREZIONE IN CLASSE (VERSIONE CREATA DA Paolo) da lui definita semplificata, ma al tempo stesso verbosa e ricca di molti degli elementi visti fino a qua per ripassare più concetti possibili.
// // ************************************************************

// // Setup iniziale variabili utili da settare all'inizio e GENERAZIONE BOMBE
var numeroMax = 0;

var possibilita = 0; 
// Lista 16 numeri 'proibiti'
var listaBombe = [];
// Numeri ok inseriti dall'utente
var numeriConsentiti = [];
// Scelte effettuate volta per volta dall'utente
var utente = 0; 

// // SCELTA LIVELLO DI DIFFICOLTA'
var livello = parseInt( prompt('Benvenuto soldato! scegli il livello di difficoltà tra 1 (facile), 2 (medio) e 3 (difficile )').trim() );

while ( livello < 1 || livello > 3 || isNaN(livello) ) {
    livello = parseInt( prompt('Valore inserito non valido! Scegli il livello di difficoltà tra 1 (facile), 2 (medio) e 3 (difficile )').trim() );
}

switch (livello) {
    case 1:
        numeroMax = 100;
        possibilita = 84; 
        break;

    case 2:
        numeroMax = 80;
        possibilita = 64; 
        break;

    case 3:
        numeroMax = 50;
        possibilita = 34; 
        break;
}

// // Generazione bombe, 16 numeri random univoci
while (listaBombe.length < 16) {
    // Random, per rendere la creazione più dinamica e scalabile possibile prendo numeroMax dalle classi utility create a inizio documento ed utilizzo la funzione da me creata per la generazione dei numeri random
    var numeroBomba = numeriRandom(numeroMax);
    // Push solo se non è gia presente
    if (listaBombe.includes(numeroBomba === false) ) {
        listaBombe.push(numeroBomba);
    }
}
console.log('LISTA BOMBE: ' + listaBombe);

// LOOP PRINCIPALE per il funzionamento del gioco

// Subito con while setto due condizioni fondamentali: che il numero di numeri inseriti sia inferiore a quello delle possibilità totali (es. 100 - 16 = 84) e che il numero di volta in volta inserito non sia presente nella lista delle 16 bombe
while ( (numeriConsentiti.length < possibilita) && (listaBombe.includes(utente) === false) ) {
    // Scelta utente
    utente = parseInt( prompt('Inserisci compreso tra uno e ' + numeroMax).trim() );

    while ( utente < 1 || utente > numeroMax || isNaN(utente) ) {
        utente = parseInt( prompt('OPS! Qualcosa non va... Inserisci compreso tra uno e ' + numeroMax).trim() );
    }
    console.log('SCELTA UTENTE: ' + utente);
    // Controllo numero inserito 
    controlloNumero(utente);
    // Quanti numeri ha inserito l'utente prima di perdere 
    if ( numeriConsentiti.length === possibilita ) {
         alert('HAI VINTO SOLDATO!!! COMPLIMENTI!');
    }
}


// ***
// FUNZIONI
// ***

// Numeri Random
function numeriRandom(max) {
    return Math.floor( Math.random() * max) + 1;
}

// Controllo numero inserito dall'utente 
function controlloNumero(num) {
    // Se num è nella lista bombe
    if ( listaBombe.includes(num) ) {
        alert('HAI PERSO! Sei sopravvissuto ' + numeriConsentiti.length + ' turni prima di trovare una bomba, riprova soldato!');
    }
    // Se num è gia stato inserito in precedenza 
    else if ( numeriConsentiti.includes(num) ) {
        alert('ATTENZIONE! Numero già inserito in precedenza, riprovare con uno nuovo soldato!');
    }
    // Se num va bene e si può proseguire nel gioco
    else if ( numeriConsentiti.includes(num) === false ) {
        numeriConsentiti.push(num);
    }
}







