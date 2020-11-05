// VERSION 1 : ARRAYS

// 1. it should have a place to store todos

    // a list in JS is an array
    ['item 1', 'item 2', 'item 3']  

    // we need a way to access this array
    var todos = ['item 1', 'item 2', 'item 3']

// 2. it should have a way to display todos

    // display with console.log()
    console.log(todos);
    console.log('My todos :', todos);

// 3. it should have a way to add new todos

    // command .push
    todos.push('item 4');

// 4. it should have a way to change a todo

    // todos with brackets with the index of the item we want to change
    todos[0]

    // add = to update the value
    todos[0] = 'item 1 updated';

// 5. it should have a way to delete todos

    // command .splice with index position we want to delet and how many items we want to delete
    todos.splice(0, 1); // we wand to delete starting from 0 (first item) and only 1 item

// VERSION 2 : FUNCTIONS

// 1. It should have a function to display todos

    function displayTodos() {
        console.log('My todos :', todos);
    }
    // calling the function
    displayTodos();

// 2. It should have a function to add todos

    function addTodos() {
        todos.push('new todo');
    }

    // adding the function displayTodos() to see the new todo when you call addTodos
    function addTodos() {
        todos.push('new todo');
        displayTodos();
    }

    // customizing the function to add the item we want and not 'new todo' every time
    function addTodos(todo) {
        todos.push(todo);
        displayTodos();
    }

    addTodos('new item');

// 3. It should have a function to change todos

    function changeTodo() {
        todos[0] = 'some new value';
    }

    // we want to be able to chose the item we need to change, and the value we want to add
    // we need the function to have 2 parameters
    function changeTodo(position, newValue) {
        todos[position] = newValue;
        displayTodos();
    }


// 4. It should have a function to delete todos

    function deleteTodos(position) {
        todos.splice(position, 1);
        displayTodos();
    }

// if you're inside of a function, you can look out and see data, but the opposite is not true.
// if you're outside, you can't look in.

// VERSION 3 : OBJECTS
    // what is an object
    var objectName = {
        propertyOne: value1,
        propertyTwo: value2,
        propertyThree: value3
    };

    // accessing value
    objectName.propertyOne // return value1 

    // we can put a function inside an object
    // lauric.sayName print out the entire object
    var lauric = {
        name: 'Lauric',
        sayName: function() {   // we don't need to name the function as we access the function with the property name
            console.log(this);  // 'this' when inside a function inside an object refers to the entire object
        }
    };

    // we only want to access and print name
    // lauric.sayName print out 'Lauric'
    var lauric = {
        name: 'Lauric',
        sayName: function() {
            console.log(this.name); 
        }
    };

    // putting a function on an object is called a method
    // a property equals to a function is a method

// 1. It should store the todos array on an object

    var todoList = {
        todos: ['item 1', 'item 2', 'item 3'],
    };

// 2. It should have a display todos method

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],    
    displayTodos: function() {                  // adding the method
      console.log('My todos: ', this.todos);    // this references the object
    }
  };
// 3. It should have a add todos method
    var todoList = {
        todos: ['item 1', 'item 2', 'item 3'],    
        displayTodos: function() {                
        console.log('My todos: ', this.todos);
        },
        addTodo: function (todo) {              // adding the method with the parameter
        this.todos.push(todo);                  // this refers to the object
        this.displayTodos();                    // accessing the function displayTodos with this as it is inside the object
        },
    };

// 4. It should have a change todos method

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],    
    displayTodos: function() {                
    console.log('My todos: ', this.todos);
    },
    addTodo: function (todo) {              
    this.todos.push(todo);                  
    this.displayTodos();                    
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
};

// 5. It should have a delete todos method

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],    
    displayTodos: function() {                
    console.log('My todos: ', this.todos);
    },
    addTodo: function (todo) {              
    this.todos.push(todo);                  
    this.displayTodos();                    
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
};

// all the stuff related to the To Do List is inside an object

// VERSION 4 : BOOLEANS

// 1. todoList.addTodo should add objects

    // object is a way to represent more complicated data
    {
        todoText: 'item 1',
        completed: false,                           // boolean value if completed or not
    }

    // modifying the previous object
    var todoList = {
        todos: [],                                  // leaving blank because we're going to have objects instead    
        displayTodos: function() {                
        console.log('My todos: ', this.todos);
        },
        addTodo: function (todoText) {              // changing to todoText              
        this.todos.push({                           // we are adding an object, not just text
            todoText: todoText,
            completed: false,                       
        });                  
        this.displayTodos();                    
        },
        changeTodo: function(position, newValue) {
            this.todos[position] = newValue;
            this.displayTodos();
        },
        deleteTodo: function(position) {
            this.todos.splice(position, 1);
            this.displayTodos();
        },
    };

