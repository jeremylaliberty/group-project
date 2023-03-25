let home = document.querySelector('#home');
let network = document.querySelector('#network');
let attendance = document.querySelector('#attendance');
let profile = document.querySelector('#profile');

let home_btn = document.querySelector('#home-btn');
let network_btn = document.querySelector('#network-btn');
let attendance_btn = document.querySelector('#attendance-btn');
let profile_btn = document.querySelector('#profile-btn');

function homePage(){
  home.classList.remove('is-hidden');
  network.classList.add('is-hidden');
  profile.classList.add('is-hidden');
  attendance.classList.add('is-hidden');
}

function networkPage(){
  home.classList.add('is-hidden');
  network.classList.remove('is-hidden');
  profile.classList.add('is-hidden');
  attendance.classList.add('is-hidden');
}

function atttendancePage(){
  home.classList.add('is-hidden');
  network.classList.add('is-hidden');
  profile.classList.add('is-hidden');
  attendance.classList.remove('is-hidden');
}

function profilePage(){
  home.classList.add('is-hidden');
  network.classList.add('is-hidden');
  profile.classList.remove('is-hidden');
  attendance.classList.add('is-hidden');
}

home_btn.addEventListener('click', () => {
  homePage();
 });

 network_btn.addEventListener('click', () => {
  networkPage();
 });

 attendance_btn.addEventListener('click', () => {
  atttendancePage();
 });

 profile_btn.addEventListener('click', () => {
  profilePage();
 });


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

let editProfilebtn = document.querySelector('#edit-profile-btn');
let editProfileModal = document.querySelector('#edit-profile-modal');
let editProfileModalBg = document.querySelector('#edit-profile-modalbg');
let closeEditProfile = document.querySelector('#close-edit-profile');

editProfilebtn.addEventListener('click', () => {
  editProfileModal.classList.add('is-active');
 })
 
 closeEditProfile.addEventListener('click', () => {
     editProfileModal.classList.remove('is-active');
 });
 
 editProfileModalBg.addEventListener('click', () => {
  editProfileModal.classList.remove('is-active');
 });

 let clearEditProfile = document.querySelector('#clear-edit-profile-btn');
 let editName = document.querySelector('#edit-name');
 let editHometown = document.querySelector('#edit-hometown');
 let editMajor = document.querySelector('#edit-major');
 let editGrad = document.querySelector('#edit-grad');
 let editBio = document.querySelector('#edit-bio');

 clearEditProfile.addEventListener('click', () => {
  editName.value = "";
  editHometown.value = "";
  editMajor.value = "";
  editGrad.value = "";
  editBio.value = "";
 });

 let admin_page = document.querySelector('#admin-page');
 let to_user_button = document.querySelector('#switch-to-user-view');

 let user_page = document.querySelector('#user-page');
 let to_admin_button = document.querySelector('#switch-to-admin-view');

 to_user_button.addEventListener('click', () => {
  user_page.classList.remove('is-hidden');
  admin_page.classList.add('is-hidden');
 });

 to_admin_button.addEventListener('click', () => {
  user_page.classList.add('is-hidden');
  admin_page.classList.remove('is-hidden');
 });

let grad_profile_btn = document.querySelector('#graduate-profile-btn');
let gradProfileModal = document.querySelector('#graduate-profile-modal');
let gradProfileModalBg = document.querySelector('#graduate-profile-modalbg');
let closeGradProfile = document.querySelector('#close-graduate-profile');

grad_profile_btn.addEventListener('click', () => {
  gradProfileModal.classList.add('is-active');
 })
 
 closeGradProfile.addEventListener('click', () => {
  gradProfileModal.classList.remove('is-active');
 });
 
 gradProfileModalBg.addEventListener('click', () => {
  gradProfileModal.classList.remove('is-active');
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