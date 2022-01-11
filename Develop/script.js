// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = window.prompt("Choose a Password Length between 8 and 12 characters?");

  let characterType = window.prompt("Please provide the Character Types you would like to include from the following: lowercase, uppercase, numeric, and /or special characters?");

  function generatePassword(){

  };
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
