 // global variables
 let operateResult;
 let callback;
 let tempNum = null;
 let valueToDisplay = 0; 
 let valueString; // used for undo btn

 //basic calculation functions
 const operations = {
   add: function(num1, num2) {
     let addResult = num1 + num2;
     return addResult;
   },
   subtract: function(num1, num2) {
     let subResult = num1 - num2;
     return subResult;
   },
   multiply: function(num1, num2) {
     let multResult = num1 * num2;
     return multResult;
   },
   divide: function(num1, num2) {
     let divResult = num1 / num2;
     if (num2 === 0) {
       return 'ERROR';
     }
     return divResult;
   },
   operate: function(num1, num2, callback) {
     if (callback === this.add) {
     operateResult = this.add(num1, num2);
     } 
     else if (callback === this.subtract) {
       operateResult = this.subtract(num1, num2);
     }
     else if(callback === this.multiply) {
       operateResult = this.multiply(num1, num2);
     }
     else if (callback === this.divide) {
       operateResult = this.divide(num1, num2);
     }
     return operateResult;
   },
 }

 // basic work of calculator
 const operators = {
   addOperator: function() {
     callback = operations.add;
     if(tempNum != null) {
       valueToDisplay += tempNum;
       view.updateDisplay(valueToDisplay);
     }
     this.resetValues();
   },
   subOperator: function() {
     callback = operations.subtract;
     if(tempNum != null) {
       console.log('value to display', valueToDisplay);
       console.log('tempnum', tempNum);
       valueToDisplay = tempNum - valueToDisplay;
       view.updateDisplay(valueToDisplay);
     }
     this.resetValues();
   },
   multOperator: function() {
     callback = operations.multiply;
     if(tempNum != null) {
       valueToDisplay *= tempNum;
       view.updateDisplay(valueToDisplay);
     }
     this.resetValues();
   },
   divOperator: function() {
     callback = operations.divide;
     if(tempNum != null) {
       valueToDisplay = tempNum / valueToDisplay;
       view.updateDisplay(valueToDisplay);
     }
     this.resetValues();
   },
   equals: function() {
     if (tempNum === null) {
       valueToDisplay = 'ERROR';
       view.updateDisplay(valueToDisplay);
     } else {
       operations.operate(tempNum, valueToDisplay, callback);
       view.updateDisplay(operateResult);
       console.log(`tempNum ${tempNum} + valueToDisplay ${valueToDisplay} = result ${operateResult}`);
       // reset values to allow click on number after equal was clicked
       operators.resetAll();
     }
   },
   undo: function() {
     undoBtn.addEventListener('click', () => {
     if (valueToDisplay != 0) {
       valueString = valueToDisplay.toString();
       let len = valueString.length;
       valueToDisplay = valueString.slice(0, len - 1);
       valueString = parseFloat(valueToDisplay);
       console.log(typeof valueString);
       view.updateDisplay(valueString);
     } else if (valueToDisplay === '') {
       valueToDisplay = 0;
       view.updateDisplay(valueToDisplay);
     }
   })
   },
   //reset values after an operator was clicked
   resetValues: function() {
     tempNum = valueToDisplay;
     opUsed = true;
     valueToDisplay = 0;
   },
   resetAll: function() {
     tempNum = null;
     valueToDisplay = 0;
     callback = null;
     operateResult = 0;
     operator = null;
   },
 }

 // click handlers
 const handlers = {
   numberClicked: function() {
     const numberBtn = document.querySelectorAll('.nbBtn');
     numberBtn.forEach(btn => btn.addEventListener('click', () => {
       valueToDisplay += btn.innerHTML;
       valueToDisplay = parseFloat(valueToDisplay);
       view.updateDisplay(valueToDisplay)
       }))
   },
   operatorClicked: function() {
     const opBtns = document.querySelectorAll('.opBtn');
     opBtns.forEach(opBtn => opBtn.addEventListener('click', (e) => {
       if (e.target.id === 'addBtn') {
         operators.addOperator();
       } else if (e.target.id === 'subBtn') {
         operators.subOperator();
       } else if (e.target.id === 'multBtn') {
         operators.multOperator();
       } else if (e.target.id === 'divBtn') {
         operators.divOperator();
       }
     }))
   },
   equalClicked: function() {
     const equalBtn = document.querySelector('#equalBtn');
     equalBtn.addEventListener('click', operators.equals);
   },
   resetClicked: function() {
     const resetBtn = document.querySelector('#resetBtn');
     resetBtn.addEventListener('click', () => {
       operators.resetAll();
       view.updateDisplay(valueToDisplay);
     });
   },
   decimalClicked: function() {
     const decimalBtn = document.querySelector('#decimalBtn');
     decimalBtn.addEventListener('click', () => {
       valueToDisplay += decimalBtn.innerHTML;
       view.updateDisplay(valueToDisplay);
     })
   },
 }

  // updating what's displayed on the 'screen' of the calculator
  const view = {
   updateDisplay: function(value) {
     const displayScreen = document.querySelector('.display');
     displayScreen.innerHTML = value;
   },
 }
 
 handlers.operatorClicked();
 handlers.equalClicked();
 handlers.numberClicked();
 handlers.resetClicked();
 handlers.decimalClicked();
 operators.undo();

 // support clavier

 function keyboardHandler(e) {
   valueToDisplay += e.key;
   valueToDisplay = parseFloat(valueToDisplay);
   view.updateDisplay(valueToDisplay);
   if(e.key === '+') {
     operators.addOperator();
   } else if (e.key  === '-') {
       operators.subOperator();
   } else if (e.key === '*') {
       operators.multOperator();
   } else if (e.key === '/') {
       operators.divOperator();
   }
   if (e.key === 'Enter') {
     operators.equals();
   }
   if (e.key === '.') {
     valueToDisplay += e.key;
     
   }
 }

 window.addEventListener('keydown', keyboardHandler);
