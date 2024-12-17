const isPuzzleSolved = false;

// Select draggable items and drop zones
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

// Track dragging behavior
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

// Allow drop zones to accept dragged items
dropzones.forEach((zone, index) => {
    zone.addEventListener('dragover', e => {
        e.preventDefault();
    });

    zone.addEventListener('drop', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');

        // Check if the correct item is dropped
        if (draggable && draggable.id === `item${index + 1}`) {
            zone.classList.add('correct');

            // Snap the draggable item to the drop zone position
            draggable.style.position = 'absolute';
            draggable.style.top = zone.style.top;
            draggable.style.left = zone.style.left;

            // Disable further dragging for the item
            draggable.setAttribute('draggable', 'false');
            draggable.classList.remove('dragging');
        } else {
            alert('Wrong spot! Try again.');
        }
    });
});

// Exit to home page
function goHome() {
    const confirmExit = confirm("Are you sure you want to exit to the home page? Any unsaved progress will be lost.");
    if (confirmExit) {
        window.location.href = "home.html";
    }
}

function checkDoor() {
    if (!isPuzzleSolved) {
        alert("The door is locked. Solve the puzzle to return items back to their place first.");
    } else {
        alert("The door is now unlocked! Proceeding to the next level...");
        window.location.href = "nextLevel.html"; // Redirect to the next level
    }
}