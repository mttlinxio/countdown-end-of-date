function updateCountdown() {
    // Get the current date
    const now = new Date();

    // Get the current year and month
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    // Get the last day of the current month
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    // Calculate the time difference between now and the last day of the month
    const timeDifference = lastDay - now;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Update the countdown timer text
    document.getElementById("days-left").textContent = daysLeft;

    // Check if 'day' should be singular or plural
    const dayWord = daysLeft === 1 ? "day" : "days";
    document.getElementById("day-word").textContent = dayWord;
}

// Update the countdown timer immediately when the page loads
updateCountdown();

// Update the countdown timer every 1 second (1000 milliseconds)
setInterval(updateCountdown, 1000);
