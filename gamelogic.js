document.addEventListener('DOMContentLoaded', () => 
    {
    const timerDisplay = document.getElementById('time');
    const hintButton = document.getElementById('hintButton');
    const hintPopup = document.getElementById('hintPopup');
    const hintText = document.getElementById('hintText');
    const closeHint = document.getElementById('closeHint');
    const targetPage = 'gameEnd.html'; 

    let remainingTime = localStorage.getItem('remainingTime') || 300; 
    remainingTime = Number(remainingTime);

    const hints =
     {
        'prison.html': "Click on every button available. Don't be afraid to use a calculator!",
    };

    const currentPage = window.location.pathname.split('/').pop();

    function updateTimer() {
        if (remainingTime <= 0) 
            {
            localStorage.removeItem('remainingTime');
            window.location.href = targetPage;
        } 
        else 
        {
            remainingTime--;
            localStorage.setItem('remainingTime', remainingTime);
            timerDisplay.textContent = remainingTime;
        }
    }

    setInterval(updateTimer, 1000);

    hintButton.addEventListener('click', () => 
        {
        const hint = hints[currentPage] || 'No hint available for this page.';
        hintText.textContent = hint;
        hintPopup.style.display = 'block';
        remainingTime = Math.max(0, remainingTime - 10); 
        localStorage.setItem('remainingTime', remainingTime);
        timerDisplay.textContent = remainingTime; 
    });

    closeHint.addEventListener('click', () => 
        {
        hintPopup.style.display = 'none';
    });
});
