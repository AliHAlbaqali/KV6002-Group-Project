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

function mockLeaderboard() {
  const leaderboard = document.getElementById('leaderboard-entries');

  // Add a new fake score
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${leaderboard.children.length + 1}</td>
    <td>FakePlayer${leaderboard.children.length + 1}</td>
    <td>${Math.floor(Math.random() * 1000)}</td>
  `;

  leaderboard.appendChild(newRow);
}
