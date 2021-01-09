import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "../style/index.scss";

// asignando botones a variables
const drawButton = document.querySelector("#drawButton");
const bubbleSortButton = document.querySelector("#bubbleSortButton");
const selectSortButton = document.querySelector("#selectSortButton");

// asignándoles funcionalidad a los botones
selectSortButton.addEventListener("click", select);
bubbleSortButton.addEventListener("click", bubble);
drawButton.addEventListener("click", cardGenerator);

const values = [
  1, //si es 1, imprime A en vez de 1
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11, //si es 11, imprime J
  12, //si es 12, imprime Q
  13 //si es 13, imprime K
];
const suits = ["hearts", "spades", "clubs", "diamonds"];

var myArray = []; // array que contendrá información sobre el palo y valor de las cartas generadas

// FUNCION QUE GENERA RANDOM INDEX
function randomIndex(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

// FUNCION QUE GENERA SUITS
function selectSuit(result, top, bot) {
  if (result == "") result = randomIndex(suits);
  if (result == "hearts") {
    top.className = "hearts col-4 left-suit d-flex justify-content-center";
    bot.className =
      "hearts-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else if (result == "spades") {
    top.className = "spades col-4 left-suit d-flex justify-content-center";
    bot.className =
      "spades-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else if (result == "clubs") {
    top.className = "clubs col-4 left-suit d-flex justify-content-center";
    bot.className =
      "clubs-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else {
    top.className = "diamonds col-4 left-suit d-flex justify-content-center";
    bot.className =
      "diamonds-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  }
  return result;
}

// FUNCION QUE GENERA VALUE
function selectValue(result, mid) {
  if (result == 0) result = randomIndex(values);
  let resultOut = result;
  if (result == 1) {
    result = "A";
  } else if (result == 11) {
    result = "J";
  } else if (result == 12) {
    result = "Q";
  } else if (result == 13) {
    result = "K";
  }
  mid.innerHTML = result;
  return resultOut;
}

// FUNCION QUE CREA LOS DIVS QUE CONTIENEN LA CARTA Y SUS CLASES
function createContent(content) {
  //creamos hijos
  let child = document.createElement("div");
  let grandChild1 = document.createElement("div");
  let grandChild2 = document.createElement("div");
  let grandChild3 = document.createElement("div");
  let greatGrandSon1 = document.createElement("div");
  let greatGrandSon2 = document.createElement("div");
  let greatGrandSon3 = document.createElement("div");
  //ordenamos hijos dentro de sus padres
  grandChild1.appendChild(greatGrandSon1);
  grandChild2.appendChild(greatGrandSon2);
  grandChild3.appendChild(greatGrandSon3);
  child.appendChild(grandChild1);
  child.appendChild(grandChild2);
  child.appendChild(grandChild3);
  //asignamos clases a bisnieto
  greatGrandSon2.setAttribute(
    "class",
    "value col-4 offset-4 d-flex justify-content-center"
  );
  //asignamos clases a los nietos
  grandChild1.setAttribute("class", "row");
  grandChild2.setAttribute("class", "row");
  grandChild3.setAttribute("class", "row");
  //asignamos clases e id al hijo
  child.setAttribute("class", "card col-1 w-100");
  child.setAttribute("id", "card");

  if (content == "") {
    let emptySuit = "";
    let emptyValue = 0;
    let suitasd = selectSuit(emptySuit, greatGrandSon1, greatGrandSon3); //asignamos palo a la carta
    let value = selectValue(emptyValue, greatGrandSon2); //asinamos valor a la carta
    myArray.push({ suit: suitasd, value: value }); //añadimos toda la info de cada carta en un array
  } else {
    selectSuit(content.suit, greatGrandSon1, greatGrandSon3);
    selectValue(content.value, greatGrandSon2);
  }

  return child;
}

// FUNCION QUE GENERA CADA CARTA EN FUNCION DEL NUMERO DEL INPUT Y EL ARRAY CON LOS VALORES
function cardGenerator() {
  myArray = []; //vaciamos el array para la siguiente vuelta
  let myInput = document.querySelector("#myInput").value;
  let father = document.querySelector("#row2");
  father.textContent = "Generating random cards"; //texto que tiene el padre

  for (let numberOfCards = 1; numberOfCards <= myInput; numberOfCards++) {
    let empty = "";
    father.appendChild(createContent(empty));
  }
}

//FUNCIÓN QUE PINTA LAS CARTAS ORDENADAS
function sortingCardsGenerator(array) {
  let child = document.createElement("div");
  child.setAttribute("class", "rowSort row");

  for (let index = 0; index < array.length; index++) {
    child.appendChild(createContent(array[index]));
  }
  return child;
}

// FUNCIÓN QUE ORDENA CON ALGORITMO BUBBLE
const bubbleSort = () => {
  let bubbleArray = myArray;
  let wall = bubbleArray.length - 1;
  let father = document.querySelector("#row3");
  father.textContent = "Sorting cards with Bubble algorithm ";
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (bubbleArray[index].value > bubbleArray[index + 1].value) {
        let aux = bubbleArray[index];
        bubbleArray[index] = bubbleArray[index + 1];
        bubbleArray[index + 1] = aux;
      }
      index++;
    }
    father.appendChild(sortingCardsGenerator(bubbleArray));
    wall--;
  }
};

function bubble() {
  bubbleSort();
}

// FUNCIÓN QUE ORDENA CON ALGORITMO SELECT
const selectSort = () => {
  let selectArray = myArray;
  let min = 0;
  let father = document.querySelector("#row3");
  father.textContent = "Sorting cards with Select algorithm ";
  while (min < selectArray.length - 1) {
    for (let i = min + 1; i < selectArray.length; i++) {
      if (selectArray[min].value > selectArray[i].value) {
        let aux = selectArray[min];
        selectArray[min] = selectArray[i];
        selectArray[i] = aux;
      }
    }
    father.appendChild(sortingCardsGenerator(selectArray));
    min++;
  }
};

function select() {
  selectSort();
}
