// Function to calculate the number of days until the event's start date
function calculateDaysUntilEvent(startDate) {
    // Current date
    var currentDate = new Date();

    // Convert both dates to UTC to ensure consistent calculation
    var startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    var currentUTC = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

   
    var timeDifference = startUTC - currentUTC;

   
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

// Example usage:
// Define the event's start date (year, month (0-11), day)
var eventStartDate = new Date(2024, 6, 1); // July 1, 2024

// Calculate the number of days until the event's start date
var daysUntilEvent = calculateDaysUntilEvent(eventStartDate);
console.log("Number of days until the event:", daysUntilEvent);
