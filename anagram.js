let leftButtonClicked = false; // Tracks whether the left anagram image button has been clicked
let isCodeEnteredCorrectly = false; // Tracks if the correct code has been entered

// Function to handle the left button click (shows the anagram image)
function showAnagramImage() {
    const anagramImage = document.getElementById('anagramImage');
    const closeButton = document.getElementById('closeButton');

    // Show the anagram image and close button
    anagramImage.style.display = 'block';
    closeButton.style.display = 'block';

    // Mark the left button as clicked
    leftButtonClicked = true;
    console.log("Left button clicked: Anagram image displayed.");
}

// Function to handle panel button click (to open input box)
function openInputBox() {
    if (!leftButtonClicked) {
        // If the anagram image hasn't been viewed yet, warn the user
        alert("You need to look around first before attempting to use the panel.");
        return;
    }

    // Show the browser prompt for the user to input the code
    const userInput = prompt("Enter the answer to unlock the door:");

    if (userInput) {
        checkAnagramAnswer(userInput.trim().toLowerCase());
    } else {
        alert("You must enter a code to proceed.");
    }
}

// Function to check the answer entered for the anagram
function checkAnagramAnswer(answer) {
    if (answer === "unlock door") {
        alert("Correct! The door is now unlocked.");
        isCodeEnteredCorrectly = true; // The correct answer has been entered
    } else {
        alert("Incorrect answer. Try again.");
    }
}

// Function to handle door click
function checkDoor() {
    // First check if the left button was clicked (i.e., anagram image shown)
    if (!leftButtonClicked) {
        alert("The door is locked. You need to look around the room first.");
        return;
    }

    // Check if the code has been entered correctly
    if (!isCodeEnteredCorrectly) {
        alert("The door is still locked. You need to input the correct code first.");
        return;
    }

    // If both conditions are met, proceed to the next level
    alert("The door is now unlocked! Proceeding to the next level...");
    setTimeout(() => {
        window.location.href = "escapePod.html"; // Redirect to the next level
    }, 2000);
}

// Function to close the anagram image
function closeImage() {
    const anagramImage = document.getElementById('anagramImage');
    const closeButton = document.getElementById('closeButton');

    // Hide the anagram image and close button
    anagramImage.style.display = 'none';
    closeButton.style.display = 'none';

    console.log("Anagram image closed.");
}

// Function to handle home button click
function goHome() {
    const confirmExit = confirm("Are you sure you want to exit to the home page? Any unsaved progress will be lost.");
    if (confirmExit) {
        window.location.href = "home.html"; // Replace with the actual path to your home page
    }
}
