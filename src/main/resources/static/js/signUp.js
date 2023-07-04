// variables
const registerContinue = document.getElementById("register-continue");

// otp verify modal
const otpVerifyModal = document.getElementById("otp-verify-modal");
const otpValue = document.getElementById("otp-value");
const verifyOTP = document.getElementById("verify-otp");
const resendOTP = document.getElementById("resend-otp");
const errorOTP = document.getElementById("error-otp");
const timer = document.getElementById("timer");
// Number verified modal
const numberVerifed= document.getElementById("number-verified-modal")
// selecting the modal
const modal = document.querySelector(".modal");
// closing variable
const close = document.querySelector(".close");

// On clicking the continue button in the page
registerContinue.addEventListener("click", modalFunc)

function modalFunc() {
    validateForm()
    if(validateForm()==true)
    {
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
function otpVerified()
{
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

    var name = document.forms["rform"]["rname"].value;
    var pNumber = document.forms["rform"]["rnumber"].value;
    var remail = document.forms["rform"]["remail"].value;
    var password = document.forms["rform"]["rpass"].value;
    var confirmPassword = document.forms["rform"]["rcpass"].value;
    // to check given name is goning to be more than a 5

  if (name.length < 3) {
        setError("register-name", "Name must be more than 3 letters");
        formvalidation = false;
    }
    // to check inputs are not empty
    if (name.length == 0) {
        setError("register-name", "required");
        formvalidation = false;
    }
    // to check given number the number is 10 number or not
    if (pNumber.length != 10) {
        setError("register-phone", "Phone number is not valid");
        formvalidation = false;
    }
    if (pNumber.length == 0) {
        setError("register-phone", "required");
        formvalidation = false;
    }
     // to check the email validation
    if(!/\S+@\S+\.\S+/.test(remail) && remail.length > 0){
        setError("register-email","Email is invalid");
        formvalidation = false;

        }else if(remail.lenght==0){
            setError("register-email","");
            formvalidation = false;
        }


    // password is less than a 4 characters
    if (password.length < 4) {
        setError("register-password", "Password must be more than 3 characters");
        formvalidation = false;
    }
    if (password != confirmPassword) {
        setError("register-confirm-password", "You must match both the password fields");
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


