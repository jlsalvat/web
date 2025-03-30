'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const header = document.querySelector('header');
const countrieRow = document.querySelectorAll('.country__row'); // Correction ici

header.style.opacity = 1;
setTimeout(function () {
  header.textContent = 'Bonjour';
  header.style.backgroundColor = 'red';
  header.style.color = 'cyan';
}, 2000);

function updateDOM(data) {
  let html = `      
    <article class="country">
   <img class="country__img" src="${data.flags.png}" />
   <div class="country__data">
     <h3 class="country__name">COUNTRY : ${data.name}</h3>
     <h4 class="country__region">REGION : ${data.region}</h4>
     <p class="country__row"><span>👫</span>POP people : ${(
       data.population / 1000
     ).toFixed(1)} milliers</p>
     <p class="country__row"><span>🗣️</span>LANG : ${data.languages[0].name}</p>
     <p class="country__row"><span>💰</span>CUR : ${data.currencies[0].name}</p>
   </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('afterend', html);
  countriesContainer.style.opacity = 1;
}

//nouvelle fonction upadteCountry
function updateCountry(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);
    console.dir(data);
    console.log(`Population : ${data.population} habitants`);
    updateDOM(data);
  });
}
//autre solution avec fetch et les promises
const getCountry = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => updateDOM(data[0]));
};

updateCountry('Portugal');
updateCountry('France');
updateCountry('Spain');
updateCountry('Italy');
updateCountry('germany');
updateCountry('United Kingdom');
//getCountry('germany');
