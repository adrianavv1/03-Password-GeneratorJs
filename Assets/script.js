var generateBtn = document.querySelector("#generate");

const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercaseElement')
const includeNumbersElement = document.getElementById('includeNumberElement')
const includeSymbolsElement = document.getElementById('includeSymbolslement')
const form= document.getElementById('passwordGeneratorForm')




// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols);
    String.fromCharCode(65)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function arrayFromLowToHigh(low, high) {
   const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

// Add event listener to generate button
form.addEventListener('submit', e=> {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase,
        includeNumbers, includeSymbols)
})

generateBtn.addEventListener("click", writePassword);
