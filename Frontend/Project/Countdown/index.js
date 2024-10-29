document.getElementById('startButton').addEventListener('click', function() {
    let seconds = parseInt(document.getElementById('secondsInput').value);
    const timerDisplay = document.getElementById('timerDisplay');
    
    if (isNaN(seconds) || seconds < 0) {
        timerDisplay.textContent = "Invalid input";
        return;
    }

    timerDisplay.textContent = formatTime(seconds);
    
    const intervalId = setInterval(() => {
        seconds--;
        timerDisplay.textContent = formatTime(seconds);

        if (seconds <= 0) {
            clearInterval(intervalId);
            alert("Time's up!");
        }
    }, 1000);
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
