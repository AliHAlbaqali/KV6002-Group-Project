function openPanel() {
    const simonSays = document.getElementById('simonSays');
    const closeButton = document.getElementById('closeButton');
    const doorButton = document.getElementById('doorButton');

    // Show hidden image and close button
    simonSays.style.display = 'block';
    closeButton.style.display = 'block';

    if (doorButton) 
        { 
            doorButton.style.display = 'none'; doorButton.disabled = true; 
        }
}

function showAnotherImage() {
    const anotherImage = document.getElementById('anotherImage');
    const closeButton = document.getElementById('closeButton');

    // Show another image and close button
    anotherImage.style.display = 'block';
    closeButton.style.display = 'block';

}

function closeImage() {
    const simonSays = document.getElementById('simonSays');
    const anotherImage = document.getElementById('anotherImage');
    const closeButton = document.getElementById('closeButton');
    if (simonSays) {
        simonSays.style.display = 'none';

    } if (anotherImage) {
        anotherImage.style.display = 'none';

    }
    if (closeButton) {
        closeButton.style.display = 'none';
    }

    if (doorButton) { 
        doorButton.style.display = 'block'; doorButton.disabled = false; 
    }
}

function checkDoor() {
    const doorButton = document.getElementById('doorButton');

    if (!leftButtonClicked) {
        // If the left button hasn't been clicked
        alert("The door is locked. You need to explore the area first.");
    } else if (!isWireCutCorrectly) {
        // If the correct wire hasn't been cut yet
        alert("The door is locked by the power supply. Cut the correct wire first.");
    } else {
        // If both conditions are satisfied
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
