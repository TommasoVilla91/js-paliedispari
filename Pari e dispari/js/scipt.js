// DATI
const sideSelect = prompt("Pari o dispari? Scrivi qui la tua risposta").toLowerCase();
const userNum = prompt("Scegli un numero da 1 a 5");
const cpuNum = getRndNum(1, 5);

console.log(`Hai scelto "${sideSelect}" e il numero "${userNum}"`);
console.log(`CPU ha scelto il numero "${cpuNum}"`);


// ESECUZIONE LAGICA
const sum = parseInt(userNum) + cpuNum;
console.log(`La somma è "${sum}"`);

const pariDispari = evenOdd(sum);


// OUTPUT
if(sideSelect === pariDispari) {
    console.log("Complimenti, hai vinto!");    
} else {
    console.log("Mi spiace hai perso...");    
}