/**
 * generare numero intero random tra min e max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndNum(min, max) {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    return randomInt;
}

/**
 * stabilire se numero è pari o dispari
 * @param {number} numberToCheck
 * @returns {string}
 */
function evenOdd(numberToCheck) {
    let result = "";
    if(numberToCheck % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}