// 2. todoList.changeTodo should change the todoText property

    var todoList = {
        todos: [],                                      
        displayTodos: function() {                
        console.log('My todos: ', this.todos);
        },
        addTodo: function (todoText) {                          
        this.todos.push({                           
            todoText: todoText,
            completed: false,                       
        });                  
        this.displayTodos();                    
        },
        changeTodo: function(position, todoText) {      // changing newValue to todoText
            this.todos[position].todoText = todoText    // this.todo is now an object, we want to change only the text property: .todoText
            this.displayTodos();
        },
        deleteTodo: function(position) {
            this.todos.splice(position, 1);
            this.displayTodos();
        },
    };

// 3. todoList.toggleCompleted should flip the completed property

var todoList = {
    todos: [],                                      
    displayTodos: function() {                
    console.log('My todos: ', this.todos);
    },
    addTodo: function (todoText) {                          
    this.todos.push({                           
        todoText: todoText,
        completed: false,                       
    });                  
    this.displayTodos();                    
    },
    changeTodo: function(position, todoText) {      
        this.todos[position].todoText = todoText    
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {           // new method allowing to switch the property between true and false
        var todo = this.todos[position];            // we want to access a specific position - var todo saves the need to type this.todos[position].completed
        todo.completed = !todo.completed;           // we want the todo.completed to be the opposit (with !)
        this.displayTodos();
    }
};

// VERSION 5 : LOOPS

// 1. displayTodos should show .todoText

    displayTodos: function() {                
        console.log('My todos: ', this.todos);
            for (var i = 0; i < this.todos.length; i++) {   // looping through the array with todos.length
                this.todos[i].todoText;                     // accessing the todoText property of a todos item 
            }
        },

// 2. displayTodos should tell if .todos is empty

    displayTodos: function() {                
        if (this.todos.length === 0) {                      // testing if the todos is empty
            console.log(`You don't have todos`);
        } else {
            console.log('My todos: ', this.todos);
            for (var i = 0; i < this.todos.length; i++) {   
                console.log(this.todos[i].todoText);                     
            }
          }    
        },

// 3. displayTodos should show .completed
        // inside the for loop
        if (this.todos[i].completed === true) {             // check if .completed is true
            console.log('(x)', this.todos[i].todoText);     // print with (x)
        } else {
            console.log('( )', this.todos[i].todoText);     // print with ( )
        }

// VERSION 6 : THINKING IN CODE

// 1. .toggleAll : if everything is true, make everything false
        // new method toggleAll
        toggleAll: function () {
            var totalTodos = this.todos.length              // variable with the total number of todos
            var completedTodos = 0;                         // variable with the number of completed todos (starts at 0)

            for (var i = 0; i < totalTodos; i++) {   // looping through the array of todos
                if (this.todos[i].completed === true) {     // if the the todo is completed
                    completedTodos++;                       // update the number of completed todos
                }
            }

            if (completedTodos === totalTodos) {            // if the number of completed todos is equals to the number of total todos
                for (var i = 0; i < totalTodos; i++) {      // looping through the array of todos
                    this.todos[i].completed = false;        // changing the status to not complete
                }
            }             
        }

// 2. .toggleAll : otherwise, make everything true
        // otherwise = else
        else {
            for (var i = 0; i < totalTodos; i++) {          // looping through array
                this.todos[i].completed = true;
            }
        }

// VERSION 7 : HTML AND THE DOM

// 1. There should be a "Display todos" button and a "Toggle all" button

    <button>Display todos</button>
    <button>Toggle all</button>

// 2. Clicking "Display todos" should run todoList.displayTodos()

    // we want to get access to the display todos button

    const displayTodosButton = document.querySelector('displayTodosButton');

    // we want to run displayTodos when the button is clicked

    displayTodosButton.addEventListener('click', () => {
        todoList.displayTodos();
    });

// 3. Clicking "Toggle all" should un todoList.toggleAll()

    const toggleAllButton = document.querySelector('#toggleAllButton');

    toggleAllButton.addEventListener('click', () => {
      todoList.toggleAll();
    });

// VERSION 8 : GETTING DATA FROM INPUT

// Refactoring
    <button onclick="handlers.displayTodos()">Display todos</button>
    <button onclick="handlers.toggleAll()">Toggle all</button>

    var handlers = {
        displayTodos: function() {
            todoList.displayTodos();
        },
        toggleAll: function () {
            todoList.toggleAll();
        },
    }

// 1. There should be a button for adding todos

    <div>
        <button onclick="handlers.addTodo()">Add</button> 
        <input id="addTodoTextInput" type="text"></input>
    </div>

    var handlers = {
        displayTodos: function() {
            todoList.displayTodos();
        },
        toggleAll: function () {
            todoList.toggleAll();
        },
        addTodo: function () {
            var addTodoTextInput = document.querySelector('#addTodoTextInput');
            todoList.addTodo(addtodoTextInput.value);
            addTodoTextInput.value = ''; // to clear the input after we typed in the todo
        },
    };

// 2. There should be a button for changing todos

    <div>
        <button onclick="handlers.changeTodo()">Change todo</button>
        <input id="changeTodoPosition" type="number"></input>
        <input id="changeTodoTextInput" type="text"></input>
    </div>

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
    },
    addTodo: function () {
        var addTodoTextInput = document.querySelector('#addTodoTextInput');
        todoList.addTodo(addtodoTextInput.value);
        addTodoTextInput.value = ''; // to clear the input after we typed in the todo
    },
    changeTodo: function() {
        var changeTodoPosition = document.querySelector('#changeTodoPosition');
        var changeTodoTextInput = document.querySelector('#changeTodoTextInput');
        todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value); //.valueAsNumber is used because we don't need the value as a string
        changeTodoPosition.value = '';
        changeTodoTextInput.value = '';
    }
};

