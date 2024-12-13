let camerasSeen = false; 
let keyUnlocked = false; 

let cameraIndex = 0;
const cameraImages = ["storage.png", "meeting.png", "bar.png"]; 

function openCamera() {
    const cameraImage = document.getElementById('cameraImage');
    const closeButton = document.getElementById('closeButton');
    const prevCamera = document.getElementById('prevCamera');
    const nextCamera = document.getElementById('nextCamera');
    const clueButton = document.getElementById('paper'); // The clue button

    if (!cameraImage) {
        console.error("cameraImage not found!");
        return;
    }

    camerasSeen = true;
    cameraImage.src = cameraImages[cameraIndex]; // Set the first camera image
    cameraImage.style.display = 'block';
    closeButton.style.display = 'block';

    prevCamera.style.display = 'inline-block';
    nextCamera.style.display = 'inline-block';

    // Show or hide clue button based on the camera being displayed
    toggleClueButton();
}

function changeCamera(direction) {
    const cameraImage = document.getElementById('cameraImage');
    const clueButton = document.getElementById('paper'); // The clue button

    if (direction === 'prev') {
        cameraIndex = (cameraIndex - 1 + cameraImages.length) % cameraImages.length;
    } else if (direction === 'next') {
        cameraIndex = (cameraIndex + 1) % cameraImages.length;
    }

    cameraImage.src = cameraImages[cameraIndex]; 

    // Show or hide clue button based on the camera being displayed
    toggleClueButton();
}

function toggleClueButton() {
    const clueButton = document.getElementById('paper');
    const cameraImage = document.getElementById('cameraImage');
    if (cameraImages[cameraIndex] === "bar.png" && cameraImage.style.display === 'block') {
        clueButton.style.display = 'block';  // Show the clue button when on "Bar" camera
    } else {
        clueButton.style.display = 'none';  // Hide the clue button for other cameras
    }
}

function showClue() {
    const clueImage = document.getElementById('clueImage');
    const closeClueButton = document.getElementById('closeClueButton');
    clueImage.style.display = 'block';
    closeClueButton.style.display = 'block';
}

function closeClue() {
    const clueImage = document.getElementById('clueImage');
    const closeClueButton = document.getElementById('closeClueButton');
    clueImage.style.display = 'none';
    closeClueButton.style.display = 'none';
}

function showAnotherImage() {
    const codeInputSection = document.getElementById('codeInputSection');
    codeInputSection.style.display = 'block';
}


function keypad(code) {
    if (!camerasSeen) {
       
        alert("Be careful! You don't know what you're doing. Try looking around first.");
    } else {
        
        if (code === "1969") {
            alert("The desk unlocks! You retrieve a key from inside. Where can this be used?");
            keyUnlocked = true; 
        } else {
            alert("Wrong code! Try again.");
        }
    }
}


function checkDoor() {
    const doorButton = document.getElementById('doorButton');
    
    if (!keyUnlocked) {
        
        alert("The door is locked. You need to explore the area first.");
    } else if (!keyUnlocked) {
       
        alert("The door is locked. There is a keyhole. Can you find the key?");
    } else {
        
        alert("The door is now unlocked! Proceeding to the next level...");
        window.location.href = "engineerBay.html"; 
    }
}

function closeImage() {
    const cameraImage = document.getElementById('cameraImage');
    const closeButton = document.getElementById('closeButton');
    const prevCamera = document.getElementById('prevCamera');
    const nextCamera = document.getElementById('nextCamera');
    const clueButton = document.getElementById('clueButton');

    if (cameraImage) cameraImage.style.display = 'none';
    if (closeButton) closeButton.style.display = 'none';
    if (prevCamera) prevCamera.style.display = 'none';
    if (nextCamera) nextCamera.style.display = 'none';
    if (clueButton) clueButton.style.display = 'none';

    toggleClueButton();

}


function submitCode() {
    const codeInput = document.getElementById('codeInput').value;

    keypad(codeInput);

    const codeInputSection = document.getElementById('codeInputSection');
    codeInputSection.style.display = 'none';
}

function goHome() {
    const confirmExit = confirm("Are you sure you want to exit to the home page? Any unsaved progress will be lost.");
    if (confirmExit) {
        window.location.href = "home.html"; 
    }
}
