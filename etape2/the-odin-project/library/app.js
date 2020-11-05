// on pageload, if localStorage exists : load this, if not, load empty array
let myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || []; 

// global variables
  // - DOM elements
const bookList = document.querySelector('.bookList');
const bookTable = document.querySelector('.bookTable');

  // - form
const exitForm = document.querySelector('.form-header a');
const bookForm = document.querySelector('.form-ctn');

  // - buttons
const addBtn = document.querySelector('.addBtn');
const resetBtn = document.querySelector('.resetBtn');
const readAllBtn = document.querySelector('.toggleAll');
const addItems = document.querySelector('.addBooks');

// constructor to create instances of books
class Books {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Actions with buttons

const buttons = {
  addBooks: function(e) {
    e.preventDefault(); // avoiding page reload on submit
    const newBook = new Books(bookname.value, author.value, pages.value, false);
    myLibrary.push(newBook);
    localSave.setStorage();
    view.displayLibrary();
    this.reset();
    view.removeForm();
    view.checkIfRead(); // if book is read, keep the colored state
  },
  resetBooks: function() {
    myLibrary = [];
    localStorage.clear();
    view.displayLibrary();
  },
  deleteBooks: function(e) {
    const el = e.target;
    if (!el.matches('i')) return;
    el.parentNode.remove();
    myLibrary.splice(el.dataset.index, 1);
    if (myLibrary.length === 0) {
      localStorage.clear();
    } else {
      localSave.setStorage();
    }
  },
  toggleRead: function(e) {
    localSave.getStorage();
    if (!e.target.matches('input')) return; //only works if click is on input
    const el = e.target;
    const index = el.dataset.index; 
    myLibrary[index].read = !myLibrary[index].read; // if read make it unread
    localSave.setStorage();
    view.isRead(el, myLibrary[index].read);
  },
  toggleReadAll: function(e) {
    let readArr = [];
    let readCheck = document.querySelectorAll('.readCheck');
    localSave.getStorage(); // to make sure storage and myLibrary are the same
    // creates an array with all the read values from myLibrary
    for (let key of myLibrary) {
      readArr.push(key.read);
    }
    // if every item in the array returns true, continue
    if(readArr.every((e) => e)) {
      for (let box of readCheck) {
        box.checked = false;
        view.isRead(box, box.checked)
        for (let key of myLibrary) {
          key.read = false;
        }
      }
    } else {
      for (let box of readCheck) {
        box.checked = true;
        view.isRead(box, box.checked)
        for (let key of myLibrary) {
          key.read = true;
        }
      }
    }
    localSave.setStorage(); 
  }
}

// display

const view = {
  displayLibrary: function() {
    bookTable.innerHTML = myLibrary.map((book, i) => {
      return `
      <div class="bookLine">
      <input  class="center readCheck" type="checkbox" data-index=${i} 
              id="book${i}" ${book.read ? 'checked' : ''}>
      <p class="bookLi${i}">${book.name}</p>
      <p class="bookLi${i}">${book.author}</p>
      <p class="bookLi${i} center">${book.pages}</p>
      <i class="fas fa-minus-circle center delIcon" data-index=${i}></i>
      </div>
      `;
    }).join('');  // using join('') to avoid auto commas 
  },
  displayForm: function() {
    bookForm.classList.add('displayForm');
  },
  removeForm: function() {
    bookForm.classList.remove('displayForm');
  },
  isRead: function(el, read) {
    if (read) {
      el.parentNode.classList.add('read');
    } else {
      el.parentNode.classList.remove('read');
    }
  },
  checkIfRead: function() {
    let readCheck = document.querySelectorAll('.readCheck');
    for (let box of readCheck) {
      if (box.checked) {
        view.isRead(box, box.checked)
      }
    }
  }
}

// Getting and setting localStorage

const localSave = {
  getStorage: function() {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  },
  setStorage: function() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  },
}

// sort
// const sorting = {
  // extraire dans un array la valeur qu'on veut sort
    // sort l'array
  // reconstruire l'objet depuis l'array 
// }

function sorting() {
  myLibrary.sort(function() {
    if(myLibrary.a < myLibrary.b) {
      return -1;
    }
  })
}

// event listeners

addBtn.addEventListener('click', view.displayForm);
resetBtn.addEventListener('click', buttons.resetBooks);
readAllBtn.addEventListener('click', buttons.toggleReadAll);
exitForm.addEventListener('click', view.removeForm);
addItems.addEventListener('submit', buttons.addBooks);
bookTable.addEventListener('click', buttons.deleteBooks);
bookTable.addEventListener('click', buttons.toggleRead);

// function calls
view.displayLibrary();
view.checkIfRead()
