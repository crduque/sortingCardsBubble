/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
import "./cardGenerator.js";

const myInput = document.querySelector("#myInput").value;
const drawButton = document.querySelector("#drawButton");
const bubbleSortButton = document.querySelector("#bubbleSortButton");

function cardGenerator() {
  let allMyCards = [];
  //generar una carta aleateatoria y la añade en la posicion x del array
  for (let numberOfCards = 1; numberOfCards <= myInput; numberOfCards++) {
    createContent(); // llama a la función que genera la carta
    
}
//   añadir contenido a la carta
//   for (let index = 0; index < allMyCards.length; index++) {
    //     allMyCards[index].innerHTML = ; //contenido de cada carta 
    //   }
}
function createContent() {
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
    greatGrandSon1.setAttribute("id","left-suit");
    greatGrandSon2.className("value col-4 offset-4 d-flex justify-content-center");
    greatGrandSon2.setAttribute("id","value");
    greatGrandSon3.setAttribute("id","right-suit");
    //asignamos clases a los nietos
    grandChild1.className("row");
    grandChild2.className("row");
    grandChild3.className("row");
    //asignamos clases e id al hijo
    child.className("card col-1 w-75");
    child.setAttribute("id","card");
}