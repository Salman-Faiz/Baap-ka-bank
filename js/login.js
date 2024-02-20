// adding click event
document.getElementById('btn-submit').addEventListener('click',function(){

    const emailField= document.getElementById('email-Field');
    const email =emailField.value;
    const passwordField= document.getElementById('password-Field');
    const password=passwordField.value;

    if(email === 'salman@bank.com' && password=== 'danger'){
        // console.log('all okkk');
        window.location.href = "http://127.0.0.1:5500/dashboard.html";

    }
    else{
        alert('email & password error');
    }
    passwordField.value='';
})