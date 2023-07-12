// variables
const registerContinue = document.getElementById("register-continue");

// otp verify modal
const otpVerifyModal = document.getElementById("srotp-verify-modal");
const otpValue = document.getElementById("srotp-value");
const verifyOTP = document.getElementById("srverify-otp");
const resendOTP = document.getElementById("srresend-otp");
const errorOTP = document.getElementById("srerror-otp");
const timer = document.getElementById("srtimer");
// Number verified modal
const numberVerifed = document.getElementById("srnumber-verified-modal")
// selecting the modal
const modal = document.querySelector(".srmodal");
// closing variable
const close = document.querySelector(".srclose");

// On clicking the continue button in the page
registerContinue.addEventListener("click", modalFunc)

function modalFunc() {
    validateForm()
    if (validateForm() == true) {
        modal.style.display = "block";
        otpVerifyModal.style.display = "flex";
        startTimer();
        verifyOTP.addEventListener("click", otpVerified);
        resendOTP.addEventListener("click", () => {
            resendOTP.style.display = "none";
            startTimer();
        });
    }
}
// After verifying the function
function otpVerified() {
    var submitForm = true;
    if (otpValue.value) {
        otpVerifyModal.style.display = "none";
        numberVerifed.style.display = "flex";
    }
    else {
        errorOTP.style.display = "flex";
        submitForm = false;
    }
}
// closing function
close.addEventListener("click", closeModal);
function closeModal() {
    otpVerifyModal.style.display = "none";
    numberVerifed.style.display = "none";
    modal.style.display = "none";
    location.reload();
}
// adding count down
function startTimer() {
    let time = 1;
    let timerMinutes = time * 60;
    timer.style.display = "block";
    let otpTimer = setInterval(() => {
        if (timerMinutes <= 0) {
            clearInterval(otpTimer);
            resendOTP.style.display = "block"
            timer.style.display = "none";
        }
        else {
            timerMinutes--;
            let sec = Math.floor(timerMinutes % 60);
            timer.innerHTML = `0:${sec}`;
        }
    }, 1000);
}




function validateForm() {
    clearError();
    var formvalidation = true;

    var name = document.forms["srform"]["srname"].value;
    var pNumber = document.forms["srform"]["srnumber"].value;
    var remail = document.forms["srform"]["sremail"].value;
    var password = document.forms["srform"]["srpass"].value;
    var confirmPassword = document.forms["srform"]["srcpass"].value;
    // to check given name is goning to be more than a 5

    if (name.length < 3) {
        setError("sregister-name", "Name must be more than 3 letters");
        formvalidation = false;
    }
    // to check inputs are not empty
    if (name.length == 0) {
        setError("sregister-name", "required");
        formvalidation = false;
    }
    // to check given number the number is 10 number or not
    if (pNumber.length != 10) {
        setError("sregister-phone", "Phone number is not valid");
        formvalidation = false;
    }
    if (pNumber.length == 0) {
        setError("sregister-phone", "required");
        formvalidation = false;
    }
    // to check the email validation
    if (!/\S+@\S+\.\S+/.test(remail) && remail.length > 0) {
        setError("sregister-email", "Email is invalid");
        formvalidation = false;

    } else if (remail.lenght == 0) {
        setError("sregister-email", "");
        formvalidation = false;
    }


    // password is less than a 4 characters
    if (password.length < 4) {
        setError("sregister-password", "Password must be more than 3 characters");
        formvalidation = false;
    }
    if (password != confirmPassword) {
        setError("sregister-confirm-password", "You must match both the password fields");
        formvalidation = false;
    }
    return formvalidation;
}

// this function is written in the showing the error message
function setError(id, message) {
    element = document.getElementById(id);
    element.getElementsByClassName("register-input-errors")[0].innerHTML = `*${message}`;
}
// clearing the errors
function clearError() {
    var errors = document.getElementsByClassName("register-input-errors");
    for (let item of errors) {
        item.innerHTML = "";
    }
}


