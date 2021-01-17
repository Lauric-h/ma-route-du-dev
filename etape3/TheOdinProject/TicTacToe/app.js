const board = [
    0, 0, 0,
    0, 0, 0, 
    0, 0, 0];

const boardContainer = document.querySelector('.boardContainer')

const Gameboard = (() =>{
  const renderBoard = () => {
    boardContainer.innerHTML = board.map((box, i) => {
      return `<div data-id='${i}' class='boardCell'>${box}</div>`;
    }).join('');
  }

  return {
    renderBoard
  };
})()



const markedCells = [];
function placeMarker() {
  boardContainer.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target.textContent === '0') {
      e.target.textContent = 'X';
      console.log(e.target.dataset.id); 
      board[e.target.dataset.id] = 'X';
      markedCells.push(+e.target.dataset.id + 1); // TODO : prevent array to have more than 3 values
      console.log(markedCells);
    } else if (e.target.textContent === 'X') {
      console.log('not possible')
    }
  })
}


function checkForWin(array) {
  const victory = [
    // lines
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // columns 
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // diagonals 
    [1, 5, 9],
    [3, 5, 7]
  ];

  if (victory.some(el => el === array.sort((a, b) => a - b))) { // TODO : put the sort somewhere else
    console.log('won')
  }
}

// TODO
// Checker la IIFE qui ne se lance pas toute seule
// Essayer de mettre dans des objets directement
// Checker pour la victoire
// Ajouter un 2è joueur
// Ajouter un joueur PC


// générer le gameboard
// // Faire en sorte que quand on clique sur une cell, ça : 
  // change la cell en 1
  // change le contenu du board en un 
// Faire en sorte qu'on ne puisse pas cliquer sur une cell qui est déjà cliquée
// Objet game 
  // checker pour 3 à la suite 
  // ajouter un score 
  // 