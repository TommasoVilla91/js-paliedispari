const userWord = prompt("Inserisci una parola");
const inverseWord = reverseString(userWord);


if(userWord === inverseWord) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}