let clock = document.getElementById("clock");

function Time() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const day_Name = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const newD = day_Name[now.getDay()];
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  clock.innerHTML = `
<div class="clock-card">
<h1 class="day-name">${newD}</h1>
<div class="time-display">
${hours}:${minutes}:${seconds}
</div>
<h1 class="date-title">The Date ⏲</h1>
<div class="date-display">
${date}:${month}:${year}
</div> 
</div> 
`;
}

Time();
setInterval(Time, 1000);