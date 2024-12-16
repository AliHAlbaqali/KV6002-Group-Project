let currentCode = []; 
const correctCode = ['symbol1.png', 'symbol2.png', 'symbol3.png', 'symbol1.png', 'symbol2.png']; 

const symbolNames = {
    1: 'symbol1.png',
    2: 'symbol2.png',
    3: 'symbol3.png'
};

function openInputBox() {
    const inputBox = document.getElementById('inputBox');
    inputBox.style.display = 'block';
}

function closeInputBox() {
    const inputBox = document.getElementById('inputBox');
    inputBox.style.display = 'none';
}

function openInputBox2() {
    const inputBox2 = document.getElementById('inputBox2');
    inputBox2.style.display = 'block'; 
}

function closeInputBox2() {
    const inputBox2 = document.getElementById('inputBox2');
    inputBox2.style.display = 'none'; 
}

function openInputBox3() {
    const inputBox3 = document.getElementById('inputBox3');
    inputBox3.style.display = 'block'; 
}

function closeInputBox3() {
    const inputBox3 = document.getElementById('inputBox3');
    inputBox3.style.display = 'none'; 
}

// Function to cycle through symbols for each digit
function cycleSymbol(digitId) {
    const currentSymbol = document.getElementById(digitId).firstElementChild.src.split('/').pop(); 
    const nextSymbol = (currentSymbol === 'symbol1.png') ? 'symbol2.png' : (currentSymbol === 'symbol2.png') ? 'symbol3.png' : 'symbol1.png';
    document.getElementById(digitId).firstElementChild.src = `${nextSymbol}`;
    updateCode();
}

function updateCode() {
    currentCode = [
        document.getElementById('digit1').firstElementChild.src.split('/').pop(),
        document.getElementById('digit2').firstElementChild.src.split('/').pop(),
        document.getElementById('digit3').firstElementChild.src.split('/').pop(),
        document.getElementById('digit4').firstElementChild.src.split('/').pop(),
        document.getElementById('digit5').firstElementChild.src.split('/').pop()
    ];
}

function checkCode() {
    if (JSON.stringify(currentCode) === JSON.stringify(correctCode)) {
        alert("Correct code! You have unlocked the escape pod.");
        window.location.href = "endpage.html"; 
    } else {
        alert("Incorrect code. Try again.");
        resetCode();
    }
}

function resetCode() {
    document.getElementById('digit1').firstElementChild.src = 'symbol1.png';
    document.getElementById('digit2').firstElementChild.src = 'symbol1.png';
    document.getElementById('digit3').firstElementChild.src = 'symbol1.png';
    document.getElementById('digit4').firstElementChild.src = 'symbol1.png';
    document.getElementById('digit5').firstElementChild.src = 'symbol1.png';
    updateCode();
}

function goHome() {
    const confirmExit = confirm("Are you sure you want to exit to the home page? Any unsaved progress will be lost.");
    if (confirmExit) {
        window.location.href = "home.html"; 
    }
}
