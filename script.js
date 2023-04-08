// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";  //set string of special characters
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";  //lowercase letters to choose from
var upperAlphabet = lowerAlphabet.toUpperCase();  //create a string of uppercase letters from the lowercase letter string
var numberArray = [0,1,2,3,4,5,6,7,8,9]  //create array with numbers

var specialArray = special.split("");   //split string of special characters into an array of special characters
var lowerArray = lowerAlphabet.split("");  //split lowercase string into an array of lowercase letters
var upperArray = upperAlphabet.split("");  //split uppercase string into an array of uppercase letters

var typeBooleanArray = []; //array to hold type of character selection answers -true/false
var chosenCharArray = [];  //array with all chosen characters types (from confirm questions) to chose password from
var passwordArray = []; //array to hold password of chosen length 


function generatePassword(){
//Prompt user for length of password. Exit function if conditions are not met
var passwordLength = prompt("How many characters would you like your password to contain?");
if (passwordLength >= 8 && passwordLength <= 128) {
} else {
  alert ("The password must be at least 8 characters and at most 128 characters!");
  return("");
}

//Confirm with user on which types of characters to include in password.
//Create an array with answers from the confirm prompt
//Create an array with the chosen character types
if (confirm ("Click OK to confirm including special characters.") == true) {
  typeBooleanArray.push(true);
  chosenCharArray = chosenCharArray.concat(specialArray);
} else {
  typeBooleanArray.push(false);
}

if (confirm ("Click OK to confirm including numeric characters.") == true) {
  typeBooleanArray.push(true);
  chosenCharArray = chosenCharArray.concat(numberArray);
} else {
  typeBooleanArray.push(false);
}

if (confirm ("Click OK to confirm including lowercase characters.") == true) {
  typeBooleanArray.push(true);
  chosenCharArray = chosenCharArray.concat(lowerArray);
} else {
  typeBooleanArray.push(false);
}

if (confirm ("Click OK to confirm including uppercase characters.") == true) {
  typeBooleanArray.push(true);
  chosenCharArray = chosenCharArray.concat(upperArray);
} else {
  typeBooleanArray.push(false);
}

//Continue to password generation as long as at least one character type was chosen.
//If no character types were chosen, exit function
if (typeBooleanArray.includes(true)) {
} else {
  alert ("Must have at least one character type!");
  return("");
}


//for loop to choose random password. Both the length and character types are chosen by the user
for(var i=0; i < passwordLength; i++ ){
  passwordArray[i] = chosenCharArray[Math.floor(Math.random() * chosenCharArray.length)];  
}

//change password array to a string for output
var passwordString = passwordArray.join("");

return (passwordString)
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //clear arrays by setting length to zero
  passwordArray.length = 0;
  chosenCharArray.length = 0;
  typeBooleanArray.length = 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

