
function getPin() {
    // random number creation
    const pin = Math.round(Math.random() * 10000);
    // create pin as string 
    const pinString = pin + '';
    // 4 digit condition
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got three digit pin ', pin);
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function generatePin() {
    // call the getPin function 
    const pin = getPin();
    // get id to display value
    document.getElementById('display-pin').value = pin;
    // console.log(pin);
})

//-----------------------      calculator    ---------------

document.getElementById('key-pad').addEventListener('click', function (event) {
    // take the value 
    const number = event.target.innerText;
    // get the id 
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        // value
        calcInput.value = newNumber;
        //
    }

})

//---------------------------    match pin      --------------------

document.getElementById('submit-btn').addEventListener('click', function verifyPin() {
    // call display pin
    const pin = document.getElementById('display-pin').value;
    // call typed numbers
    const typedNumbers = document.getElementById('typed-numbers').value;

    // call the success id
    const successMessage = document.getElementById('notify-success');
    // call fail id
    const failError = document.getElementById('notify-fail');



    if (pin == typedNumbers) {
        
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
          
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
});