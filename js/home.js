// add money to the account 
/**
 * step-1: add event listener
 * prevent page reload after form submit
 * step-2: get money to be added to the account balance
 * 
 */

// step-1: add an event handler to the add money button 
console.log('hi');
document.getElementById('button-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
// step-2;get money to be added to the account balance
const addMoneyInput = document.getElementById('input-add-money').value;
// get the pin number provided
const pinNumberInput = document.getElementById('input-pin-number').value;


})