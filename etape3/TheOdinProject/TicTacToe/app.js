const Gameboard = (() =>{
  const boardContainer = document.querySelector('.boardContainer')
  const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  const renderBoard = () => {
    board.forEach(box => {
      let cell = document.createElement('div');
      cell.innerHTML = box;
      boardContainer.appendChild(cell);
    })
  }

  return {
    renderBoard
  }





})()

// générer le gameboard
// Faire en sorte que quand on clique sur une cell, ça : 
  // change la cell en 1
  // change le contenu du board en un 
// Faire en sorte qu'on ne puisse pas cliquer sur une cell qui est déjà cliquée
// Objet game 
  // checker pour 3 à la suite 
  // ajouter un score 
  // 