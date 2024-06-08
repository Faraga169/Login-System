var email = document.getElementById('email');
var password = document.getElementById('password');
var login = document.getElementById('login');
var messagefail = document.querySelector('.messagefail');
var messagesuccess=document.querySelector('#login');
var storedata = [];

login.addEventListener('click', function() {
    
    storedata = JSON.parse(localStorage.getItem("storedata")) || [];
    
    if (storedata.length === 0) {
        messagefail.classList.replace('d-none','d-block');
        return;
    }

    let isValid = false;

    for (var i = 0; i < storedata.length; i++) {
        if (storedata[i].email === email.value && storedata[i].password === password.value) {
            localStorage.setItem("currentUser", email.value);
            window.open("index3.html", "_self");
          
            isValid = true;
            break;
        }
    }

    if (!isValid) {
        messagefail.classList.replace('d-none','d-block');
    }
});



