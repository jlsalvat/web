let valeurAtrouver = 0;
let decompteur = 20;
const response = document.querySelector(".Response");
const HightScore = document.querySelector(".HightScore");
const score = document.querySelector(".score");
const main = document.querySelector("main");
const valueToFind = document.querySelector(".value-to-find");
const number = document.querySelector("#number");
let valeurScore = 0;
let valeurHightScore = 0;

function rejouer() {
  valeurAtrouver = Math.floor(Math.random() * 20) + 1;
  decompteur = 20;
  response.innerHTML = "Clickez sur vérifier";
  main.style.backgroundColor = "rgb(32, 32, 32)";
  valueToFind.innerHTML = "?";
  console.log(`valeur à trouver: ${valeurAtrouver}`);
  score.innerHTML = "Score : 20";
  number.value = "";
}
const gestion_score = () => {
  if (decompteur > 0) {
    decompteur--;
  }
  valeurScore = decompteur;
  score.innerHTML = `Score :${valeurScore}`;
};

function tester() {
  const valeurSaisie = Number(number.value) || 0;
  if (valeurSaisie === 0) return;
  console.log(`valeur saisie: ${valeurSaisie}`);
  if (valeurSaisie > valeurAtrouver) {
    response.style.backgroundColor = "#b59f33";
    response.innerHTML = "C'est moins";
    gestion_score();
  } else if (valeurSaisie < valeurAtrouver) {
    response.style.backgroundColor = "rgb(170, 51, 181)";
    response.innerHTML = "C'est plus";
    gestion_score();
  } else {
    valueToFind.innerHTML = valeurAtrouver;
    response.innerHTML = "😂Gagné";
    response.style.backgroundColor = "rgb(51, 181, 51)";
    main.style.backgroundColor = "green";
    valeurScore = decompteur;
    score.innerHTML = `Score : ${valeurScore}`;
    if (valeurScore > valeurHightScore) {
      valeurHightScore = valeurScore;
      HightScore.innerHTML = `🗼Record : ${valeurHightScore}`;
    }
  }
}

document.getElementById("again").onclick = rejouer;

document.getElementById("check").addEventListener("click", tester);

rejouer();
