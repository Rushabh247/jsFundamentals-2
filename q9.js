// Function to check if a username contains only unique characters
function hasUniqueCharacters(username) {
    
    var charSet = new Set();

   
    for (var i = 0; i < username.length; i++) {
        // Check if the character is already in the Set
        if (charSet.has(username[i])) {
            return false; // Not unique
        }
      
        charSet.add(username[i]);
    }

    return true; 
}

// Example usage:
var username1 = "john_doe"; // Unique characters
var username2 = "hello";    // Non-unique characters

console.log(username1 + " contains only unique characters:", hasUniqueCharacters(username1));
console.log(username2 + " contains only unique characters:", hasUniqueCharacters(username2));
