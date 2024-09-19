// search: form submit reloading the page 
// step-1: set event handler
// document.getElementById('button-login').addEventListener('click', function(event){
   
//     // step-2: preventDefault behavior (prevent reloading browser)
//     event.preventDefault()
//     // step-3: get the phone number  and pin number
//     const phoneNumber = document.getElementById('phone-number').value;
//     // const newPhoneNumber = phoneNumber.value;

//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber);

//     // step-4: validate phone and pin 
//     // this is temporary, you should don't like this:

//     if(phoneNumber === '0157699' && pinNumber === '1234'){
//         console.log('you are logged in ');

//         // step-5: allow user to use the website 
//     }
//     else{
//         alert('Wrong phone or pin number')
//     }
// })


document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber === '015' && pinNumber === '123'){
        console.log('Successfully Login');
        window.location.href = '/home.html'
    }
    else{
        alert('Incorrect your Phone Number or Pin Number')
    }
})