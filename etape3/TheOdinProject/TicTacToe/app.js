const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const Gameboard = (() =>{
  const boardContainer = document.querySelector('.boardContainer')
  

  const renderBoard = () => {
    boardContainer.innerHTML = board.map((box, i) => {
      return `<div data-id='${i}' class='boardCell'>${box}</div>`;
    }).join('');
  }

  return {
    renderBoard
  }

})()

function placeMarker() {
  const boardContainer = document.querySelector('.boardContainer')
  boardContainer.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target.textContent === '0') {
      e.target.textContent = 'X';
      console.log(e.target.dataset.id); 
      board[e.target.dataset.id] = 'X';
    } else if (e.target.textContent === 'X') {
      console.log('not possible')
    }
  })
}

function checkNearbyCells(index) {
  let 
}



// générer le gameboard
// // Faire en sorte que quand on clique sur une cell, ça : 
  // change la cell en 1
  // change le contenu du board en un 
// Faire en sorte qu'on ne puisse pas cliquer sur une cell qui est déjà cliquée
// Objet game 
  // checker pour 3 à la suite 
  // ajouter un score 
  // 