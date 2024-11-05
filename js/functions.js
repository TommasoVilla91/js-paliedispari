/**
 * generare parola utente al contrario 
 * @param {string} word
 * @returns {string}
 */
function reverseString(word) {
    let result = "";
    for (let i = word.length - 1; i >= 0; i++) {
        const curChar = word[i];
        result = result + curChar;
    }
    return result;
}

/**
 * constatare che le due parole siano palindrome
 * @param {string} word
 * @param {string} userWord
 * @returns {boolean}
 */
function isPalindrome(word, userWord) {
    let isPalindrome = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== userWord[i]) {
            return false;
        }
    }
    return true;
}