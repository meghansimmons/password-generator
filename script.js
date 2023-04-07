// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){

var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var specialChar = special.split("");

var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = lowerAlphabet.toUpperCase();
var lowerChar = lowerAlphabet.split("");
var upperChar = upperAlphabet.split("");

var numberChar = [0,1,2,3,4,5,6,7,8,9]

var characterArray = []; //array to hold caracter selection answers

// console.log(specialChar);
// console.log(numberChar);
// console.log(lowerChar);
// console.log(upperChar);



var passwordLength = prompt("How many characters would you like your password to contain?");
if (passwordLength >= 8 && passwordLength <= 128) {
  // console.log(passwordLength);
} else {
  alert ("The password must be at least 8 characters and at most 128 characters!");
  console.log("not correct length");
}

console.log(passwordLength);

// var pass = [];
// for(var i=0; i < passwordLength; i++ ){
//   console.log(i);
  var randomChar = numberChar[Math.floor(Math.random() * numberChar.length)];
  // console.log(randomChar);
//   pass.push(randomChar);

// }

console.log(randomChar);

if (confirm ("Click OK to confirm including special characters.") == true) {
  characterArray.push(true);
  console.log("OK for special characters");
} else {
  characterArray.push(false);
  console.log("NO for special characters");
}

if (confirm ("Click OK to confirm including numeric characters.") == true) {
  characterArray.push(true);
  console.log("OK for numeric characters");
} else {
  characterArray.push(false);
  console.log("NO for numeric characters");
}

if (confirm ("Click OK to confirm including lowercase characters.") == true) {
  characterArray.push(true);
  console.log("OK for lowercase characters");
} else {
  characterArray.push(false);
  console.log("NO for lowercase characters");
}

if (confirm ("Click OK to confirm including uppercase characters.") == true) {
  characterArray.push(true);
  console.log("OK for uppercase characters");
} else {
  characterArray.push(false);
  console.log("NO for uppercase characters");
}

if (characterArray.includes(true)) {
  console.log("OK for character");
} else {
  alert ("Must have at least one character type!");
  console.log("Must have at least one character type!");
}





return (passwordLength)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

