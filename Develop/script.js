// Assignment code here


//Generator functions
//function to generate a random lowercase letter
var getRandomLower = function() {
  //I could place all the lowercase letters in an array and call them that way, but using the string object makes it simpler
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//function to generate a random uppercase letter
var getRandomUpper = function() {
  //I could place all the uppercase letters in an array and call them that way, but using the string object makes it simpler
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//function to generate random number
var getRandomNumber = function() {
  //I could place all the numbers in an array and call them that way, but using the string object makes it simpler
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//function to generate random symbol
var getRandomSymbol = function() {
  //place all symbols in an array
  var symbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]; 
  //use math.random to call a ramdom index in the array
  return symbols[Math.floor(Math.random() * 33)];
}

//function to randomly select which generator function to run 
var randomFunction = function() {
  var random = Math.floor(Math.random() * 4) + 1;
  switch(random) {
    case 1:
      getRandomLower();
      break;
    case 2:
      getRandomUpper();
      break;
    case 3:
      getRandomNumber();
      break;
    case 4:
      getRandomSymbol();
      break;
  }
}

//function to generate password
var generatePassword = function() {
  var passwordLength = window.parseInt(prompt("How many character's, between 8 and 128, would you like in your password?"));
  //if the prompt is answered correctly (there has to be a better way to do this)
  if(passwordLength === 8 || passwordLength === 9 || passwordLength === 10 || passwordLength === 11 || passwordLength === 12 || passwordLength === 13 || passwordLength === 14 || passwordLength === 15 || passwordLength === 16 || passwordLength === 17 || passwordLength === 18 || passwordLength === 19 || passwordLength === 20 || passwordLength === 21 || passwordLength === 22 || passwordLength === 23 || passwordLength === 24 || passwordLength === 25 || passwordLength === 26 || passwordLength === 27 || passwordLength === 28 || passwordLength === 29 || passwordLength === 30 || passwordLength === 31 || passwordLength === 32 || passwordLength === 33 || passwordLength === 34 || passwordLength === 35 || passwordLength === 36 || passwordLength === 37 || passwordLength === 38 || passwordLength === 39 || passwordLength === 40 || passwordLength === 41 || passwordLength === 42 || passwordLength === 43 || passwordLength === 44 || passwordLength === 45 || passwordLength === 46 || passwordLength === 47 || passwordLength === 48 || passwordLength === 49 || passwordLength === 50 || passwordLength === 51 || passwordLength === 52 || passwordLength === 53 || passwordLength === 54 || passwordLength === 55 || passwordLength === 56 || passwordLength === 57 || passwordLength === 58 || passwordLength === 59 || passwordLength === 60 || passwordLength === 61 || passwordLength === 62 || passwordLength === 63 || passwordLength === 64 || passwordLength === 65 || passwordLength === 66 || passwordLength === 67 || passwordLength === 68 || passwordLength === 69 || passwordLength === 70 || passwordLength === 71 || passwordLength === 72 || passwordLength === 73 || passwordLength === 74 || passwordLength === 75 || passwordLength === 76 || passwordLength === 77 || passwordLength === 78 || passwordLength === 79 || passwordLength === 80 || passwordLength === 81 || passwordLength === 82 || passwordLength === 83 || passwordLength === 84 || passwordLength === 85 || passwordLength === 86 || passwordLength === 87 || passwordLength === 88 || passwordLength === 89 || passwordLength === 90 || passwordLength === 91 || passwordLength === 92 || passwordLength === 93 || passwordLength === 94 || passwordLength === 95 || passwordLength === 96 || passwordLength === 97 || passwordLength === 98 || passwordLength === 99 || passwordLength === 100 || passwordLength === 101 || passwordLength === 102 || passwordLength === 103 || passwordLength === 104 || passwordLength === 105 || passwordLength === 106 || passwordLength === 107 || passwordLength === 108 || passwordLength === 109 || passwordLength === 110 || passwordLength === 111 || passwordLength === 112 || passwordLength === 113 || passwordLength === 114 || passwordLength === 115 || passwordLength === 116 || passwordLength === 117 || passwordLength === 118 || passwordLength === 119 || passwordLength === 120 || passwordLength === 121 || passwordLength === 122 || passwordLength === 123 || passwordLength === 124 || passwordLength === 125 || passwordLength === 126 || passwordLength === 127 || passwordLength === 128) {
    var optionConfirm = function() {
      //ask if user wants lowercase characters
      var lowerConfirm = window.confirm("Would you like to include lowercase characters?");

      //ask if user wants uppercase characters
      var upperConfirm = window.confirm("Would you like to include uppercase characters?");

      //ask if user wants numbers
      var numberConfirm = window.confirm("Would you like to include numbers?");

      //ask if user wants symbols
      var symbolConfirm = window.confirm("Would you like to include symbols?");

      if(lowerConfirm && upperConfirm && numberConfirm && symbolConfirm) {
        //for loop for generating random password at requested length
        for(var i = 1; i <= passwordLength; i++) {
          console.log(randomFunction());
        }
      }
      else{
        window.alert("You must select at least one character option.");
        optionConfirm();
      }
    };
    optionConfirm();

    
    //for loop for generating random password at requested length
    for(var i = 1; i <= passwordLength; i++) {
      
    }

  }
  //if the prompt is not answered with an integer between 8 and 128 ask again
  else{
    window.alert("Please input an integer between 8 and 128");

    generatePassword();
  }
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
