const input = document.getElementById("input")

function reverseString(str) {
    // prima divide la parola in singole lettere
    // "dog" -> d, o, g, con .split()
    // poi con .reverse() la inverte 
    // d, o, g -> g, o, d 
    // con .join() la ri-unisce 
    // g, o, d -> "god"
    // con il criterio "" che significa zero spazi

    return str.split("").reverse().join("")
}

function check() {

    const value = input.value;
    const reverse = reverseString(value); // il valore dell'input digitato dall'utente, viene passato per il metodo reverseString(){}
    //alert("La tua parola al contrario è: "+reverse) // alert per controllare che funzioni

    if (value === reverse) { // se l'input value iniziale è uguale al valore invertito
        alert("YAY! PALINDROMO!");  // allora è palindromo
    } else {                        // se non lo è
        alert("Oggi no :( ");       // non è palindromo!
    }

    input.value = "";
    //il valore dell'input torna a zero
    // dopo che è stato schiacciato il bottone
    //e generato il risultato nell'alert
}