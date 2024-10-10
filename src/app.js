/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["Mi hijo", "El gato", "Mi perro", "Un mirlo negro"];
  let action = ["mojó", "desmontó", "rompió", "saboteó"];
  let what = ["mi portátil", "mi móvil", "el cable del wifi"];
  let when = [
    "mientras dormía.",
    "cuando fuí por el pan.",
    "en un arrebato de ira.",
    "cuando estaba en la ducha."
  ];

  function generateExcuse() {
    let randomwho = Math.floor(Math.random() * who.length);
    let randomaction = Math.floor(Math.random() * action.length);
    let randomwhat = Math.floor(Math.random() * what.length);
    let randomwhen = Math.floor(Math.random() * when.length);

    let excuse =
      who[randomwho] +
      " " +
      action[randomaction] +
      " " +
      what[randomwhat] +
      " " +
      when[randomwhen];

    return excuse;
  }
  document.getElementById("excuse").innerText = generateExcuse();
};
