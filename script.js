// ALL QUERY SELECTORS
//query for password field
const passwd = document.querySelector(".form-password");
//query for confirm password field
const confirmPasswd  = document.querySelector(".form-confirm-password");
//query for submit button
const submitBtn = document.querySelector(".submit-btn");
//query for error message
const errorMsg = document.querySelector(".form-error-msg")

//function for comparing the passwords
const handlePasswordCheck = () => {
    console.log(passwd.value);
    console.log(confirmPasswd.value);
    if (passwd.value === "" || passwd.value !== confirmPasswd.value) {
        errorMsg.style.display = "block";
    }
    else {
        errorMsg.style.display = "none";
    }
}

//event listeners
passwd.addEventListener("input", handlePasswordCheck);
confirmPasswd.addEventListener("input", handlePasswordCheck);

