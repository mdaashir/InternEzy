/* External JS */
// Function to update the countdown
function updateCountdown() {
    const date = new Date();
    const newYear = new Date(`January 01 ${date.getFullYear() + 1} 00:00:00`);
    const rem = newYear - date;

    // Calculate remaining time
    let remDay = parseInt(rem / (1000 * 60 * 60 * 24));
    let remHr = parseInt((rem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let remMin = parseInt((rem % (1000 * 60 * 60)) / (1000 * 60));
    let remSec = parseInt((rem % (1000 * 60)) / 1000);

    document.getElementsByClassName('day')[0].innerHTML = remDay < 10 ? '0' + remDay : remDay;
    document.getElementsByClassName('hr')[0].innerHTML = remHr < 10 ? '0' + remHr : remHr;
    document.getElementsByClassName('min')[0].innerHTML = remMin < 10 ? '0' + remMin : remMin;
    document.getElementsByClassName('sec')[0].innerHTML = remSec < 10 ? '0' + remSec : remSec;

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

     // Get current date components
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let weekDay = weekdays[date.getDay()];

    let dateNow = `${weekDay}, ${day < 10 ? '0' + day : day} ${month} ${year}`;
    document.getElementsByClassName('date')[0].innerHTML = dateNow;

     // Get current time components
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = (hr >= 12) ? 'PM' : 'AM';
    if (hr > 12) hr -= 12;
    if (hr === 0) hr = 12;

    let timeNow = `${hr < 10 ? '0' + hr : hr}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec} ${session}`;
    document.getElementsByClassName('time')[0].innerHTML = timeNow;
}
// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();