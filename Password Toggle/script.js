// Romika Chaudhary
// March 10, 2024
// Day 33

function toggleVisibility() {
    var enteredPassword = document.getElementById("userInput");
    if (enteredPassword.type === "password") {
        enteredPassword.type = "text";
    }
    else {
        enteredPassword.type = "password";
    }
}