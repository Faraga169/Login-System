var logout = document.querySelector('.navigation button');
var storedata = JSON.parse(localStorage.getItem("storedata")) ;
var currentUserEmail = localStorage.getItem("currentUser");

function showusername() {
    var container = '';
    for (var i = 0; i < storedata.length; i++) {
        if (storedata[i].email === currentUserEmail) {
            var username = storedata[i].userName;
            container = `<div>
                <h2 class="py-2">Welcome ${username}</h2>
            </div>`;
            break;
        }
    }
    document.querySelector('.login').innerHTML = container;
}

showusername();

logout.addEventListener('click', function() {
    localStorage.removeItem("currentUser"); 
    window.open("index.html", "_self");
});