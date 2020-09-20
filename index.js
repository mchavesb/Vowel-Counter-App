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

// Refresh the array.
document.querySelector(".inputs").addEventListener("click", function() {
  vowelCount = [];
});

// Restart the App.
document.querySelector("#heading").addEventListener("click", function() {
  document.querySelector(".vowels").innerHTML = "No entries yet!";
  document.querySelector("h5").innerHTML = "";
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
    } else if (text.charAt(i) === "á") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "é") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "í") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "ó") {
      vowelCount.push(1);
    } else if (text.charAt(i) === "ú") {
      vowelCount.push(1);
    }

    // Show the answer in an HTML.
    var h2 = document.querySelector(".vowels").innerHTML = "There are " + vowelCount.length + " vowels in this text: ";
    var p = document.querySelector("h5").innerHTML = text;
    // Reset everything to take another piece of text.
    document.querySelector("#placeH").value = "";
    document.querySelector("#placeH").placeholder;

  }
}