// 3. There should be a button for deleting todos

    <div>
        <button onclick="handlers.deleteTodo()">Delete</button>
        <input id="deleteTodoPosition" type="number"></input>
    </div>

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
    },
    addTodo: function () {
        var addTodoTextInput = document.querySelector('#addTodoTextInput');
        todoList.addTodo(addtodoTextInput.value);
        addTodoTextInput.value = ''; // to clear the input after we typed in the todo
    },
    changeTodo: function() {
        var changeTodoPosition = document.querySelector('#changeTodoPosition');
        var changeTodoTextInput = document.querySelector('#changeTodoTextInput');
        todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value); //.valueAsNumber is used because we don't need the value as a string
        changeTodoPosition.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function () {
        var deleteTodoPosition = document.querySelector('#deleteTodoPosition');
        todoList.deleteTodo(deleteTodoPosition.valueAsNumbers);
        deleteTodoPosition.value = '';
    }
};

// 4. There should be a button for toggling a todo

    <div>
        <button onclick="handlers.toggleCompleted()">Toggle Completed<</button>
        <input id="toggleCompletedPosition" type="number"></input>
    </div>

    var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
    },
    addTodo: function () {
        var addTodoTextInput = document.querySelector('#addTodoTextInput');
        todoList.addTodo(addtodoTextInput.value);
        addTodoTextInput.value = ''; // to clear the input after we typed in the todo
    },
    changeTodo: function() {
        var changeTodoPosition = document.querySelector('#changeTodoPosition');
        var changeTodoTextInput = document.querySelector('#changeTodoTextInput');
        todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value); //.valueAsNumber is used because we don't need the value as a string
        changeTodoPosition.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function () {
        var deleteTodoPosition = document.querySelector('#deleteTodoPosition');
        todoList.deleteTodo(deleteTodoPosition.valueAsNumbers);
        deleteTodoPosition.value = '';
    },
    toggleCompleted: function () {
        var toggleCompletedPosition = document.querySelector('#toggleCompletedPosition');
        todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
        toggleCompletedPosition.value = '';
    },
};

</div>

// VERSION 9 : ESCAPE FROM THE CONSOLE

// Inserting li element into the DOM
    <ul></ul>

    var todoLi = document.createElement('li');  // we can insert li
    var todosUl = document.querySelector('ul'); // we can select the ul

    todosUl.appendChild(todoLi);                // insert the li into the ul

// 1. There should be a li element for every todo

    var view = {
        displayTodos: function () { 
            var todosUl = document.querySelector('ul');
            todosUl.innerHTML = '';                     // clear out the list to add new item 
            for (let i = 0; i < todoList.length; i++) {
                var todoLi = document.createElement('li'); 
                todosUl.appendChild(todoLi); 
            }
        }
    }

