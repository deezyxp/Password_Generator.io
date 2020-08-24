// Assignment Code

// Write password to the #password input

  const generateButton = document.getElementById('generate')
  const passwordEl = document.getElementById('password');
  const lengthEl = document.getElementById('length');
  const uppercaseEl = document.getElementById('uppercase');
  const lowercaseEl = document.getElementById('lowercase');
  const numbersEl = document.getElementById('numbers');
  const symbolsEl = document.getElementById('symbols');
  const generateEl = document.getElementById('generate');

const upperchar = arrayFromLowToHigh(65, 90)
const lowerchar = arrayFromLowToHigh(97, 122)
const numberchar = arrayFromLowToHigh(48, 57)
const symbolchar = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


  // Event Listener
  generateButton.addEventListener('click',(event)=>{
    event.preventDefault()
    const length = lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    const password = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol)
    passwordEl.value = password
  })

  function generatePassword(length,  uppercase, lowercase, numbers, symbols) {
    let charCodes = []
    if (uppercase) charCodes = charCodes.concat(upperchar)
    if (symbols) charCodes = charCodes.concat(symbolchar)
    if (numbers) charCodes = charCodes.concat(numberchar)
    if (lowercase) charCodes = charCodes.concat(lowerchar)

    const passwordCharacters = []
    for (let i = 0; i < length; i++) {
      const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
  }

  function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }
  
  function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
  }