const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', newTheme);
    themeToggleBtn.innerHTML = newTheme === 'dark' ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
});

window.alert("Please sign in first");


function validate(){

    event.preventDefault()

const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const passowrd = document.getElementById("password").value;
const age = document.getElementById("age").value;
const msg = document.getElementById("message");

if (username === '') {
    message = "Invalid username or email";
    msg.style.color = "red";
}else if (email === '') {
    message = "Invalid username or email";
    msg.style.color = "red";
}else if (passowrd === '') {
    message = "Invalid email or password";
    msg.style.color = "red";
}else if (age === '') {
    message = "Invalid Age";
    msg.style.color = "red";
}else {
    message = "Successful!";
    msg.style.color = "green";
    window.location.href = "https://arafat2342.github.io/p6/#home";
}

msg.innerText = message ;

}

function nodefunction(){
    document.getElementById("message").innerHTML = document.getElementById("row@").firstChild.nodeValue;
    document.getElementById("row@").innerHTML = document.getElementById("message").childNodes[0].nodeValue;

}