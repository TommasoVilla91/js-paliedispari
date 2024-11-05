L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

DATI
* scelta utente pari/dispari
* numero utente 
* numero cpu 

ESECUZIONE LOGICA
* numero cpu -> funzione numero random tra min e max
* sum = parseInt(userNum) + cpuNum
* stabilire se sum è pari o dispari -> funzione evenOdd

OUTPUT
SE (scelta utente pari/dispari === sum pari/dispari) {
    Hai vinto!
} ALTRIMENTI {
    Hai perso...
}
