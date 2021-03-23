// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordLength = prompt("Enter the length of your password")
  // if statement to determine that length is 8 - 128

  var hasSpecialCharacters = confirm("Include number")

  return
}

//Remember to create arrays for the characters being used
//Look at how to get the characters out of the array
//Use for loop to go through characters
// Use math random methods

window.alert("This is an alert");

var upperCaseText = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCaseText = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numbersZeroToNine = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ";", ":", "'", ",", "<", ".", ">", "/", "?"]

