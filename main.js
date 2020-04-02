// JavaScript Document

let townChoose = document.querySelector('select');
let informationDisplay = document.querySelector('p');

townChoose.onchange = function() {
  let town = townChoose.value;
  updateDisplay(town);
};

function updateDisplay(town) {
  town = town.replace(' ', '');
  town = town.toLowerCase();
  let url = town + '.txt';

  fetch(url).then(function(response) {
      response.text().then(function(text) {
         informationDisplay.textContent = text;
      });
    });
  }

updateDisplay('Downtown');
townChoose.value = 'Downtown';
