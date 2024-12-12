let currentCode = []; // Tracks the current code sequence input by the player
const correctCode = ['symbol1.png', 'symbol2.png', 'symbol3.png', 'symbol1.png', 'symbol2.png']; // Compare by image names

const symbolNames = {
    1: 'symbol1.png',
    2: 'symbol2.png',
    3: 'symbol3.png'
};

// Function to open the input box when a section is clicked
function openInputBox() {
    const inputBox = document.getElementById('inputBox');
    inputBox.style.display = 'block';
}

// Function to close the input box
function closeInputBox() {
    const inputBox = document.getElementById('inputBox');
    inputBox.style.display = 'none';
}

function openInputBox2() {
    const inputBox2 = document.getElementById('inputBox2');
    inputBox2.style.display = 'block'; // Show the second popup
}

// Function to close the second input box (empty box)
function closeInputBox2() {
    const inputBox2 = document.getElementById('inputBox2');
    inputBox2.style.display = 'none'; // Hide the second popup
}

function openInputBox3() {
    const inputBox3 = document.getElementById('inputBox3');
    inputBox3.style.display = 'block'; // Show the second popup
}

// Function to close the second input box (empty box)
function closeInputBox3() {
    const inputBox3 = document.getElementById('inputBox3');
    inputBox3.style.display = 'none'; // Hide the second popup
}

// Function to cycle through symbols for each digit
function cycleSymbol(digitId) {
    const currentSymbol = document.getElementById(digitId).firstElementChild.src.split('/').pop(); // Get the image filename
    const nextSymbol = (currentSymbol === 'symbol1.png') ? 'symbol2.png' : (currentSymbol === 'symbol2.png') ? 'symbol3.png' : 'symbol1.png';
    document.getElementById(digitId).firstElementChild.src = `${nextSymbol}`;
    updateCode();
}

// Update the displayed code sequence
function updateCode() {
    currentCode = [
        document.getElementById('digit1').firstElementChild.src.split('/').pop(),
        document.getElementById('digit2').firstElementChild.src.split('/').pop(),
        document.getElementById('digit3').firstElementChild.src.split('/').pop(),
        document.getElementById('digit4').firstElementChild.src.split('/').pop(),
        document.getElementById('digit5').firstElementChild.src.split('/').pop()
    ];
}

// Function to check the entered code
function checkCode() {
    if (JSON.stringify(currentCode) === JSON.stringify(correctCode)) {
        alert("Correct code! You have unlocked the escape pod.");
        window.location.href = "nextLevel.html"; // Adjust the next level's path as needed
    } else {
        alert("Incorrect code. Try again.");
        resetCode();
    }
}

// Reset the code display after incorrect input
function resetCode() {
    document.getElementById('digit1').firstElementChild.src = 'symbol1.png';
    document.getElementById('digit2').firstElementChild.src = 'symbol1.png';
    document.getElementById('digit3').firstElementChild.src = 'symbol1.png';
    document.getElementById('digit4').firstElementChild.src = 'symbol1.png';
    document.getElementById('digit5').firstElementChild.src = 'symbol1.png';
    updateCode();
}

// Function to go home
function goHome() {
    const confirmExit = confirm("Are you sure you want to exit to the home page? Any unsaved progress will be lost.");
    if (confirmExit) {
        window.location.href = "home.html"; // Redirect to the home page
    }
}
