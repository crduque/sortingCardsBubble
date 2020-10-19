/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

const drawButton = document.querySelector("#drawButton");
const bubbleSortButton = document.querySelector("#bubbleSortButton");
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

// FUNCION QUE GENERA RANDOM INDEX
function randomIndex(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}
// FUNCION QUE GENERA SUITS
function selectSuit() {
  let top = document.querySelector("#left-suit");
  let bot = document.querySelector("#right-suit");
  let result = randomIndex(suits);
  if (result == "hearts") {
    top.setAttribute(
      "class",
      "hearts col-4 left-suit d-flex justify-content-center"
    );
    bot.setAttribute(
      "class",
      "hearts-rotate col-4 offset-8 right-suit d-flex justify-content-center"
    );
  } else if (result == "spades") {
    top.setAttribute(
      "class",
      "spades col-4 left-suit d-flex justify-content-center"
    );
    bot.setAttribute(
      "class",
      "spades-rotate col-4 offset-8 right-suit d-flex justify-content-center"
    );
  } else if (result == "clubs") {
    top.setAttribute(
      "class",
      "clubs col-4 left-suit d-flex justify-content-center"
    );
    bot.setAttribute(
      "class",
      "clubs-rotate col-4 offset-8 right-suit d-flex justify-content-center"
    );
  } else {
    top.setAttribute(
      "class",
      "diamonds col-4 left-suit d-flex justify-content-center"
    );
    bot.setAttribute(
      "class",
      "diamonds-rotate col-4 offset-8 right-suit d-flex justify-content-center"
    );
  }
  return result;
}
// FUNCION QUE GENERA VALUE
function selectValue() {
  let mid = document.querySelector("#value");
  let result = randomIndex(values);
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
// FUNCION QUE GENERA ARRAY DE LOS VALUES
function cardGenerator() {
  let allMyCards = [];
  let myInput = document.querySelector("#myInput").value;
  //generar una carta aleateatoria y la añade en la posicion x del array
  for (let numberOfCards = 1; numberOfCards <= myInput; numberOfCards++) {
    createContent(numberOfCards);
  }
}
// FUNCION QUE CREA LOS DIVS QUE CONTIENEN LA CARTA Y SUS CLASES
function createContent(index) {
  //localizamos padre
  let father = document.querySelector("#row2");
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
  father.appendChild(child);
  //asignamos clases e ids necesarias a bisnietos
  greatGrandSon1.setAttribute("id", "left-suit");
  greatGrandSon2.setAttribute(
    "class",
    "value col-4 offset-4 d-flex justify-content-center"
  );
  greatGrandSon2.setAttribute("id", "value");
  greatGrandSon3.setAttribute("id", "right-suit");
  //asignamos clases a los nietos
  grandChild1.setAttribute("class", "row");
  grandChild2.setAttribute("class", "row");
  grandChild3.setAttribute("class", "row");
  //asignamos clases e id al hijo
  child.setAttribute("class", "card col-1 w-75");
  child.setAttribute("id", "card" + index);

  let everyCard = document.querySelector("#card" + index);
  console.log(everyCard);
  console.log(selectSuit());
  console.log(selectValue());
}

drawButton.addEventListener("click", cardGenerator);
