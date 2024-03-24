// Function to check if a username is present in the list of users
function isUsernamePresent(username, userList) {
  
    for (var i = 0; i < userList.length; i++) {
        
        if (userList[i] === username) {
            return true; // Username found
        }
    }
    return false; // Username not found
}

// Example usage:
var users = ["user1", "user2", "user3", "user4"];

// Check if "user3" is present in the list of users
if (isUsernamePresent("user3", users)) {
    console.log("Username found in the list of users.");
} else {
    console.log("Username not found in the list of users.");
}
