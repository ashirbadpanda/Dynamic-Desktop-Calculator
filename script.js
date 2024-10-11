function clearDisplay(){
  document.getElementById('display').value = '';
}


//display the value 
function appendToDisplay(value){
  document.getElementById('display').value += value;
}

//performs operations
function calculateResult(){
  try{
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }catch(err){
    document.getElementById('display').value = 'Error';
  }
}

//backspace one 
function backSpaceOne(){
  let currentDisplay = document.getElementById('display').value;
  document.getElementById('display').value = currentDisplay.slice(0, -1);
}

