// Assignment code here
var symbolArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]; 
var lowerString = "abcdefghijklmnopqrstuvwxyz"
var lowerArray = lowerString.split("");

var upperArray = lowerString.toUpperCase().split("");
console.group(lowerArray, upperArray);

var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//Generator functions


//function to generate password
var askForOptions = function() {
  var passwordLength = parseInt(prompt("How many character's, between 8 and 128, would you like in your password?"));
  console.log(passwordLength);
  //if the prompt is answered correctly (there has to be a better way to do this)
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please select a value between 8 and 128");
    return askForOptions();
  }
    var superArray = [];
    //   //ask if user wants lowercase characters
      var lowerConfirm = confirm("Would you like to include lowercase characters?");
      if(lowerConfirm){
        superArray = superArray.concat(lowerArray);
      }

    //   //ask if user wants uppercase characters
     var upperConfirm = confirm("Would you like to include uppercase characters?");
      if(upperConfirm){
        superArray = superArray.concat(upperArray);
      }
    //   //ask if user wants numbers
      var numberConfirm = confirm("Would you like to include numbers?");
      if(numberConfirm){
        superArray = superArray.concat(upperArray);
      }
    //   //ask if user wants symbols
      var symbolConfirm = confirm("Would you like to include symbols?");
      if(symbolConfirm){
        superArray = superArray.concat(symbolArray)
      }
    

     if(!lowerConfirm && !upperConfirm && !numberConfirm && !symbolConfirm) {
       alert("Please select at least one character type!");
       return askForOptions();
     }
     var options = {
       passwordLength, 
       superArray
     }
     return options;
}
var generatePassword = function() {
  var myOptions = askForOptions();

  var results = [];

  for(i = 0; i < myOptions.passwordLength; i++){
    var index = Math.floor(Math.random() * myOptions.superArray.length);
    var passDigit = myOptions.superArray[index];
    results.push(passDigit);
  }
  return results.join("");
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

