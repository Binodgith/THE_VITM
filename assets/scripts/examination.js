document.getElementById("exam-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("student-name").value;
    const studentId = document.getElementById("student-id").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester").value;

    // Basic validation
    if (!name || !studentId || !course || !year || !semester) {
        alert("Please fill out all fields.");
        return;
    }

    // Confirmation alert
    alert(`Form submitted successfully!\n\nStudent Name: ${name}\nStudent ID: ${studentId}\nCourse: ${course}\nYear: ${year}\nSemester: ${semester}`);
    
    // Clear form after submission
    document.getElementById("exam-form").reset();
});
