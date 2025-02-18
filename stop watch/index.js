let secondsPassed = 0;
let interval = null; 
const time = document.getElementById("time")

function padStart(value) {    
    // metodo che inserisce un padding per fare in modo 
    // che la string arrivi al valore desiderato, (00)
    // in questo caso 2, come il primo parametro,
    // e tra virgolette il padding che deve essere aggiunto
    // per arrivare alla lunghezza di 2 caratteri
    // quindi per passare da 0 (di minuti e secondi) a 00.00
    // bisogna aggiungere uno 0 a min e uno 0 a sec

    return String(value).padStart(2, "0")    
}

function setTime() {
    const minutes = Math.floor(secondsPassed / 60);
    const seconds = secondsPassed % 60;

    //chiedendo il resto di 60 con %, 
    // il resto sarà sempre un num da 1 a 59, che
    // rappresenta i secondi per arrivare ad un minuto 

    time.innerHTML =  ` ${padStart(minutes)} : ${padStart(seconds)}`;
            // l'uso del backtick prende i valori numerici e li embedda in una stringa
}

function timer() {
    secondsPassed++; 
    // uguale a secondsPassed + 1; 
    setTime()
}

function startClock() {
    if (interval) stopClockk(); // se viene schiacciato ancora il pulsante start, stoppa l'orologio e memorizza il valore a cui è arrivato, non lo resetta 
    interval = setInterval(timer, 1000) //unit: milliseconds. 1 second

}

function stopClock() {
    clearInterval(interval); 
}

function resetClock() {
    stopClock();            // prima stoppa l'orologio
    secondsPassed = 0;      // poi resetta i secondi passati a zero
    setTime();              // e fa tornare il valore iniziale a 00:00
                            //
}