document.getElementById("startButton").addEventListener("click", function () {
    const spaceship = document.getElementById("spaceship");

    // Make the spaceship visible
    spaceship.style.visibility = "visible";

    // Start the animation
    spaceship.style.transition = "bottom 3s ease-in";
    spaceship.style.bottom = "100vh"; // Move to the top of the screen

    spaceship.addEventListener("transitionend", () => {
        
        window.location.href = "information.html";
    });
});
