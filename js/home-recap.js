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