// Assignment code here

var upperCaseSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCaseSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numberSet = ["0","1","2","3","4","5","6","7","8","9"]
var symbolSet= ["!","@","#","$","%","^","&","*","(",")"]

function generatePassword() {
  var passwordLength = parseInt( prompt("Enter desired length"));
  if(passwordLength < 8 || passwordLength > 128 && isNaN(passwordLength)){ // && AND || or ! NOT
    return "Please enter valid password length"
  }
  var yesUpper = confirm("Do you like to have Upper case alphabets? ")
  var yesLower = confirm("Do you want to include lowercase letters?")
  var yesNumber = confirm ("Do you want to include numbers?")
  var yesSymbol = confirm ("Do you want to include symbols?")
  var validChoices = []
  if(yesLower){
    validChoices = validChoices.concat(lowerCaseSet)
  }
  if(yesUpper){
    validChoices = validChoices.concat(upperCaseSet)
  }
  if(yesNumber){
    validChoices = validChoices.concat(numberSet)
  }
  if(yesSymbol){
    validChoices = validChoices.concat(symbolSet)
  }
  console.log(validChoices)
  var password = ""
  for(var i = 0; i < passwordLength ; i++){ // Iterator starting length; termination condition ; i = i +1 incremental value
     var index =  Math.floor(Math.random() * validChoices.length) // 0 to 1 - 0.2 0.25 0. 75
    password += validChoices[index]
  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
