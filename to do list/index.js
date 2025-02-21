let items = []; // array (inizialmente) vuoto dove i task scritti dall'utente vengono salvati 

const itemsDiv = document.getElementById("items"); // variabile dove si andranno a salvare gli elementi della to-do list una volta aggiunti
const input = document.getElementById("itemInput") // collegato all'<input> con id="itemInput"
const storageKey = "items"; 

function renderItems() { // il for loop è per quando sai quante volte iterare, il while è per quando non lo sai
                            // in questo caso il numero di volte che si itera, è uguale al numero di items inseriti dall'utente
    itemsDiv.innerHTML = "";

    for (const [idx, item] of Object.entries(items)) { // crea una coppia tra indice (idx) e l'item digitato (0, item1 | 1, item2, 2, item3)..
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p") //crea un istanza di text per ogni tag <p>
        text.textContent = item;
     
        text.style.display = "inline" // serve per far andare il bottone e il testo sulla stessa riga 
        text.style.marginRight = "10px" // gestisce il margine tra text e bottone delete

        const button = document.createElement("button")
        button.textContent = "Delete" 
        button.onclick = () => removeItem(idx) // dentro ad un arrow function, in modo che vanga chiamata solo all'onclick

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container) 

    }

}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
        renderItems()

}

function saveItems() {
    const stringItems = JSON.stringify(items); 
    localStorage.setItem(storageKey, stringItems);

}

function addItems() {

    const value = input.value;
    if (!value) {
        alert("Devi digitare la tua prima task!")
        return
    }

    items.push(value) // aggiunge il value dell'item all'array items istanziato a riga 1
    renderItems()
    input.value = ""  //serve per pulire l'input dopo che si è schiacciato il pulsante add task*/
    saveItems()
}

function removeItem(idx) {

    items.splice(idx, 1) // splice rimuove un elemento da un index specifico 
    renderItems()
    saveItems()

}

document.addEventListener("DOMContentLoaded", loadItems)