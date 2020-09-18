//Check Vowels with CLICK.
document.querySelector("#addNoteBtn").addEventListener("click", function() {
  checkVowel();
});

// Check Vowels with Enter.
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkVowel();
  }
});

// Arrays for the FUNCTION.
var vowelCount = [];

// Function for the Vowel Count.
function checkVowel() {
  // Get the information from the INPUT.
  var text = document.querySelector(".inputs").value;

  var textLength = text.length;

  document.querySelector(".inputs").placeholder = "Enter a piece of text";

  // Logic for the Vowel Count.
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "a") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "e") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "i") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "o") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "u") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "A") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "E") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "I") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "O") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "U") {
      vowelCount.push(1);
    }
  }

  // Show the answer with an ALERT
  alert("There are " + vowelCount.length + " vowels!");

  vowelCount = [];
  document.querySelector("#placeH").value = "";

  document.querySelector("#placeH").placeholder;

}
