const tabButton = document.querySelectorAll(".show-modal");
for (let i = 0; i < tabButton.length; i++) {
  tabButton[i].addEventListener("click", function () {
    document.querySelector(".hidden").style.display = "block";
  });
}

const closeButton = document.querySelector(".close-modal");
closeButton.addEventListener("click", function () {
  document.querySelector(".hidden").style.display = "none";
});
