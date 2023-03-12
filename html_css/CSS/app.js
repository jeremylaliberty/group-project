let signupbtn = document.querySelector('#signupbtn');
let signupModal = document.querySelector('#signup-modal');
let signupModalBg = document.querySelector('#signup-modalbg');
let closeSignup = document.querySelector('#close-sign-up');
signupbtn.addEventListener('click', () => {
 signupModal.classList.add('is-active');
});

closeSignup.addEventListener('click', () => {
    signupModal.classList.remove('is-active');
});

signupModalBg.addEventListener('click', () => {
 signupModal.classList.remove('is-active');
});

let signinbtn = document.querySelector('#signinbtn');
let signinModal = document.querySelector('#signin-modal');
let signinModalBg = document.querySelector('#signin-modalbg');
let closeSignin = document.querySelector('#sign-in-close');

signinbtn.addEventListener('click', () => {
 signinModal.classList.add('is-active');
})

closeSignin.addEventListener('click', () => {
    signinModal.classList.remove('is-active');
});

signinModalBg.addEventListener('click', () => {
 signinModal.classList.remove('is-active');
});


var x_attendance = ['Attended', 'Missed'];
var y_attendance = [18,3];
var barColors = [
    "rgba(0,0,255,1.0)",
    "rgba(17, 201, 252, 1)",
  ];
var attendance_image = document.getElementById("myChart");
var attendance_chart = new Chart(attendance_image, {
    type: "doughnut",
    data: {
      labels: x_attendance,
      datasets: [{
        backgroundColor: barColors,
        data: y_attendance
      }]
    },
    options: {
      title: {
        display: true,
        text: "Attendance"
      }
    }
  });


