document.addEventListener("DOMContentLoaded", function () {
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");
    const timer = document.getElementById("timer");

    let timerLeft = 1500; 
    let interval = null;

    const updateTimer = () => {
        const minutes = Math.floor(timerLeft / 60);
        const seconds = timerLeft % 60;
        timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const startTimer = () => {
        if (interval) return; 
        interval = setInterval(() => {
            if (timerLeft > 0) {
                timerLeft--;
                updateTimer();
            } else {
                clearInterval(interval);
                interval = null;
                alert("Time's up!");
            }
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(interval);
        interval = null;
    };

    const resetTimer = () => {
        clearInterval(interval);
        interval = null;
        timerLeft = 1500;
        updateTimer();
    };

    
    if (start && stop && reset) {
        start.addEventListener("click", startTimer);
        stop.addEventListener("click", stopTimer);
        reset.addEventListener("click", resetTimer);
    } else {
        console.error("Buttons not found! Check your HTML IDs.");
    }

    updateTimer(); 
});
document.addEventListener("DOMContentLoaded", function () {
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");
    const timer = document.getElementById("timer");

    let timerLeft = 1500; 
    let interval = null;

    const updateTimer = () => {
        const minutes = Math.floor(timerLeft / 60);
        const seconds = timerLeft % 60;
        timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const startTimer = () => {
        if (interval) return; 
        interval = setInterval(() => {
            if (timerLeft > 0) {
                timerLeft--;
                updateTimer();
            } else {
                clearInterval(interval);
                interval = null;
                alert("Time's up!");
            }
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(interval);
        interval = null;
    };

    const resetTimer = () => {
        clearInterval(interval);
        interval = null;
        timerLeft = 1500;
        updateTimer();
    };

    
    if (start && stop && reset) {
        start.addEventListener("click", startTimer);
        stop.addEventListener("click", stopTimer);
        reset.addEventListener("click", resetTimer);
    } else {
        console.error("Buttons not found! Check your HTML IDs.");
    }

    updateTimer(); 
});
