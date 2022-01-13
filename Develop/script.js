var choices;
var numberConfirm;
var userNum = 0;

function shuffleArray(lowerCase) {
  lowerCase[Math.floor(Math.random()*lowerCase.length)];
}
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
shuffleArray(lowerCase);
console.log(lowerCase);
// end of randomizing for lowerCase

//starts randomizing upperCase
function shuffleArray(upperCase) {
  upperCase.sort(() => Math.random() - 0.5);
}
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
shuffleArray(upperCase);
console.log(upperCase);
//end of randomzizing upperCase

//start of randomizing numbers
function shuffleArray(number) {
  number.sort(() => Math.random() - 0.5);
}
let number = ["1", "2", "3", "4", "5", "6", "7","8","9","0"];
shuffleArray(number);
console.log(number);
// end of randomizing numbers

//start of randomizing specialChar
function shuffleArray(number) {
  number.sort(() => Math.random() - 0.5);
}
let specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+","=","?"];
shuffleArray(specialChar);
console.log(specialChar);
//end of randomizing specialChar



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// start ask for passwordLength
function writePassword() {
  passwordLength = parseInt(window.prompt("Choose a Password Length between 8 and 128 characters."));
  if (passwordLength <= 128 && passwordLength >= 8) {
    alert ("Your password will be " + passwordLength + " characters long.");
  }
  else {
    alert("Please enter a value between 8 and 128.");
    writePassword();
  }
  //end of ask for passwordLength

  //start of ask for upperCase
  upperCaseConfirm = confirm("Would you like your password to contain uppercase letters? Click 'Okay' if yes, or 'Cancel' for no");
  if (upperCaseConfirm) {
    console.log("Your password will contain uppercase letters.");
  }
  else { (upperCaseConfirm) 
    console.log("Your password will NOT contain uppercase letters.");
  }
  //end of ask for upperCase

  //start of ask for lowerCase
  lowerCaseConfirm = confirm("Would you like your password to contain lowercase letters? Click 'Okay' if yes, or 'Cancel' for no");
  if (lowerCaseConfirm) {
    console.log("Your password will contain lowercase letters.");
  }
  else {
    console.log("Your password will NOT contain lowercase letters.");
  }
  // end of ask for lowerCase

  //start of ask for number
  numberConfirm = confirm("Would you like your password to contain numerical values? Click 'Okay' if yes, or 'Cancel' for no");
  if (numberConfirm) {
    console.log("Your password will contain numerical values.");
  }
  else {
    console.log("Your password will NOT contain numerical values.");
  }
  //end of ask for number

  //start of ask for specialChar
  specialCharConfirm = confirm("Would you like your password to contain special characters? Click 'Okay' if yes, or 'Cancel' for no");
  if (specialCharConfirm) {
    console.log("Your password will contain special characters.");
  }
  else {
    console.log("Your password will NOT contain special characters.");
  }
 //end of ask for specialChar

 //if statements for options
  var password = [];
  for (let i = 0; i < passwordLength; i++) {
    if (lowerCaseConfirm) {
      password.push(lowerCase[[Math.floor(Math.random()*lowerCase.length)]]);
      console.log(password);
    }
    if (upperCaseConfirm) {
      password.push(upperCase[Math.floor(Math.random()*upperCase.length)]);
      console.log (password);
    }
    if (specialCharConfirm) {
      password.push(specialChar[Math.floor(Math.random()*specialChar.length)]);
      console.log (password);
    }
    if (numberConfirm) {
      password.push(number[Math.floor(Math.random()*number.length)]);
      console.log (password);
    }
  }
  
  var finalPass = password.slice(0, passwordLength);
  console.log(finalPass);
  

  document.getElementById("password").value = finalPass.join("");
}

  
generateBtn.addEventListener("click", writePassword);
