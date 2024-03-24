// Function to check results and print congratulatory messages
function checkResults(students) {
 
    var successfulStudents = students.filter(function(student) {
        return student.marks > 90;
    });

  
    successfulStudents.forEach(function(student) {
        console.log("Congratulations " + student.name + "! You have cleared the exam.");
    });
}

// Example 
var students = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 95 },
    { name: "Bob", marks: 90 },
    { name: "Emma", marks: 92 }
];


checkResults(students);
