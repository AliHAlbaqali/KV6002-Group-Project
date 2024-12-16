let leftButtonClicked = false; // Tracks whether the left button has been clicked
let isWireCutCorrectly = false; // Tracks whether the correct wire has been cut

// Function to open the wires panel
function openPanel() {
    const hiddenImage = document.getElementById('hiddenImage');
    const closeButton = document.getElementById('closeButton');
    const wireButtons = document.querySelectorAll('.wireButton');

    // Show hidden image and close button
    hiddenImage.style.display = 'block';
    closeButton.style.display = 'block';

    // Show wire buttons
    wireButtons.forEach((button) => {
        button.style.display = 'block';
    });
}

// Function to handle the left button click
function showAnotherImage() {
    const anotherImage = document.getElementById('anotherImage');
    const closeButton = document.getElementById('closeButton');

    // Show another image and close button
    anotherImage.style.display = 'block';
    closeButton.style.display = 'block';

    // Mark left button as clicked
    leftButtonClicked = true;
}

// Function to handle wire button click
function cutWire(color) {
    if (!leftButtonClicked) {
        // If the left button wasn't clicked, display a warning message
        alert("Be careful! You don't know what you're doing. Try looking around first.");
    } else {
        // If the left button was clicked, handle the wire cutting logic
        if (color === "blue") {
            alert("Correct wire cut! Laser gate disabled.");
            isWireCutCorrectly = true; // Correct wire cut, enable door
        } else {
            alert("Wrong wire! Try again.");
        }
    }
}

// Function for the door button
function checkDoor() {
    const doorButton = document.getElementById('doorButton');
    
    if (!leftButtonClicked) {
        alert("The door is locked. You need to explore the area first.");
    } else if (!isWireCutCorrectly) {
        alert("The door is locked by the power supply. Cut the correct wire first.");
    } else {
        alert("The door is now unlocked! Proceeding to the next level...");
        window.location.href = "securityRoom.html"; // Redirect to the next level
    }
}

// Function to close the images and wire buttons
function closeImage() {
    const hiddenImage = document.getElementById('hiddenImage');
    const anotherImage = document.getElementById('anotherImage');
    const closeButton = document.getElementById('closeButton');
    const wireButtons = document.querySelectorAll('.wireButton');

    // Hide both images and close button
    hiddenImage.style.display = 'none';
    anotherImage.style.display = 'none';
    closeButton.style.display = 'none';

    // Hide wire buttons
    wireButtons.forEach((button) => {
        button.style.display = 'none';
    });
}

// Function to go home
function goHome() {
    const confirmExit = confirm("Are you sure you want to exit to the home page? Any unsaved progress will be lost.");
    if (confirmExit) {
        window.location.href = "home.html"; // Redirect to the home page
    }
}
