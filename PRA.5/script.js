
document.getElementById("patientForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let valid = true;

    document.querySelectorAll(".error").forEach(function(e) {
        e.innerHTML = "";
    });

    document.getElementById("success").innerHTML = "";

    // Name validation
    let namePattern = /^[A-Za-z ]{2,40}$/;

    if (!namePattern.test(name)) {
        document.getElementById("nameError").innerHTML =
            "Enter a valid name.";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML =
            "Enter a valid email address.";
        valid = false;
    }

    // Mobile validation
    let mobilePattern = /^[6-9]\d{9}$/;

    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").innerHTML =
            "Enter a valid 10 digit mobile number.";
        valid = false;
    }

    // Password validation
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password must have 8 characters, uppercase, lowercase, number and special character.";
        valid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById("confirmError").innerHTML =
            "Passwords do not match.";
        valid = false;
    }

    // Final validation
    if (valid) {
        document.getElementById("success").innerHTML =
            "Patient Registration Successful!";

        document.getElementById("patientForm").reset();
    }

});

// Clear success message on reset
document.getElementById("patientForm").addEventListener("reset", function() {
    document.getElementById("success").innerHTML = "";

    document.querySelectorAll(".error").forEach(function(e) {
        e.innerHTML = "";
    });
});
