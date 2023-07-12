/// variable
const forgotPasswordLink = document.getElementById("sforgot-password-link");
// Input login fields variables

// login form submission
function sloginValidateForm() {
    sloginclearError();

    var loginFormValidation = true;
    var pNumber = document.forms["slform"]["smobile"].value;
    var lPassword = document.forms["slform"]["spassword"].value;
    if (pNumber.length != 10) {

        LoginSetError("slogin-phone", "Phone number is not valid");
        loginFormValidation = false;
    }
    if (pNumber.length == 0) {
        LoginSetError("slogin-phone", "Phone number cannot be zero");
        loginFormValidation = false;
    }
    if (lPassword.length == 0) {
        LoginSetError("slogin-password", "Please enter the password");
        loginFormValidation = false;
    }
    return loginFormValidation
}
// this function is written in the showing the error message
function LoginSetError(id, message) {
    element = document.getElementById(id);
    element.getElementsByClassName("slogin-input-errors")[0].innerHTML = `*${message}`;
}
// clearing the errors
function sloginclearError() {
    var errors = document.getElementsByClassName("login-input-errors");
    for (let item of errors) {
        item.innerHTML = "";
    }
}

// Modal Variables
// first modal
const forgotPasswordModal = document.getElementById("sforget-password-modal");
const modalInputPhoneEmail = document.getElementById("semail-phone-modal");
const errorPhoneGmail = document.getElementById("serror-phone-gmail");
const sendOtp = document.getElementById("ssend-otp");
// second modal
const otpVerifyModal = document.getElementById("sotp-verify-modal");
const otpValue = document.getElementById("sotp-value");
const verifyOTP = document.getElementById("sverify-otp");
const resendOTP = document.getElementById("sresend-otp");
const errorOTP = document.getElementById("serror-otp");
const timer = document.getElementById("stimer");
// third modal
const newPasswordModal = document.getElementById("snew-password-modal");
const newPassword = document.getElementById("snew-password");
const confirmPassword = document.getElementById("sconfirm-password");
const passwordDone = document.getElementById("snew-password-done");
// Need to be checked
const errorNewPassword = document.getElementById("error-newpassword");

// selecting the modal
const modal = document.querySelector(".smodal");
// closing variable
const close = document.querySelector(".sclose");

// things to be done after clicking the forgot password

forgotPasswordLink.addEventListener("click", modalFunc)

// Modal  functions in the in the login page
function modalFunc(e) {
    e.preventDefault();
    modal.style.display = "block";
    forgotPasswordModal.style.display = "flex";
    sendOtp.addEventListener("click", verifyOTPFunc);
}
function verifyOTPFunc() {
    if (modalInputPhoneEmail.value.length == 10) {
        forgotPasswordModal.style.display = "none";
        otpVerifyModal.style.display = "flex";
        startTimer();
        verifyOTP.addEventListener("click", newPasswordFunc);
        resendOTP.addEventListener("click", () => {
            resendOTP.style.display = "none";
            startTimer();
        });
    }
    else {
        errorPhoneGmail.style.display = "flex";
    }
}

// New password taking function
function newPasswordFunc() {
    if (otpValue.value) {
        otpVerifyModal.style.display = "none";
        newPasswordModal.style.display = "flex";
        passwordDone.addEventListener("click", passwordCreated);
    }
    else {
        errorOTP.style.display = "flex";
    }
}
// password created function
function passwordCreated() {
    if (newPassword.value === confirmPassword.value) {
        newPasswordModal.style.display = "none";
        modal.style.display = "none";
        location.reload();
    }
    else if (!newPassword.value || !confirmPassword.value) {
        errorNewPassword.style.display = "flex";
    }
    else {
        errorNewPassword.style.display = "flex";
    }
}

// closing function
close.addEventListener("click", closeModal);
function closeModal() {
    forgotPasswordModal.style.display = "none";
    otpVerifyModal.style.display = "none";
    newPasswordModal.style.display = "none";
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
