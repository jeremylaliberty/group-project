

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
  auth.signOut();
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
  to_admin_button.classList.remove('is-hidden');
 });

 to_admin_button.addEventListener('click', () => {
  user_page.classList.add('is-hidden');
  admin_page.classList.remove('is-hidden');
  to_admin_button.classList.add('is-hidden');
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

let view_profile_btn = document.querySelector('#view-profile-btn');
let viewProfileModal = document.querySelector('#view-profile-modal');
let viewProfileModalBg = document.querySelector('#view-profile-modalbg');
let closeViewProfile = document.querySelector('#close-view-profile');
function ViewProfile(){
  // get the right profile here
  viewProfileModal.classList.add('is-active');
}

view_profile_btn.addEventListener('click', () => {
  ViewProfile();
 })
 
 closeViewProfile.addEventListener('click', () => {
  viewProfileModal.classList.remove('is-active');
 });
 
 viewProfileModalBg.addEventListener('click', () => {
  viewProfileModal.classList.remove('is-active');
 });

var grainger_center = turf.point([-89.4016, 43.0727]);
var grainger = turf.buffer(grainger_center, 0.1, {units: 'miles'});

var hub_center = turf.point([-89.3956, 43.0744]);
var hub = turf.buffer(hub_center, 0.1, {units: 'miles'});

var x = document.querySelector("#where-am-i");
let where_btn = document.querySelector('#where-am-i-btn')

function getLocation() { 
  x.innerHTML = "Getting location...";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(myPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function myPosition(position) {
  long = position.coords.longitude;
  lat = position.coords.latitude;
  my_location = turf.point([long, lat]);
  
  
  if (turf.booleanPointInPolygon(my_location, hub)) {
    x.classList.add('has-text-success');
    x.innerHTML = "You're at the Hub";
  }
  else if (turf.booleanPointInPolygon(my_location, grainger)){
    x.classList.add('has-text-success');
    x.innerHTML = "You're at Grainger";
  }
  else {
    x.classList.add('has-text-danger')
    x.innerHTML = "You're not at any of the named locations (Gphi (not yet implemented), Grainger, The Hub)";
  }

}

where_btn.addEventListener('click', () => {
  getLocation();
});



let signInEmail = document.querySelector('#sign-in-email');
let signInPass = document.querySelector('#sign-in-password');
let submitSignIn = document.querySelector('#sign-in-submit');
let signInMsg = document.querySelector('#sign-in-msg');


submitSignIn.addEventListener('click', () => {
  auth.signInWithEmailAndPassword(signInEmail.value, signInPass.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    signinModal.classList.remove('is-active');
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    signInMsg.innerHTML = "Login failed. Please check your email and password."
  });
});

let splashPage = document.querySelector('#splash-page');


function viewSplashPage(){
 
}
let uid = "";
auth.onAuthStateChanged((user) => {
  if (user) {
    user_page.classList.remove('is-hidden');
    splashPage.classList.add('is-hidden');
    loadProfileData(user.uid);
    y_attendance.push(17);
    
  }
  else{
    splashPage.classList.remove('is-hidden');
    user_page.classList.add('is-hidden');
    console.log('signed out');
  }
  
});
console.log(uid);

let user_mc_val = document.querySelector('#user-mc-val');
let user_hometown_val = document.querySelector('#user-hometown-val');
let user_major_val = document.querySelector('#user-major-val');
let user_egrad_val = document.querySelector('#user-egrad-val');
let user_bio_val = document.querySelector('#user-bio-val');
let user_name_val = document.querySelector('#user-name-val');

var x_attendance = ['Attended', 'Missed'];
var y_attendance = [];


function loadProfileData(uid){
  var docRef = database.collection("Users").doc(uid);
  docRef.get().then((doc) => {
    if (doc.exists) {
      user_mc_val.innerHTML = doc.data().memberClass;
      user_hometown_val.innerHTML = doc.data().hometown;
      user_major_val.innerHTML = doc.data().major;
      user_egrad_val.innerHTML = doc.data().expectedGrad;
      user_bio_val.innerHTML = doc.data().bio;
      user_name_val.innerHTML = doc.data().name;
      y_attendance.push(doc.data().meetings);

      console.log(doc.data().bio == '')
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
};







//  This data would be actual member data
//  since we dont have that yet, we use placeholder data

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



