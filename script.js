// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
                         // Pretty sure I enter the password into here.
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// These prompts determine the character make-up and length of the desired password.
var passwordLength = prompt("Enter a number between 8 and 128")

var hasLower = prompt("Will this password have lower-case letters?")

var hasUpper = prompt("Will this password have upper-case letters?")

var hasNumber = prompt("Will this password contain numbers")

var hasSpecial = prompt("Will this password contain special characters?")


// If the user says yes to has lower, need to run ramdom lower-case function.
// If the user says yes to has uppper, need to run ramdom upper-case function.
// If the user says yes to has special characters, need to run random special function.
// Create a function for loop.
// Characters produced by randomonium are pushed into an array.
// Turn array into a string, defined length set by password length prompt.
// If statements for prompts.
// Try to change randomonium into an array.


// This generates a random lower-case character.
// It works by producing a decimal, multiplying the result by 26 and then adding 97. This is compared to the UTF-8 charset and a random character is chosen by it's numeric designation.
function randomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
// console.log(randomLowerCase());

// This follows the same process as the random lower-case, but starts selecting characters after UTF-8 position 65.
function randomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
// console.log(randomUpperCase());

// This function works the same as the two above, but with a string length of 10 to catch the numbers 0-9 that start from position 48 of the charset.
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    }
// console.log(randomNumber());

// This one is a little different. It establishes a string as a constant, then treats it as an array as it establishes a rounded down decimal no greater than the length of the string. Thereby returning a random special character.
function randomSpecial() {
    const special = "~!@#$%^&*()-+={}[];:<>,./?"
    return special[Math.floor(Math.random() * special.length)]
    }
// console.log(randomSpecial());

// This is an object created to store the returns from the randomizers.
var randoMonium = [randomLowerCase(), randomUpperCase(), randomNumber(), randomSpecial()]
console.log(randoMonium);