// 2. Each li element should contain .todoText
    for (let i = 0; i < todoList.length; i++) {
        var todoLi = document.createElement('li'); 
        todoLi.textContent = todoList.todos[i].todoText;    // adding todoText of todos[i] to the textContent of todoLi
        todosUl.appendChild(todoLi); 
    }   

// 3. Each li element should show .completed

    // inside the for loop

    // '(x) todoText'    = we want the text to be shown like this if completed
    // var todoTextWithCompletion = ''  = we put this into a variable
    // if (todo.completed === true) 
        // (x) todoText
    // else
        // ( ) todoText
    // todoLi.textContent = todoTextWithCompletion;

    var todo = todoList.todos[i]; // we don't have reference to todo so we create it instead of having to type todoList.todos[i]

    var todoTextWithCompletion = '';
    if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
    } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
    }

    todoLi.textContent = todoTextWithCompletion;

// 4. Escaping the console

    // we want view.displayTodos to run every time data changes
    // the right place would be at the end of the handlers
    // = add view.displayTodos at the end of every handler
    // we don't need handlers.displayTodos() anymore

// VERSION 10 : CLICK TO DELETE

// 1. There should be a way to create delete buttons

    // add new method inside view

    createDeleteButton: function () {
        var deleteButton = document.createElement('button');    // creates button
        deleteButton.textContent = 'Delete';                    // creates a button with the text Delete
        deleteButton.className = 'deleteButton';                // add a class name to deleteButton
        return deleteButton;
    }

// 2. There should be a delete button for each todo

    // inside view.displayTodos
    todoLi.appendChild(this.createDeleteButton());

// 3. Each li should have an ID that has the todo position

    // inside view.displayTodos for loop
    todoLi.id = i; // i is going to be equal to each position in the array

// 4. Delete buttons should have access to the todo ID

    // we only add one event listener on the ul as it's the parent element of li = event delegation
    // target lets us know which element was clicked on
    // there the target gives us the deleteButton, but deleteButton don't have ID
    var todosUl = document.querySelector('ul');
    
    todosUl.addEventListener('click', function (event) {
            console.log(event);
        });

    // we need to access the ID of the li element with parentNode
    // event : the click
    // target: deleteButton
    // parentNode: the parent of deleteButton = li
    // id : the id of the parent node
    todosUl.addEventListener('click', function (event) {
        console.log(event.target.parentNode.id);
    });

// 5. Clicking delete should update todoList.todos and the DOM
    // => inside the todosUl.addEventListener
    // get the element that was clicked on
    var elementClicked = event.target;

    // check if elementClicked is deleteButton
    if (elementClicked.className === 'deleteButton') {
        // run handlers.deleteTodo(position)
        // elementClicked.parentNode.id is a string. parseInt will convert it into a number
        // parseInt(elementClicked.parentNode.id);
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); // passes the position (id) into the handlers
    }

    // We need first to change the handlers.deleteTodo
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
      },

    // put code into view object
    setUpEventListeners: function () {
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function (event) {
            var elementClicked = event.target;
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        }
    }

// VERSION 11 : DESTROY ALL FOR LOOPS

// 1. todoList.toggleAll should use forEach

    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        this.todos.forEach(function(todo) {             // pass the function into each element of the array
            if (todo.completed === true) {              // todo refers to each item of the array (replaces this.todo[i])
                completedTodos++;
            }
        });   

        if (completedTodos === totalTodos) {
                this.todos.forEach(function (todo) {
                todo.completed = false;
            });
        }
        } else {
            this.todos.forEach(function(todo) {
                todo.completed = true;
            });
        }
        }
    }

    // we can collapse the forEach and make it one outside and put the if inside
    this.todos.forEach(function(todo) {
        if (completedTodos === totalTodos) {
            todo.completed = false;
        } else {
            todo.completed = true;
        }
    });

// 2. view.displayTodos should use forEach

    displayTodos: function () {
        const todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        todoList.todos.forEach(function(todo, position) {           // forEach adds another parameter position
            var todoLi = document.createElement('li');
            
            var todoTextWithCompletion = '';
    
            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
    
            todoLi.id = position;                               // we reference the position here
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
            }
        }, this);                                               // we add 'this' as argument of the function
    },                                                          // inside a callback function, 'this' refers to the function, 
                                                                // not the object. 