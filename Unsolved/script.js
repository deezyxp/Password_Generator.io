// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Generator Functions
function getRandomLcase() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

console.log(getRandomLcase());

function getRandomUcase() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

console.log(getRandomUcase());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}:?><'
  return symbols[Math.floor(Math.random()*symbols.length)];
}

console.log(getRandomSymbol());

// Password Variables

var passwordLength = 16
var password = ""




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
