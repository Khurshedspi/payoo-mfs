/**
 * 1. add event listener to the add money button (form submit)
 * make sure to preventDefault() so that page doesn't reloads 
 * 2. get the money user wants to add
 * also, get the pin number provided
 * 3. verify the pin number. for, wrong pin number ==> failed to add 
 * for right pin number, allow to add the number to the account balance
 * 
 * 4. get the current balance
 * 5. add money to be added with the current balance
 * 6. display / update the balance in the DOM / UI. 
 */

document.getElementById('button-add-money')
.addEventListener('click', function(event){
    event.preventDefault();


    const addMoneyInputField = document.getElementById('input-add-money').value;
    const addPinNumberInputField = document.getElementById('input-pin-number').value;
if(addPinNumberInputField === '123'){
    

    const currentBalance = document.getElementById('account-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);  
    const inputBalanceNumber = parseFloat(addMoneyInputField);
    
    const newBalance = currentBalanceNumber + inputBalanceNumber;
    
    document.getElementById('account-balance').innerText = newBalance;
    document.getElementById('input-add-money').value = '';
    document.getElementById('input-pin-number').value = '';
}
else{
    alert('OPPS! YOUR PIN NUMBER IS INCORRECT');
}

})