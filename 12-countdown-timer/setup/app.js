const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// getting all of document items that gonna by change
const giveaway = document.querySelector('.giveaway'),
      deadline = document.querySelector('.deadline'),
      deadlineParts = document.querySelectorAll('.deadline-format h4');

// set deadline Date of event
let tempDate = new Date(),
    tempYear = tempDate.getFullYear(),
    tempMonth = tempDate.getMonth(),
    tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// Get all parts of deadline Date of event
const year = futureDate.getFullYear(),
      hours = futureDate.getHours(),
      minutes = futureDate.getMinutes(),
      month = months[futureDate.getMonth()],
      date = futureDate.getDate(),
      weekday = weekdays[futureDate.getDay()];

// Get deadline Date of event in miliseconds
const futureDateMS = futureDate.getTime();

// calculate remaining time in parts of: days hours minutes and seconds
function getRemainingTime() {
  const oneDay = 24 * 60 * 60 * 1000,
        oneHour = 60 * 60 * 1000,
        oneMinute = 60 * 1000;
  const today = new Date().getTime(),
        t = futureDateMS - today,
        days = Math.floor(t / oneDay),
        hours = Math.floor((t % oneDay) / oneHour),
        minutes = Math.floor((t % oneHour) / oneMinute),
        seconds = Math.floor((t % oneMinute) / 1000);
  // set values array
  let parts =  [days, hours, minutes, seconds];

  // set parameters of Date on page
  deadlineParts.forEach((item, index) => {
    if (parts[index] < 10) {
      parts[index] = `0${parts[index]}`;
    }
    item.textContent = parts[index];
  });

  if (t < 0) {
    clearInterval(showTimer);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

// set all of calculated data on page after DOM loaded
window.addEventListener('DOMContentLoaded', () => {
  getRemainingTime();
  giveaway.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year} 
  ${hours}:${minutes}am`;
});

// interval displaying of remaineng time to event deadline
const showTimer = setInterval (getRemainingTime, 1000);