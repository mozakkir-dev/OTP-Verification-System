let generateBtn = document.getElementById("generateBtn");
let generatedOTP = document.getElementById("generatedOTP");
let otpForm = document.getElementById("otpForm");
let otpInput = document.getElementById("otpInput");
let verifyBtn = document.getElementById("verifyBtn");
let message = document.getElementById("message");
let resendBtn = document.getElementById("resendBtn");
let timer = document.getElementById("timer");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let otp;
let remainingTime;
let intervalId;
let expirationTime;
let SavedOtp;
let SavedExpiration;

generateBtn.addEventListener("click", function () {
    generateOtp();
    startCountdown();


});

otpForm.addEventListener("submit", function (dets) {
    dets.preventDefault();
    if (otp === undefined) {
        message.textContent = "Please generate an OTP first";
    }
    else if (Date.now()>=expirationTime) {
        message.textContent = "OTP has expired. Please generate a new OTP."
    }
    else if (otpInput.value.trim() === "") {
        message.textContent = "Please enter OTP.";
    }
    else if (Number(otpInput.value) === otp) {
        message.textContent = "OTP verified successfully!";
    }
    else {
        message.textContent = "Invalid OTP. Try again.";
    }
});

SavedOtp = sessionStorage.getItem("otp");
SavedExpiration = sessionStorage.getItem("expirationTime");
if (SavedOtp !== null && SavedExpiration !== null) {
    otp = Number(SavedOtp);
    expirationTime = Number(SavedExpiration);
    remainingTime = Math.ceil((expirationTime - Date.now()) / 1000);

    if (remainingTime > 0) {
        generatedOTP.textContent = otp;
        startCountdown();
    }
    else{
        sessionStorage.removeItem("otp");
          sessionStorage.removeItem("expirationTime");
    }
};


function startCountdown() {
    clearInterval(intervalId);
     updateTimer();
    intervalId = setInterval(function () {
         updateTimer();
        if (remainingTime === 0) {
          clearInterval(intervalId);
          sessionStorage.removeItem("otp");
          sessionStorage.removeItem("expirationTime");
        }
        
    }, 1000);
};

function updateTimer(){
 remainingTime = Math.max(0, Math.ceil((expirationTime - Date.now()) / 1000));
            let minuteCalc = Math.floor(remainingTime / 60);
            let secondCalc = remainingTime % 60;
            minute.textContent = minuteCalc.toString().padStart(2, 0);

            second.textContent = secondCalc.toString().padStart(2, 0);
}




function generateOtp(){
let max = 999999;
    let min = 100000;
    otp = Math.floor(Math.random() * (max - min + 1)) + min;
    generatedOTP.textContent = otp;
    expirationTime = Date.now() + (60 * 1000);
    sessionStorage.setItem("otp", otp);
    sessionStorage.setItem("expirationTime", expirationTime);
}

resendBtn.addEventListener("click",function(){
    generateOtp();
});