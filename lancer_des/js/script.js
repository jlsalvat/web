`use strict`;
let imgDe = document.querySelector("#dice");
let newGame = document.querySelector("#new");
let roll = document.querySelector("#roll");
let hold = document.querySelector("#hold");
let valeurTotalJoueur1 = 0;
let valeurTotalJoueur2 = 0;
let valeurJoueur1 = 0;
let valeurJoueur2 = 0;
let joueurActif = 1;

function changerCouleur() {
  if (joueurActif === 1) {
    document.querySelector("#left").style.backgroundColor = "rgb(159, 76, 152)";
    document.querySelector("#left").style.border = "2px solid black";
    document.querySelector("#right").style.backgroundColor = "grey";
    document.querySelector("#right").style.border = "";
  } else {
    document.querySelector("#right").style.backgroundColor =
      "rgb(159, 76, 152)";
    document.querySelector("#right").style.border = "2px solid black";
    document.querySelector("#left").style.backgroundColor = "grey";
    document.querySelector("#left").style.border = "";
  }
}
function isWinner() {
  if (valeurTotalJoueur1 >= 20) {
    alert("Joueur 1 a gagné");
  } else if (valeurTotalJoueur2 >= 20) {
    alert("Joueur 2 a gagné");
  }
}

roll.addEventListener("click", function () {
  let valeurDe = Math.floor(Math.random() * 6) + 1;
  console.log(valeurDe);
  imgDe.src = "img/dice-" + valeurDe + "_min.png";
  if (valeurDe !== 1) {
    if (joueurActif === 1) {
      valeurJoueur1 += valeurDe;
      document.querySelector("#left").childNodes[5].lastElementChild.innerHTML =
        valeurJoueur1;
    } else {
      valeurJoueur2 += valeurDe;
      document.querySelector(
        "#right"
      ).childNodes[5].lastElementChild.innerHTML = valeurJoueur2;
    }
  } else {
    if (joueurActif === 1) {
      joueurActif = 2;
      document.querySelector(
        "#left"
      ).childNodes[5].lastElementChild.innerHTML = 0;
    } else {
      joueurActif = 1;
      document.querySelector(
        "#right"
      ).childNodes[5].lastElementChild.innerHTML = 0;
    }
    changerCouleur();
  }
});
hold.addEventListener("click", function () {
  if (joueurActif === 1) {
    valeurTotalJoueur1 += valeurJoueur1;
    document.querySelector("#left").childNodes[3].innerHTML =
      valeurTotalJoueur1;
    valeurJoueur1 = 0;
    document.querySelector(
      "#left"
    ).childNodes[5].lastElementChild.innerHTML = 0;
    joueurActif = 2;
  } else {
    valeurTotalJoueur2 += valeurJoueur2;
    document.querySelector("#right").childNodes[3].innerHTML =
      valeurTotalJoueur2;
    valeurJoueur2 = 0;
    document.querySelector(
      "#right"
    ).childNodes[5].lastElementChild.innerHTML = 0;
    joueurActif = 1;
  }
  isWinner();
  changerCouleur();
});
newGame.addEventListener("click", function () {
  valeurTotalJoueur1 = 0;
  valeurTotalJoueur2 = 0;
  valeurJoueur1 = 0;
  valeurJoueur2 = 0;
  joueurActif = 1;
  document.querySelector("#left").childNodes[3].innerHTML = 0;
  document.querySelector("#right").childNodes[3].innerHTML = 0;
  document.querySelector("#left").childNodes[5].lastElementChild.innerHTML = 0;
  document.querySelector("#right").childNodes[5].lastElementChild.innerHTML = 0;
  changerCouleur();
  imgDe.src = "img/fond_min.png";
});

changerCouleur();
