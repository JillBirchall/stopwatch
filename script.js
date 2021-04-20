const stopwatchDisplay = document.getElementById("stopwatch");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

let timerId;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

startBtn.addEventListener("click", () => {
    startStopwatch();
});

pauseBtn.addEventListener("click", () => {
    pauseStopwatch();
});

resetBtn.addEventListener("click", () => {
    resetStopwatch();
})

function startStopwatch() {
    if (startBtn.classList.contains("inactive")) return;
    timerId = setInterval(() => {
        updateTime();
    }, 10);
    stopwatchDisplay.classList.remove("pause-animation");
    pauseBtn.classList.remove("inactive");
    resetBtn.classList.remove("inactive");
    startBtn.classList.add("inactive");
}

function pauseStopwatch() {
    if (pauseBtn.classList.contains("inactive")) return;
    startBtn.classList.remove("inactive");
    pauseBtn.classList.add("inactive");
    stopwatchDisplay.classList.add("pause-animation");
    clearInterval(timerId);
}

function resetStopwatch() {
    if (resetBtn.classList.contains("inactive")) return;
    clearInterval(timerId);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesDisplay.innerText = "00";
    secondsDisplay.innerText = "00";
    millisecondsDisplay.innerText = "00";
    stopwatchDisplay.classList.remove("pause-animation");
    startBtn.classList.remove("inactive");
    pauseBtn.classList.add("inactive");
    resetBtn.classList.add("inactive");
}

function updateTime() {
    milliseconds += 1;
    if (milliseconds === 100) {
        seconds += 1;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }
      minutesDisplay.innerText =
        minutes < 10 ? "0" + minutes : minutes;
      secondsDisplay.innerText =
        seconds < 10 ? "0" + seconds : seconds;
      millisecondsDisplay.innerText =
        milliseconds < 10 ? "0" + milliseconds : milliseconds;
}