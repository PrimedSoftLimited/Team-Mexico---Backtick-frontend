// let icon = document.querySelector("#ham");
// let sidebar = document.getElementById("bar");
// icon.addEventListener('click', function() {
//     sidebar.classList.toggle("bounce");
// });

let sidebarBox = document.querySelector('#sidebar');
let sidebarBtn = document.querySelector('#btn-menu');
let pageWrapper = document.querySelector('#main-content');

sidebarBtn.addEventListener('click', function(event) {

    if (this.classList.contains('active')) {
      this.classList.remove('active');
      sidebarBox.classList.remove('active');
  } else {
      this.classList.add('active');
      sidebarBox.classList.add('active');
  }
});

pageWrapper.addEventListener('click', function(event) {
  if (sidebarBox.classList.contains('active')) {
      sidebarBtn.classList.remove('active');
      sidebarBox.classList.remove('active');
  }
});

window.addEventListener('keydown', function(event) {

  if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
      sidebarBtn.classList.remove('active');
      sidebarBox.classList.remove('active');
  }
});

// add task functionality
let addGoal = document.querySelector('#btn-task');
let formGoal = document.querySelector('#form-goal');
let overlay = document.querySelector('#overlay');

addGoal.addEventListener('click', function(event) {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        formGoal.classList.remove('active');
        pageWrapper.classList.remove('scroll');
        overlay.classList.remove('active');

    } else {
        this.classList.add('active');
        formGoal.classList.add('active');
        pageWrapper.classList.add('scroll');
        overlay.classList.add('active');
    }
});

pageWrapper.addEventListener('click', function(event) {
    if (formGoal.classList.contains('active')) {
        addGoal.classList.remove('active');
        formGoal.classList.remove('active');
        pageWrapper.classList.remove('scroll');
        overlay.classList.remove('active');
    }
});
  

window.addEventListener('keydown', function(event) {

    if (formGoal.classList.contains('active') && event.keyCode === 27) {
        addGoal.classList.remove('active');
        formGoal.classList.remove('active');
        pageWrapper.classList.remove('scroll');
        overlay.classList.remove('active');
    }
});