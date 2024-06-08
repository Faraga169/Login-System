var Name = document.getElementById('Name');
var email = document.getElementById('Email');
var password = document.getElementById('Password');
var signup = document.querySelector('button');
var forminput = document.querySelectorAll('.message');
var messagefail = document.querySelector('.messagefail');
var messagesuccess = document.querySelector('.messagesuccess');
var emailmessage = document.querySelector('.emailmessage');
var storeperson = [];

// Check if there is already stored data in localStorage
if (localStorage.getItem('storedata') !== null) {
    storeperson = JSON.parse(localStorage.getItem('storedata'));
}
console.log(localStorage.clear());
function add() {
    if (validation(Name) && validation(email) && validation(password)) {
        if (emailexist()) {
            emailmessage.classList.replace('d-none', 'd-block');
            messagefail.classList.replace('d-block', 'd-none');
            messagesuccess.classList.replace('d-block', 'd-none');
        } else {
            messagesuccess.classList.replace('d-none', 'd-block');
            messagefail.classList.replace('d-block', 'd-none');
            emailmessage.classList.replace('d-block', 'd-none');

            var person = {
                userName: Name.value,
                email: email.value,
                password: password.value
            };
            storeperson.push(person);
            localStorage.setItem('storedata', JSON.stringify(storeperson));
            console.log(JSON.parse(localStorage.getItem('storedata')));
            console.log(storeperson);
        }
    } else {
        messagefail.classList.replace('d-none', 'd-block');
        messagesuccess.classList.replace('d-block', 'd-none');
    }
}

function validation(element) {
    var regex = {
        Name: /.{3,}$/i,
        Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        Password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    };
    if (regex[element.id].test(element.value)) {
        if (element.nextElementSibling.classList.contains('d-block')) {
            element.nextElementSibling.classList.replace('d-block', 'd-none');
        }
        if (element.classList.contains('is-invalid')) {
            element.classList.remove('is-invalid');
        }
        element.classList.add('is-valid');
        return true;
    } else {
        if (element.classList.contains('is-valid')) {
            element.classList.remove('is-valid');
        }
        element.nextElementSibling.classList.replace('d-none', 'd-block');
        element.classList.add('is-invalid');
        return false;
    }
}

for (var i = 0; i < forminput.length; i++) {
    forminput[i].addEventListener('keyup', function () {
        validation(this);
    });
}

signup.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission
    add();
});

function emailexist() {
    for (var i = 0; i < storeperson.length; i++) {
        if (email.value === storeperson[i].email) {
            return true;
        }
    }
    return false;
}
