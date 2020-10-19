import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
import "./index.js";

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

function randomIndex(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}
function selectSuit() {
  let top = document.querySelector("#left-suit");
  let bot = document.querySelector("#right-suit");
  let result = randomIndex(suits);
  if (result == "hearts") {
    top.className = "hearts col-4 left-suit d-flex justify-content-center";
    bot.className =
      "hearts-rotate col-4 offset-8 right-suit d-flex justify-content-center";
  } else if (result == "spades") {
    top.className = "spades col-4 left-suit d-flex justify-content-center";
    bot.className =
      "spades-rotate col-4 offset-8 right-suit d-flex justify-content-center";
  } else if (result == "clubs") {
    top.className = "clubs col-4 left-suit d-flex justify-content-center";
    bot.className =
      "clubs-rotate col-4 offset-8 right-suit d-flex justify-content-center";
  } else {
    top.className = "diamonds col-4 left-suit d-flex justify-content-center";
    bot.className =
      "diamonds-rotate col-4 offset-8 right-suit d-flex justify-content-center";
  }
}
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

function myCard() {
  selectSuit();
  selectValue();
}

let myButton = document.querySelector("#button");

myButton.addEventListener("click", myCard);