const quote = [

  /*[0]*/ "Amore è il fatto che tu sei per me il coltello col quale frugo dentro me stesso.",
  /*[1]*/ "È difficile dire la verità, perché ne esiste sì una sola, ma è viva e possiede pertanto un volto vivo e mutevole.",
  /*[2]*/ "Non è mica necessario levarsi in volo fino al sole, basta strisciare fino a un posticino pulito sulla terra dove ogni tanto il sole faccia la sua comparsa e ci si possa riscaldare un po'.",
  /*[3]*/"Di fronte a te avevo perduto ogni fiducia in me stesso e conseguito in cambio uno sconfinato senso di colpa.",
  /*[4]*/"Il primo segnale dell'inizio della comprensione si manifesta con il desiderio di morire.",
  /*[5]*/"La mia “paura” è la mia essenza, e probabilmente la parte migliore di me stesso.",
  /*[6]*/"Una gabbia andò in cerca di un uccello",
];

const usedIndexes = new Set(); // we're creating a new instance of the Set class
const quoteElement = document.getElementById("quote");

function generateQuote() {

    if (usedIndexes.size >= quote.length) { 
        usedIndexes.clear()
    }

  while (true) { 
    // math.floor arrotonda, math.random genera un num tra 0 e 1
    // e lo moltiplica per la lunghezza dell'elenco delle quotes
    // in modo da ottenere casualmente il numero di index [ ]

    const randomIndex = Math.floor(Math.random() * quote.length);

    if (usedIndexes.has(randomIndex)) continue 

    const randomQuote = quote[randomIndex]; // randomQuote è quindi una quote dell'array quote, con index randomico
    quoteElement.innerHTML = randomQuote;
    usedIndexes.add(randomIndex); // aggiunge l'index all'elenco di quelli già utilizzati 
    
    break; 
  }

  /* quoteElement.innerHTML = "tessst"

        innerHTML va a mettere l'elemento 
        a destra dell'equazione 
        TRA i tag html dell'elemento taggato "quote",
        l'argument passato in parentesi */
}
