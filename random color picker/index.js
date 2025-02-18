const body = document.getElementsByTagName("body")[0]

function setColor(name) { 
body.style.backgroundColor = name;
}

setColor("yellow"); 

function randomColor() { // R G B, ogni valore è da 0 a 255 

    const red = Math.round(Math.random() * 255); // Math.round() serve per arrotondare
    const green = Math.round(Math.random() * 255); 
    const blue = Math.round(Math.random() * 255); 
    // si crea una constante per ognuno dei
    // componenti dei codici rgb, che andranno
    // a formare il colore random 

    const color = `rgb(${red}, ${green}, ${blue})`  
    // string interpolation trick per fare in modo che i
    // valori numerici delle variabili siano poi 
    // convertiti in una string che corrisponde
    // ad un valore rgb

    body.style.backgroundColor = color;
}

randomColor(); 
