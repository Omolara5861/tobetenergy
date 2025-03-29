/* custom main js file made by jeandoe */

const body = document.body;
const themeBtn = document.getElementById('theme-btn');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark');
    })
}

// Set the countdown target date 8 days from now
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 8);

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        document.querySelector(".counter").innerHTML = "<p>We're live!</p>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

updateCountdown(); // Initial call
setInterval(updateCountdown, 1000); // Update every second