let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput")

function loadItems() { }

function renderItems() { // il for loop è per quando sai quante volte iterare, il while è per quando non lo sai
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) { // crea una coppia tra indice (idx) e l'item digitato

        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p") //crea un istanza di text per ogni tag <p>
        text.style.display = "inline" // serve per far andare 
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)

    }

}

renderItems()

function saveItems() { }

function addItems() {

    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item")
        return
    }

    items.push(value)
    renderItems()
    input.value = ""
}

function removeItem(idx) {

    items.splice(idx, 1)
    renderItems()

}