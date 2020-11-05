// Global variables 
const alert = document.querySelector('.notification');
const alertText = document.querySelector('#notification-texte');
const upperLimitInput = document.querySelector('#limite-haute')
const lowerLimitInput = document.querySelector('#limite-basse')
const displayClickCounter = document.querySelector('#compteur');
const plusClickInput = document.querySelector('#valeur-inc'); 
const minusClick = document.querySelector('#valeur-dec'); 

// Définit les variables du DOM pour les boutons d'incrémentation/décrémentation/reset/zone de clics
const plusButton = document.querySelector('#bouton-plus');
const minusButton = document.querySelector('#bouton-moins');
const resetButton = document.querySelector('#bouton-reset');
const clickArea = document.querySelector('#zone-de-clic');

// Met le compteur de clics à 0
let clickCounter = 0;

// Modifie le texte du compteur en fonction de sa valeur
function updateClickCounter() {
  displayClickCounter.textContent = clickCounter;
}

// Modifie la valeur et définit des limites
function changeValue(newValue) {
  clickCounter = newValue;

  const upperLimit = +upperLimitInput.value;
  if (clickCounter > +upperLimit) {
    clickCounter = +upperLimit;
    alertPopup(`Vous avez dépassé la limite hasse (${upperLimit})`);
  }
  
  const lowerLimit = +lowerLimitInput.value;
  if (clickCounter < +lowerLimit) {
    clickCounter = +lowerLimit;
    alertPopup(`Vous avez dépassé la limite basse (${lowerLimit})`);
  }

  if (clickCounter > lowerLimit && clickCounter < upperLimit) {
    displayClickCounter.classList.remove('limite-atteinte');
  }

  if (clickCounter < lowerLimit && clickCounter < upperLimit) {
    clickCounter = lowerLimit;
  }

  if (upperLimit < lowerLimit || lowerLimit > upperLimit) {
    alertPopup(`Vos limites sont inversées !`);
  }
  updateClickCounter();
}

// Incrémente le compteur en fonction de la valeur d'incrémentation
function incCount() {  
  changeValue(clickCounter += +plusClickInput.value);
}

// Décrémente le compteur en fonction de la valeur d'incrémentation
function decCount() {
  changeValue(clickCounter -= +minusClick.value);
}

// Remise à zéro avec le bouton reset
function resetCount() {
  clickCounter = 0;
  displayClickCounter.classList.remove('limite-atteinte');
  updateClickCounter();
}

// Event sur le clic sur des boutons d'incrémentation/décrémentation/reset/zone de clics
plusButton.addEventListener('click', incCount);
minusButton.addEventListener('click', decCount);
resetButton.addEventListener('click', resetCount);
clickArea.addEventListener('contextmenu', function(e) {
  e.preventDefault(); // Empêche le menu du clic droit (contextmenu) de se lancer
  decCount();
})             
clickArea.addEventListener('click', incCount);

// Notification 
function alertPopup(message) {
  alertText.innerHTML = message;
  displayClickCounter.classList.add('limite-atteinte');
  alert.classList.add('afficher');
  window.setTimeout(function() { 
    alert.classList.remove('afficher')
  } , 2000);
}


  

