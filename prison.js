// Function to open the wires panel (reveal image)
function openPanel() {
    const hiddenImage = document.getElementById('hiddenImage');
    const closeButton = document.getElementById('closeButton');
    
    // Show hidden image and close button
    hiddenImage.style.display = 'block';
    closeButton.style.display = 'block'; // Make close button visible
}

// Function to show another image (reveal image)
function showAnotherImage() {
    const anotherImage = document.getElementById('anotherImage');
    const closeButton = document.getElementById('closeButton');
    
    // Show another image and close button
    anotherImage.style.display = 'block';
    closeButton.style.display = 'block'; // Make close button visible
}

// Function to close the images (hide images and close button)
function closeImage() {
    const hiddenImage = document.getElementById('hiddenImage');
    const anotherImage = document.getElementById('anotherImage');
    const closeButton = document.getElementById('closeButton');
    
    // Hide both images and close button
    hiddenImage.style.display = 'none';
    anotherImage.style.display = 'none';
    closeButton.style.display = 'none'; // Hide close button
}



function cutWire(color) {
    if (color === "blue") {
        alert("Correct wire cut! Laser gate disabled.");
    } else {
        alert("Wrong wire! Try again.");
    }
}

function goHome() {
    const confirmExit = confirm("Are you sure you want to exit to the home page? Any unsaved progress will be lost.");
    if (confirmExit) {
        window.location.href = "home.html"; // Redirect to the home page
    }
}


