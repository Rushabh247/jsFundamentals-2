// Function to generate a sentence with all guest names separated by commas
function generateGuestListSentence(guests) {
    return "The event will be attended by " + guests.join(", ") + ".";
}

// Example 
var guestNames = ["Alice", "Bob", "Charlie", "David"];

var guestListSentence = generateGuestListSentence(guestNames);
console.log(guestListSentence);
