let hours = 0;
let minutes = 0;
let seconds = 0;

let hours_clock = document.getElementById("hours");
let minutes_clock = document.getElementById("minutes");
let seconds_clock = document.getElementById("seconds");

let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");

let t;

function Stopwatch() {
  seconds++;
  if (seconds == 59) {
      minutes++;
      seconds = 0;
  }
  if (minutes == 59) {
      hours++;
      minutes = 0;
  }
  
  hours_clock.innerHTML = hours.toString().padStart(2, '0');
  minutes_clock.innerHTML = minutes.toString().padStart(2, '0');
  seconds_clock.innerHTML = seconds.toString().padStart(2, '0');
}

buttonStart.onclick = function () {
  if (!t) {
    t = setInterval(Stopwatch, 10);
  }
};

buttonStop.onclick = function () {
  clearInterval(t);
};

buttonReset.onclick = function () {
  clearInterval(t);
  t = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  hours_clock.innerHTML = "00";
  minutes_clock.innerHTML = "00";
  seconds_clock.innerHTML = "00";
};

