// add money to the account 
/**
 * step-1: add event listener
 * prevent page reload after form submit
 * step-2: get money to be added to the account balance
 * step-3: verify the pin number 
 */

// step-1: add an event handler to the add money button 
document.getElementById('button-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // step-2;get money to be added to the account balance
        const addMoneyInput = document.getElementById('input-add-money').value;
        // get the pin number provided
        const pinNumberInput = document.getElementById('input-pin-number').value;

        // step-3: verify pin number 
        // wrong way to validate pin number

        if (pinNumberInput === '123') {
           

            // step-4: get the current balance 
            const balance = document.getElementById('account-balance').innerText;

            // step-5: add AddMoney Input with balance 
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);

            const newBalance = addMoneyNumber + balanceNumber;
            

            // step-6: update the balance in the UI/DOM
            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('input-add-money').value = '';
            document.getElementById('input-pin-number').value = '';
        }
        else {
            alert('Failed to add money')
        }

    })