
document.addEventListener('DOMContentLoaded', (event) => {
    function updateCountdown() {
        const weddingDate = new Date('January 16, 2025 12:00:00').getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('months').innerHTML = months;
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = 'The wedding has started!';
        }
    }

    function detectOS() {
        const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;

        // Check for Apple devices
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // Apple devices
            document.getElementById('appleLink').style.display = 'inline';
        } else {
            // Other devices
            document.getElementById('googleLink').style.display = 'inline';
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000 * 60); // Update every minute
    updateCountdown();

    detectOS(); // Call the function to display the correct link
});
