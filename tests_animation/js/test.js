` use strict `;
let nombre = prompt("Entrez une valeur");
nombre = nombre * 2;
console.log(`valeur*2 = ${nombre}`);
console.warn("Attention, ceci est un message d'avertissement");
console.error("Ceci est un message d'erreur");
console.info("Ceci est un message d'information");
console.log("Ceci est un message de log");

const tab1 = [23, 25, 28];
const tab2 = [12, 15, 18];
const findMax = (tab, taille) => {
  let max = tab[0];
  for (let i = 1; i < taille; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }
  return max;
};
const afficheTemp = (tab) => {
  for (let i in tab) {
    let tempMax = findMax(tab, Number(i) + 1);
    console.log(`${tempMax}°C in ${i} days`);
  }
};

afficheTemp(tab1);
afficheTemp(tab2);

let tagH1 = document.querySelector("header h1");
tagH1.innerHTML = "Bonjour";
const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (
      this.x + this.dx > canvas.width - this.radius ||
      this.x + this.dx < this.radius
    ) {
      this.dx = -this.dx;
    }
    if (
      this.y + this.dy > canvas.height - this.radius ||
      this.y + this.dy < this.radius
    ) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

class Cross {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x - this.size, this.y - this.size);
    ctx.lineTo(this.x + this.size, this.y + this.size);
    ctx.moveTo(this.x + this.size, this.y - this.size);
    ctx.lineTo(this.x - this.size, this.y + this.size);
    ctx.stroke();
    ctx.closePath();
  }
}

let ball = new Ball(canvas.width / 2, canvas.height / 2, 2, 2, 10, "#0095DD");
let crosses = [];

function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  let sourisX = event.clientX - rect.left;
  let sourisY = event.clientY - rect.top;
  console.log(sourisX, sourisY);
  crosses.push(new Cross(sourisX, sourisY, 10, "#FF0000"));
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.update();
  crosses.forEach((cross) => cross.draw());
  requestAnimationFrame(animate);
}

animate();
