let puzzleSequence = []; // To track the player's input sequence
const correctPattern = ["red", "red", "green", "red", "blue", "blue"]; // Correct sequence
let isPuzzleSolved = false; // Track if the puzzle is solved

function openPanel() {
    const simonSays = document.getElementById("simonSays");
    const closeButton = document.getElementById("closeButton");
    const simonButtons = document.getElementById("simonButtons");

    // Show Simon Says panel and close button
    simonSays.style.display = "block";
    closeButton.style.display = "block";

    // Show Simon Says buttons
    simonButtons.classList.remove("simonButtonsHide");

    // Reset the sequence if the puzzle is reopened
    puzzleSequence = [];
}

function handleSimonButtonClick(color) {
    puzzleSequence.push(color); // Add the clicked color to the sequence
    console.log(`Player clicked: ${color}, Current sequence: ${puzzleSequence.join(", ")}`);

    // Check the player's sequence against the correct pattern
    if (puzzleSequence.length <= correctPattern.length) {
        // Compare each input with the correct pattern
        for (let i = 0; i < puzzleSequence.length; i++) {
            if (puzzleSequence[i] !== correctPattern[i]) {
                alert("Incorrect sequence! Try again.");
                puzzleSequence = []; // Reset the sequence
                return;
            }
        }

        // If the full sequence matches, solve the puzzle
        if (puzzleSequence.length === correctPattern.length) {
            // Show Simon Says buttons
            simonButtons.classList.add("simonButtonsHide");
            solvePuzzle();
        }
    }
}

function openPanelCipher() {
    const newBoxImage = document.getElementById("simonButtonCipherImage");
    const newBoxCloseButton = document.getElementById("simonButtonCipherClose");

    // Show the image and close button
    newBoxImage.style.display = "block";
    newBoxCloseButton.style.display = "block";
}

function closePanelCipher() {
    const newBoxImage = document.getElementById("simonButtonCipherImage");
    const newBoxCloseButton = document.getElementById("simonButtonCipherClose");

    // Hide the image and close button
    newBoxImage.style.display = "none";
    newBoxCloseButton.style.display = "none";
}

function solvePuzzle() {
    alert("Congratulations! You solved the puzzle. Power is restored.");
    isPuzzleSolved = true;

    // Enable the door button
    const doorButton = document.getElementById("doorButton");
    if (doorButton) {
        doorButton.disabled = false;
    }

    // Close the puzzle panel
    // Show Simon Says buttons
    simonButtons.classList.add("simonButtonsHide");
    closeImage();
}

function closeImage() {
    const simonSays = document.getElementById("simonSays");
    const closeButton = document.getElementById("closeButton");
    const simonButtons = document.getElementById("simonButtons");

    if (simonSays) simonSays.style.display = "none";
    if (closeButton) closeButton.style.display = "none";

    // Keep Simon buttons visible only if the puzzle isn't solved
    if (!isPuzzleSolved) {
        simonButtons.classList.add("simonButtonsHide");
    }
}

function checkDoor() {
    if (!isPuzzleSolved) {
        alert("The door is locked. Solve the puzzle to restore power first.");
    } else {
        alert("The door is now unlocked! Proceeding to the next level...");
        window.location.href = "nextLevel.html"; // Redirect to the next level
    }
}

function goHome() {
    const confirmExit = confirm("Are you sure you want to exit to the home page? Any unsaved progress will be lost.");
    if (confirmExit) {
        window.location.href = "home.html"; // Redirect to the home page
    }
}