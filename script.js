"use strict"

// QuerySelectors
const pswd1 = document.querySelector('#pswd1');
const pswd2 = document.querySelector('#pswd2');
const subBtn = document.querySelector('#subBtn')
const pswd_alert = document.querySelector('#pswd_alert')

// Compare two passwords
function comparePswd(val1, val2){
    if(val1 === val2) {
        pswd_alert.classList.remove("inPsswd");
        pswd_alert.classList.add("conPsswd");
        pswd_alert.textContent = "Password is confirmed.";
    }
    else {
        pswd_alert.classList.remove("conPsswd");
        pswd_alert.classList.add("inPsswd");
        pswd_alert.textContent = "Passwords don't match. Please try agian.";
    }
}

// Password elements eventlistner

pswd1.addEventListener('blur', ()=>{
    const val1 = pswd1.value;
    const val2 = pswd2.value;
    if(val1 !== "" && val2 !== ""){
    comparePswd(val1,val2);}
    else if(val1 === "" || val2 === ""){
        pswd_alert.textContent = "";
    }
    
});

pswd2.addEventListener('blur', ()=>{
    const val1 = pswd1.value;
    const val2 = pswd2.value;
    if(val1 !== "" && val2 !== ""){
    comparePswd(val1,val2);}
    else if(val1 === "" || val2 === ""){
        pswd_alert.textContent = "";
    }
    
});

// Button eventlistner


subBtn.addEventListener('click',()=>{
    const val1 = pswd1.value;
    const val2 = pswd2.value;
    if(val1 !== val2){
        alert("The passwords don't match. Please check again.")
    }
    else return true;
})
