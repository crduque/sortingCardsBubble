import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
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
var myArray = [];
var myArraySlice = myArray.slice(0, myArray.length);

// FUNCION QUE GENERA RANDOM INDEX
function randomIndex(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}
// FUNCION QUE GENERA SUITS
function selectSuit(top, bot) {
  let result = randomIndex(suits);
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
}
// FUNCION QUE GENERA VALUE
function selectValue(mid) {
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
// FUNCION QUE CREA LOS DIVS QUE CONTIENEN LA CARTA Y SUS CLASES
function createContent(index) {
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
  child.setAttribute("id", "card" + index);

  selectSuit(greatGrandSon1, greatGrandSon3); //asignamos palo a la carta

  myArray.push(selectValue(greatGrandSon2)); //asinamos valor a la carta y se lo añadimos a un array
  //   console.log(myArray);

  return child;
}
// FUNCION QUE GENERA CADA CARTA EN FUNCION DEL NUMERO DEL INPUT Y EL ARRAY CON LOS VALORES
function cardGenerator() {
  let myInput = document.querySelector("#myInput").value;
  let father = document.querySelector("#row2");
  father.textContent = ""; //vacia al padre si ya tiene algun contenido, para que no se sobreescriban cartas
  for (let numberOfCards = 1; numberOfCards <= myInput; numberOfCards++) {
    father.appendChild(createContent(numberOfCards));
  }
  //aqui utilizamos el array para el fin que queramos
  console.log(myArray);
  //aqui lo vaciamos para la siguiente vuelta (la siguiente vez que generes unas cartas)
  myArray.splice(0, myArray.length);
}
drawButton.addEventListener("click", cardGenerator);
