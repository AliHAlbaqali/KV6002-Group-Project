// Function to open the panel and reveal the wires overlay
function openPanel() {
    // Hide the panel and show the wires overlay
    document.getElementById('panel').style.display = 'none';
    document.getElementById('wiresOverlay').style.display = 'flex';
}

// Function to close the wires overlay if user clicks outside the wires area
function closeOverlay() {
    document.getElementById('wiresOverlay').style.display = 'none';
}

// Function to handle wire cutting
function cutWire(wireId) {
    if (wireId === 'wire3') {
        // Correct wire (power wire)
        document.getElementById('message').textContent = 'Laser Gate Opened! You can now escape!';
        document.getElementById('message').style.color = 'lightgreen';
    } else {
        // Incorrect wire
        document.getElementById('message').textContent = 'Incorrect wire. Try again!';
        document.getElementById('message').style.color = 'red';
    }
}
