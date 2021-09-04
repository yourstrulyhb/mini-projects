const endDatetime = new Date(`July 26 2021 17:00:00`);
console.log(endDatetime);
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Update Countdown
function updateCountdownTime() {

   const currentTime = new Date();
   const timeDiff = endDatetime - currentTime;     // amount of time (seconds) 'til end date
   timeDiff = timeDiff <= 0? 0: timeDiff;
   
   const daysLeft = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
   const hrsLeft = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
   const minsLeft = Math.floor(timeDiff / 1000 / 60) % 60;
   const secondsLeft = Math.floor(timeDiff / 1000) % 60;

   // Update display
   days.innerHTML = daysLeft;
   hours.innerHTML = hrsLeft < 10? '0' + hrsLeft: hrsLeft;
   minutes.innerHTML = minsLeft < 10 ? '0' + minsLeft : minsLeft;
   seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

setInterval(updateCountdownTime, 1000);
