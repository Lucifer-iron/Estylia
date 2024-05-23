// Calculate the remaining days until the opening
function calculateRemainingDays() {
    const openingDate = new Date('2024-06-22'); // Example opening date (YYYY-MM-DD format)
        const currentDate = new Date();
            const timeDifference = openingDate.getTime() - currentDate.getTime();
                const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
                    return remainingDays;
                    }

                    // Update the countdown display
                    function updateCountdown() {
                        const countdownElement = document.getElementById('countdown');
                            const remainingDays = calculateRemainingDays();
                                if (remainingDays > 0) {
                                        countdownElement.textContent = `${remainingDays} days remaining until opening.`;
                                            } else {
                                                    countdownElement.textContent = 'We are open!';
                                                        }
                                                        }

                                                        // Update countdown every second
                                                        setInterval(updateCountdown, 1000);

                                                        // Initial call to update countdown immediately on page load
                                                        updateCountdown();