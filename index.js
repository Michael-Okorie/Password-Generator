const passwordLength = document.getElementById("passwordLength");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const password = document.getElementById("password");

function generatePassword(){

    let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()_+-=.,?/"
    let allowedChars = "";
    let generatedPassword = "";


    if(upperCase.checked){
        allowedChars += upperCaseChars
    }

    if(lowerCase.checked){
        allowedChars += lowerCaseChars
    };

    if(numbers.checked){
        allowedChars += numberChars
    };

    if(symbols.checked){
        allowedChars += symbolChars
    }


    if(allowedChars === ""){
        password.textContent = `Please select at least one character type`
        return;
    }

    if(passwordLength.value < 4 || passwordLength.value > 20){
        password.textContent = `Password length must be between 4 and 20`;
        return;
    }



    const length = passwordLength.value;

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPassword += allowedChars[randomIndex]
    }

    password.textContent = `${generatedPassword}`
}




