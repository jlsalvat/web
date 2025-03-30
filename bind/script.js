"use strict";
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
};
console.log(poll);
let pollEl = document.querySelector(".poll");
let questionEl = document.querySelector(".question");
let answersEl = document.querySelector(".answers");
let hiddenEl = document.querySelector(".hidden");
let fenQuestion = document.querySelector(".fen-question");
let closeEl = document.querySelector(".close");
let formEl = document.querySelector("fieldset");

questionEl.textContent = poll.question;

let reponses = [];
for (let i = 0; i < poll.options.length; i++) {
  reponses.push(poll.options[i].split(":")[1].trim());
}
console.log(reponses);
for (let i = 0; i < reponses.length; i++) {
  let divEl = document.createElement("div");
  divEl.style.padding = "10px";
  formEl.appendChild(divEl);
  let inputEl = document.createElement("input"); //on crée l'élément (la balise) input
  inputEl.type = "radio"; //on définit le type
  inputEl.name = "reponse"; //on définit le nom
  inputEl.value = reponses[i]; //on définit la valeur
  inputEl.id = i; //on définit l'id
  inputEl.checked = false; //on définit la valeur
  let labelEl = document.createElement("label");
  labelEl.htmlFor = i;
  labelEl.textContent = " " + reponses[i];
  divEl.appendChild(inputEl); //on place le input dans le formulaire
  divEl.appendChild(labelEl);
}

pollEl.addEventListener("click", function () {
  fenQuestion.classList.toggle("hidden");
  console.log("clicked");
});
closeEl.addEventListener("click", function () {
  fenQuestion.classList.toggle("hidden");
  let value = document.querySelector("input[name=reponse]:checked").value;
  console.log(value);
  document.querySelector("h1").innerHTML = `Thank you for voting ${value}`;
  console.log("YEAAAA")
});
