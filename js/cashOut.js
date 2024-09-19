document.getElementById('button-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputCashOutField = document.getElementById('input-cashOut').value;
    const inputCashOutFieldNumber = parseFloat(inputCashOutField);
    const inputCashOutPin = document.getElementById('input-cash-out-pin').value;

if(inputCashOutPin === '123'){
    const currentBalance = document.getElementById('account-balance').innerText;
   const currentBalanceNumber = parseFloat(currentBalance);
   const newBalance = currentBalanceNumber - inputCashOutFieldNumber;
   
   document.getElementById('account-balance').innerText = newBalance;
   document.getElementById('input-cashOut').value = '';
   document.getElementById('input-cash-out-pin').value = '';
}
else{
    alert('Failed to Cash Out')
}
})