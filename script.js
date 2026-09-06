// Get form elements

const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const bioInput = document.getElementById("bio");


// Get error elements

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");


// Bio elements

const charCount = document.getElementById("charCount");
const bioWarning = document.getElementById("bioWarning");


// Submit button

const submitBtn = document.getElementById("submitBtn");


// Validation functions


function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent = "Name is required";

        return false;
    }

    nameError.textContent = "";

    return true;
}



function validateEmail() {

    const email = emailInput.value.trim();

    // Simple email pattern

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent = "Email is required";

        return false;
    }


    if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address";

        return false;
    }


    emailError.textContent = "";

    return true;
}



function validatePassword() {

    const password = passwordInput.value;


    if (password === "") {

        passwordError.textContent =
            "Password is required";

        return false;
    }


    if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        return false;
    }


    passwordError.textContent = "";

    return true;
}



// Validate Bio


function validateBio() {

    const length = bioInput.value.length;


    // Update character counter

    charCount.textContent =
        `${length} / 200 characters`;


    // Warning when close to limit

    if (length >= 180 && length < 200) {

        bioWarning.textContent =
            "Warning: You are close to the character limit";

    }

    else if (length === 200) {

        bioWarning.textContent =
            "You have reached the maximum character limit";

    }

    else {

        bioWarning.textContent = "";

    }
}



// Check all fields


function checkFormValidity() {

    const nameValid = validateName();

    const emailValid = validateEmail();

    const passwordValid = validatePassword();


    // Bio is valid because maxlength="200"
    // prevents more than 200 characters

    submitBtn.disabled =
        !(nameValid && emailValid && passwordValid);
}



// Real-time validation using input events


nameInput.addEventListener("input", function () {

    validateName();

    checkFormValidity();

});


emailInput.addEventListener("input", function () {

    validateEmail();

    checkFormValidity();

});


passwordInput.addEventListener("input", function () {

    validatePassword();

    checkFormValidity();

});


bioInput.addEventListener("input", function () {

    validateBio();

});


// Form submit


form.addEventListener("submit", function (event) {

    event.preventDefault();


    if (
        validateName() &&
        validateEmail() &&
        validatePassword()
    ) {

        alert("Registration successful!");

        form.reset();

        charCount.textContent =
            "0 / 200 characters";

        bioWarning.textContent = "";

        submitBtn.disabled = true;
    }

});