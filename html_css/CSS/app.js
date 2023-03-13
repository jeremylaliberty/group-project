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

//  This data would be actual member data
//  since we dont have that yet, we use placeholder data
var x_attendance = ['Attended', 'Missed'];
var y_attendance = [18,3];
var pieColors = [
    "#ee9ec8",
    "#9EC8EE",
  ];
var attendance_image = document.getElementById("myChart");
var attendance_chart = new Chart(attendance_image, {
    type: "doughnut",
    data: {
      labels: x_attendance,
      datasets: [{
        backgroundColor: pieColors,
        data: y_attendance
      }]
    },
    options: {
    }
  });

// same here
var x_points = ['Your Points', 'MC Average', 'Maximum Points'];
var y_points = [630, 450, 1000];
var barColors =  ["#EE9EC8","#9EC8EE","#C8EE9E" ];

var points_image = document.getElementById("points-chart");
var points_chart = new Chart(points_image, {
    type: "bar",
    data: {
      labels: x_points,
      datasets: [{
        backgroundColor: barColors,
        data: y_points
      }]
    },
    options: {
        legend: {display: false}, 
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: y_points[2] + 200 
                }
            }]
        }
}
  });