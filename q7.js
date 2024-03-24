// Function to generate a random 4-digit OTP
function generateOTP() {
    // Generate a random number between 1000 and 9999 (inclusive)
    var otp = Math.floor(Math.random() * 9000) + 1000;
    return otp;
}

// Example usage:
var otp = generateOTP();
console.log("Generated OTP:", otp);
