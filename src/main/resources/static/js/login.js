/// variable
const forgotPasswordLink = document.getElementById("forgot-password-link");
// Input login fields variables

// login form submission
function loginValidateForm()
{
    loginclearError();
    var loginFormValidation = true;
    var pNumber = document.forms["lform"]["lpnumber"].value;
    var lPassword = document.forms["lform"]["lpass"].value;
    if(pNumber.length != 10)
    {
        LoginSetError("login-phone", "Phone number is not valid");
        loginFormValidation = false;
    }
    if (pNumber.length == 0) {
        LoginSetError("login-phone", "Phone number cannot be zero");
        loginFormValidation = false;
    }
    if (lPassword.length == 0) {
        LoginSetError("login-password", "Please enter the password");
        loginFormValidation = false;
    }
    return loginFormValidation
}
// this function is written in the showing the error message
function LoginSetError(id, message) {
    element = document.getElementById(id);
    element.getElementsByClassName("login-input-errors")[0].innerHTML = `*${message}`;
}
// clearing the errors
function loginclearError() {
    var errors = document.getElementsByClassName("login-input-errors");
    for (let item of errors) {
        item.innerHTML = "";
    }
}

// Modal Variables
// first modal
const forgotPasswordModal = document.getElementById("forget-password-modal");
const modalInputPhoneEmail = document.getElementById("email-phone-modal");
const errorPhoneGmail = document.getElementById("error-phone-gmail");
const sendOtp = document.getElementById("send-otp");
// second modal
const otpVerifyModal = document.getElementById("otp-verify-modal");
const otpValue = document.getElementById("otp-value");
const verifyOTP = document.getElementById("verify-otp");
const resendOTP = document.getElementById("resend-otp");
const errorOTP = document.getElementById("error-otp");
const timer = document.getElementById("timer");
// third modal
const newPasswordModal = document.getElementById("new-password-modal");
const newPassword = document.getElementById("new-password");
const confirmPassword = document.getElementById("confirm-password");
const passwordDone = document.getElementById("new-password-done");
const errorNewPassword = document.getElementById("error-newpassword");

// selecting the modal
const modal = document.querySelector(".modal");
// closing variable
const close = document.querySelector(".close");

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
    if (modalInputPhoneEmail.value) {
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
