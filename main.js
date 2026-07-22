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

    <div class="day-box">
        <span>DAY</span>
        <h1>${newD}</h1>
    </div>


    <div class="content">

        <div class="date-section">
            <span>DATE</span>
            <h2>${date} / ${month} / ${year}</h2>
        </div>


        <div class="time-display">
            ${hours}:${minutes}:${seconds}
        </div>

    </div>

</div>
`;
}

Time();
setInterval(Time, 1000);