document.querySelector('#reg-btn').addEventListener('submit', addUser());

function addUser() {
    console.log('hello');
    // console.log(username, email, pwd, confirmPwd);

    // let username = document.getElementById('#usr').value;
    // let email = document.getElementById('#reg-email').value;
    // let pwd = document.getElementById('#reg-pwd').value;
    // let confirmPwd = document.getElementById('#reg-pwd-confirm').value;

    let username = '';
    let email = '';
    let pwd = '';
    let confirmPwd = '';

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://backtick.herokuapp.com/api/register', true);
    
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (this.status == 200) {
            console.log("hello");
        };
    };
    xhr.onerror = function() {
        console.log('Error...');
    }
    xhr.send(username, email, pwd, confirmPwd);
};

let sidebarBox = document.querySelector('#form-user');
let joinBtn = document.querySelector('#btn-home');
let pageWrapper = document.querySelector('#container');
let login = document.querySelector('#login');
let register = document.querySelector('#register');
let btnRegister = document.querySelector('#register-head');
let btnLogin = document.querySelector('#login-head');
let overlay = document.querySelector('#overlay');

joinBtn.addEventListener('click', function(event) {

    if (this.classList.contains('active')) {
      this.classList.remove('active');
      sidebarBox.classList.remove('active');
      login.classList.remove('active');
      overlay.classList.remove('active');
  } else {
      this.classList.add('active');
      sidebarBox.classList.add('active');
      login.classList.add('active');
      btnLogin.classList.add('active');
      overlay.classList.add('active');
  }
});

// pageWrapper.addEventListener('click', function(event) {
//   if (sidebarBox.classList.contains('active')) {
//       joinBtn.classList.remove('active');
//       sidebarBox.classList.remove('active');
//   }
// });

window.addEventListener('keydown', function(event) {

  if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
      joinBtn.classList.remove('active');
      sidebarBox.classList.remove('active');
      register.classList.remove('active');
      login.classList.add('active');
      overlay.classList.remove('active');
  }
});

// login/signup scope

btnLogin.addEventListener('click', function(event) {
    if (this.classList.contains('active')) {
        // clear user input
    } else {
        this.classList.add('active');
        login.classList.add('active');
        register.classList.remove('active');
        btnRegister.classList.remove('active');
    }
})
btnRegister.addEventListener('click', function(event) {
    if (this.classList.contains('active')) {
        // clear user input
    } else {
        this.classList.add('active');
        register.classList.add('active');
        login.classList.remove('active');
        btnLogin.classList.remove('active');
    }
})
window.addEventListener('keydown', function(event) {

    if (btnRegister.classList.contains('active') && event.keyCode === 27) {
        btnRegister.classList.remove('active');
    }
});
  