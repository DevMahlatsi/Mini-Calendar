window.addEventListener('load', getDate);

const arrMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const arrDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function getDate(){
    let currentDate = new Date();

    let dayInMonth = document.getElementById('dayInMonth');
    let year = document.getElementById('currentYear');
    let month = document.getElementById('currentMonth');
    let currentDay = document.getElementById('currentDayOfWeek');
    month.innerText = arrMonths[currentDate.getMonth()];
    currentDay.innerText = arrDays[currentDate.getDay()];
    year.innerText = currentDate.getFullYear();
    dayInMonth.innerText = currentDate.getDate();
}