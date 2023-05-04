



let home = document.querySelector('#home');
let network = document.querySelector('#network');
let attendance = document.querySelector('#attendance');
let profile = document.querySelector('#profile');
let alumni_page = document.querySelector('#alumni-page');

let home_btn = document.querySelector('#home-btn');
let network_btn = document.querySelector('#network-btn');
let attendance_btn = document.querySelector('#attendance-btn');
let profile_btn = document.querySelector('#profile-btn');
let alumni_btn = document.querySelector('#alumni-home-btn');
let alumni_logout_btn = document.querySelector('#profile-btn2');
let alumni_network_btn = document.querySelector("#alumni-network-btn");


function homePage(){
  home.classList.remove('is-hidden');
  network.classList.add('is-hidden');
  profile.classList.add('is-hidden');
  attendance.classList.add('is-hidden');
  alumni_page.classList.add('is-hidden');
}

function networkPage(){
  loadNetwork('', 'Member Class');
  home.classList.add('is-hidden');
  network.classList.remove('is-hidden');
  profile.classList.add('is-hidden');
  attendance.classList.add('is-hidden');
  alumni_page.classList.add('is-hidden');
}

function atttendancePage(){
  home.classList.add('is-hidden');
  network.classList.add('is-hidden');
  profile.classList.add('is-hidden');
  attendance.classList.remove('is-hidden');
  alumni_page.classList.add('is-hidden');
}

function alumniPage(){
  home.classList.add('is-hidden');
  network.classList.add('is-hidden');
  profile.classList.add('is-hidden');
  attendance.classList.add('is-hidden');
  alumni_page.classList.remove('is-hidden');
}

function profilePage(){
  auth.signOut();
  location.reload();
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

 alumni_logout_btn.addEventListener('click', () => {
  profilePage();
 });

// weird stuff going on when i try to add these

//  alumni_home_btn.addEventListener('click', () => {
//   alumniPage();
//  });

//  alumni_network_btn.addEventListener('click', () => {
//   networkPage();
//  });

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

var hometown_val = '';
var major_val = '';
var expectedGrad_val = '';
var bio_val = '';
var name_val = '';
var mc_val = '';

editProfilebtn.addEventListener('click', () => {
  loadEditProfile(hometown_val, major_val, expectedGrad_val, bio_val, name_val, mc_val);
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
  network.classList.add('is-hidden');
  profile.classList.add('is-hidden');
  attendance.classList.add('is-hidden');
  user_page.classList.add('is-hidden');
  admin_page.classList.remove('is-hidden');
  // alumni_btn.classList.remove('is-hidden');
 });

let grad_profile_btn = document.querySelector('#graduate-profile-btn');
let gradProfileModal = document.querySelector('#graduate-profile-modal');
let gradProfileModalBg = document.querySelector('#graduate-profile-modalbg');
let closeGradProfile = document.querySelector('#close-graduate-profile');
let submitGradBtn = document.querySelector('#submit-grad-btn');

grad_profile_btn.addEventListener('click', () => {
  gradProfileModal.classList.add('is-active');
 })
 
 closeGradProfile.addEventListener('click', () => {
  gradProfileModal.classList.remove('is-active');
 });
 
 gradProfileModalBg.addEventListener('click', () => {
  gradProfileModal.classList.remove('is-active');
 });

 submitGradBtn.addEventListener('click', () => {
  alumniPage()
  let gradYear = document.querySelector("#gradYear").value;
  let major = document.querySelector("#major").value;
  let company = document.querySelector("#company").value;
  let position = document.querySelector("#position").value;
  let linkedIn = document.querySelector("#linkedIn").value;
  let new_alum_uid = document.querySelector('#uid').innerHTML;
  database.collection("Users").doc(new_alum_uid).update({
    profileType: "alumni",
		gradYear: gradYear,
		major: major,
		company: company,
    position: position,
    linkedIn: linkedIn,
    expectedGrad: firebase.firestore.FieldValue.delete(),
    meetings: firebase.firestore.FieldValue.delete(),
    points: firebase.firestore.FieldValue.delete(),
	})
  .then(() => {
      gradProfileModal.classList.remove('is-active');
  })
  .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

 });


let where_btn = document.querySelector('#where-am-i-btn');
var x = document.querySelector("#where-am-i");




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
  var grainger_center = turf.point([-89.4016, 43.0727]);
  var grainger = turf.buffer(grainger_center, 0.1, {units: 'miles'});

  var hub_center = turf.point([-89.3956, 43.0744]);
  var hub = turf.buffer(hub_center, 0.1, {units: 'miles'});
  
  
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



let uid = "";
auth.onAuthStateChanged((user) => {
  if (user) {
    user_page.classList.remove('is-hidden');
    splashPage.classList.add('is-hidden');
    loadUserData(user.uid);
    homePage();

  }
  else{
    splashPage.classList.remove('is-hidden');
    user_page.classList.add('is-hidden');
    console.log('signed out');
  }
  
});


let sign_up_btn = document.querySelector('#sign-up-button');
sign_up_btn.addEventListener('click', () =>{
  let sign_up_email = document.querySelector('#sign-up-email').value;
  let sign_up_password = document.querySelector('#sign-up-password').value;
  let sign_up_name = document.querySelector('#sign-up-name').value;
  let sign_up_mc = document.querySelector('#sign-up-mc option:checked').value;
  firebase.auth().createUserWithEmailAndPassword(sign_up_email, sign_up_password)
  .catch(err => {

  // display error message on modal

  const error = document.querySelector('.error');
  error.innerHTML = `<p>${err.message}</p>`;
})
  .then((userCredential) => {

    // Signed in 
    var user = userCredential.user;
    console.log(user.uid);
    database.collection("Users").doc(`${user.uid}`).set({
      name: sign_up_name,
      memberClass: sign_up_mc,
      bio: "",
      major: "",
      meetings: 15, // These vals will be set to 0 once we are all set up
      points: 620, // ditto
      expectedGrad: "",
      hometown: ""
    })
      .then(() => {
          console.log("Document successfully written!");
          signupModal.classList.remove('is-active');
          editProfileModal.classList.add('is-active');
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
    
  });
  // setTimeout(() => {
  //   signupModal.classList.remove('is-active');}, 1000)
});


let submit_edit_profile_btn = document.querySelector("#submit-edit-profile-btn");


submit_edit_profile_btn.addEventListener('click', () => {
  let edit_mc = document.querySelector('#memberClass option:checked').value;
  let edit_uid = document.querySelector('#uid').innerHTML;
  let uploadPic = document.getElementById("uploadFile");
  
  let file = uploadPic.files[0];
  if (file) {
  var storageRef = firebase.storage().ref();
  var testRef = storageRef.child(`${edit_uid}.png`);

  var metadata = {
    contentType: 'image/png' 
  };

  testRef.put(file, metadata).then((snapshot) => {
    console.log(snapshot);
 });

  
 var docRef = database.collection("Users").doc(edit_uid);
 const updateProfilePic = async (testRef) => {
   try {
     const downloadURL = await testRef.getDownloadURL();
     console.log(downloadURL);
     docRef.update({
       profilePic: downloadURL
     }).then(() => { }).catch((error) => {
       // The document probably doesn't exist.
       console.error("Error updating document: ", error);
   });
     // Use the downloadURL for further processing
   } 
   catch (error) {
     console.error('Error getting download URL:', error);
   }
 };

 updateProfilePic(testRef)
 .then(() => {
   console.log('Profile picture updated successfully');
 })
 .catch((error) => {
   console.error('Error updating profile picture:', error);
 });
  }
  let edit_id = document.querySelector('#uid').innerHTML;
  var docRef = database.collection("Users").doc(edit_id);

  docRef.update({
   
    name: editName.value,
    hometown: editHometown.value,
    expectedGrad: editGrad.value,
    bio: editBio.value,
    major: editMajor.value,
    memberClass: edit_mc
  })
  .then(() => {
      editProfileModal.classList.remove('is-active');
      // location.reload();
      
      
  })
  .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  }); 
  
})






var meetings = 0;
var tot_meetings = 0;

var points = 0;
var avg_points = 0;
var max_points = 0;

var avg_count = 0;
var avg_vals = 0;

var all_points = [];
var percentile = 0;

var missed = 0;

function loadUserData(uid){
  var adminRef = database.collection("Admin").doc('data');
  adminRef.get().then((doc) => {
    if (doc.exists) {
      tot_meetings = doc.data().meetings;
      max_points = doc.data().max_pts;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

  var docRef = database.collection("Users").doc(uid);
  docRef.get().then((doc) => {
    if (doc.exists) {
      hometown_val = doc.data().hometown;
      major_val = doc.data().major;
      expectedGrad_val = doc.data().expectedGrad;
      bio_val = doc.data().bio;
      name_val = doc.data().name;
      mc_val = doc.data().memberClass;
      meetings = doc.data().meetings;
      points = doc.data().points;
      profileType = doc.data().profileType;
      profile_pic = doc.data().profilePic;
      let alumni_page = document.querySelector('#alumni-page');

      if(profileType == 'alumni'){
        user_page.classList.add('is-hidden');
        alumni_page.classList.remove('is-hidden');
        
      }
      
      if(profileType == 'admin'){
        to_admin_button.classList.remove('is-hidden');
      };
      database.collection("Users").where("memberClass", "==", mc_val)
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              avg_vals += doc.data().points;
              avg_count += 1; 
              all_points.push(doc.data().points);
          }      
        );
      missed = tot_meetings - meetings;
      graphAttendance([meetings, missed]);
      attendanceMessage(meetings, tot_meetings);
      percentile = pointsPercentile(points, all_points).toFixed(0);
      avg_points = (avg_vals/avg_count).toFixed(0);
      graphPoints([points, avg_points, max_points]);
      pointsMessage(points, avg_points, max_points, percentile);
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });

      loadProfile(hometown_val, major_val, expectedGrad_val, bio_val, name_val, mc_val, uid, profile_pic);
      loadEditProfile(hometown_val, major_val, expectedGrad_val, bio_val, name_val, mc_val);
      configureProfile([mc_val, hometown_val, major_val, expectedGrad_val, bio_val ]);      
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
};


function loadProfile(hometown_val, major_val, expectedGrad_val, bio_val, name_val, mc_val, uid, profile_pic) {
  let user_mc_val = document.querySelector('#user-mc-val');
  let user_hometown_val = document.querySelector('#user-hometown-val');
  let user_major_val = document.querySelector('#user-major-val');
  let user_egrad_val = document.querySelector('#user-egrad-val');
  let user_bio_val = document.querySelector('#user-bio-val');
  let user_name_val = document.querySelector('#user-name-val');
  let uid_val = document.querySelector('#uid');
  user_hometown_val.innerHTML = hometown_val;
  user_major_val.innerHTML = major_val;
  user_egrad_val.innerHTML = expectedGrad_val;
  user_bio_val.innerHTML = bio_val;
  user_name_val.innerHTML = name_val;
  user_mc_val.innerHTML = mc_val;
  uid_val.innerHTML = uid;
  let container = document.querySelector('#pro_img_container');
  container.innerHTML = `<img src="${profile_pic}"></img>`;
  
  // let proPic = document.querySelector('#profilePicture');
  // console.log(proPic);
  // console.log(profile_pic);
  // proPic.setAttribute('src', profile_pic);
  // console.log(proPic);

}


function configureProfile(values) {
  var profileInfo = [];
  profileInfo.push(document.querySelector('#user-mc'));
  profileInfo.push(document.querySelector('#user-hometown'));
  profileInfo.push(document.querySelector('#user-major'));
  profileInfo.push(document.querySelector('#user-egrad'));
  profileInfo.push(document.querySelector('#user-bio'));
  for (let i = 0; i < profileInfo.length; i++) {
    if (values[i] == ''){
      profileInfo[i].classList.add('is-hidden');
    }
  }

}

function loadEditProfile(hometown_val, major_val, expectedGrad_val, bio_val, name_val, mc_val){
  editName.value = name_val;
  editHometown.value = hometown_val;
  editMajor.value = major_val;
  editGrad.value = expectedGrad_val;
  editBio.value = bio_val;
  
  let editMC = document.querySelector('#memberClass');

  for(var i, j = 0; i = memberClass.options[j]; j++) {
    if(i.value == mc_val) {
        editMC.selectedIndex = j;
        break;
    }
}
}

function graphAttendance(y) {
  var x_attendance = ['Attended', 'Missed'];
  var pieColors = [
    "#ee9ec8",
    "#9EC8EE",
  ];
  var attendance_image = document.getElementById("myChart");
  new Chart(attendance_image, {
      type: "doughnut",
      data: {
        labels: x_attendance,
        datasets: [{
          backgroundColor: pieColors,
          data: y
        }]
      },
      options: {
      }
    });
}

function graphPoints(y) {
  
  var x_points = ['Your Points', 'MC Average', 'Maximum Points'];
  var barColors =  ["#EE9EC8","#9EC8EE","#C8EE9E" ];

  var points_image = document.getElementById("points-chart");
  new Chart(points_image, {
      type: "bar",
      data: {
        labels: x_points,
        datasets: [{
          backgroundColor: barColors,
          data: y
        }]
      },
      options: {
          legend: {display: false}, 
          scales: {
              yAxes: [{
                  ticks: {
                      display: false,
                      beginAtZero: true,
                      max: y[2] + 200 
                  }
              }]
          }
  }
    });
}

function attendanceMessage(attended, total){
  let attended_msg = document.querySelector('#attended-meetings');
  let total_msg = document.querySelector('#total-meetings');
  let rate_msg = document.querySelector('#attendance-rate');
  attended_msg.innerHTML = attended;
  total_msg.innerHTML = total;
  rate = (attended/total*100).toFixed(1);
  rate_msg.innerHTML = `${rate}%`;
}


function pointsMessage(points, avg, max, percentile){
  let points_msg = document.querySelector('#my-points');
  let max_points_msg = document.querySelector('#max-points');
  let avg_points_msg = document.querySelector('#avg-points');
  let percentile_msg = document.querySelector('#my-percentile');
  let suffix = getSuffix(percentile);
  percentile_msg.innerHTML = `${percentile}${suffix}`;
  points_msg.innerHTML = points;
  max_points_msg.innerHTML = max;
  avg_points_msg.innerHTML = avg;
}

function pointsPercentile(points, all_points){
    let count = 0;
    all_points.forEach(val => {
      if (val < points) {
        count++;
      } else if (val == points) {
        count += 0.5;
      }
    });
    return 100 * count / all_points.length;
}

function getSuffix(percentile) {
  let remainder = percentile % 10
  if (remainder == 1 && percentile != 11) {
      return "st";
  }
  if (remainder == 2 && percentile != 12) {
      return "nd";
  }
  if (remainder == 3 && percentile != 13) {
      return "rd";
  }
  return "th";
}


//let view_profile_btn = document.querySelector('#view-profile-btn');
let viewProfileModal = document.querySelector('#view-profile-modal');
let viewProfileModalBg = document.querySelector('#view-profile-modalbg');
let closeViewProfile = document.querySelector('#close-view-profile');

let view_name = document.querySelector('#view-name');
let view_mc = document.querySelector('#view-mc');
let view_egrad = document.querySelector('#view-egrad');
let view_bio = document.querySelector('#view-bio');
let view_hometown = document.querySelector('#view-hometown');

let view_mc_container = document.querySelector('#view-mc-container');
let view_egrad_container = document.querySelector('#view-egrad-container');
let view_bio_container = document.querySelector('#view-bio-container');
let view_hometown_container = document.querySelector('#view-hometown-container');



 
 closeViewProfile.addEventListener('click', () => {
  viewProfileModal.classList.remove('is-active');
 });
 
 viewProfileModalBg.addEventListener('click', () => {
  viewProfileModal.classList.remove('is-active');
 });

let network_container = document.querySelector('#member-network-container');

function loadNetwork(name, mc){
  network_container.innerHTML = '';
  if (name == '' && mc == 'Member Class'){
    database.collection("Users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          network_container.innerHTML += `
          <p class = "is-hidden">${doc.id}</p>
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                    <img src="${doc.data().profilePic}" onerror="this.src='images/blankUser.png'" alt="">
                    </figure>
                 </div>
                 <div class="content">
                  <p class="title is-4">${doc.data().name}</p>
                  <p class="subtitle is-6"> ${doc.data().memberClass}</p>
                 </div>
               </div>
               <div class="has-text-centered">
                <button id = "user-button-${doc.id}" class="button has-text-white has-text-weight-bold is-small is-rounded is-inline-block is-favorite">View Profile</button>
               </div>
             </div>
            </div>
          </div>
          `    
          network_container.innerHTML += `
          <br>
          <br>
          <br>
          ` 
      });
  });
  }
  else if (name == ''){
    database.collection("Users").where('memberClass', '==', mc).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          network_container.innerHTML += `
          <p class = "is-hidden">${doc.id}</p>
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                    <img src="${doc.data().profilePic}" onerror="this.src='images/blankUser.png'" alt="">
                    </figure>
                 </div>
                 <div class="content">
                  <p class="title is-4">${doc.data().name}</p>
                  <p class="subtitle is-6"> ${doc.data().memberClass}</p>
                 </div>
               </div>
               <div class="has-text-centered">
                <button id = "user-button-${doc.id}" class="button has-text-white has-text-weight-bold is-small is-rounded is-inline-block is-favorite">View Profile</button>
               </div>
             </div>
            </div>
          </div>
          `     
      });
  });
  }
  else if (mc != 'Member Class' && name != ''){
    database.collection("Users").where('memberClass', '==', mc).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().name.toLowerCase().includes(name.toLowerCase())){
          network_container.innerHTML += `
          <p class = "is-hidden">${doc.id}</p>s
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                    <img src="${doc.data().profilePic}" onerror="this.src='images/blankUser.png'" alt="">
                    </figure>
                 </div>
                 <div class="content">
                  <p class="title is-4">${doc.data().name}</p>
                  <p class="subtitle is-6"> ${doc.data().memberClass}</p>
                 </div>
               </div>
               <div class="has-text-centered">
                <button id = "user-button-${doc.id}" class="button has-text-white has-text-weight-bold is-small is-rounded is-inline-block is-favorite">View Profile</button>
               </div>
             </div>
            </div>
          </div>
          `     
        }
          
      });
  });

  }
  else {
    database.collection("Users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().name.toLowerCase().includes(name.toLowerCase())){
          network_container.innerHTML += `
          <p class = "is-hidden">${doc.id}</p>
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-content">
                <div class = "columns">
                  <div class="column is-three-fifths has-text-left">
                    <div class="is-inline-block">
                      <strong>${doc.data().name}</strong>
                    </div>
                  </div>
                  <div class="column has-text-right">
                    <div class="is-inline-block">
                    ${doc.data().memberClass}
                    </div>
                  </div>
                </div>
                <div class="has-text-centered">
                  <button id = "user-button-${doc.id}" class="button has-text-white has-text-weight-bold is-small is-rounded is-inline-block is-favorite">View Profile</button>
                </div>
              </div> 
            </div>
          </div>
          `     

        }        
      });
  });
  }
  
}

network_container.addEventListener("click", (event) => {
  const button = event.target;
  if (button.tagName === "BUTTON" && button.id.startsWith("user-button-")) {
    const view_uid = button.id.substring("user-button-".length);
    database.collection('Users').doc(view_uid).get().then((doc) => {
      if (doc.exists) {

        if ( doc.data().memberClass == ''){
          view_mc_container.classList.add('is-hidden');
        } else if ( doc.data().memberClass != ''){
          view_mc_container.classList.remove('is-hidden');
        }

        if ( doc.data().expectedGrad == ''){
          view_egrad_container.classList.add('is-hidden');
        } else if ( doc.data().expectedGrad != ''){
          view_egrad_container.classList.remove('is-hidden');
        }

        if (doc.data().bio == ''){
          view_bio_container.classList.add('is-hidden');
        } else if (doc.data().bio != ''){
          view_bio_container.classList.remove('is-hidden');
        }

        if (doc.data().hometown == ''){
          view_hometown_container.classList.add('is-hidden');
        } else if (doc.data().hometown != ''){
          view_hometown_container.classList.remove('is-hidden');
        }
        
        view_name.innerHTML = doc.data().name;
        view_mc.innerHTML = doc.data().memberClass;
        view_egrad.innerHTML = doc.data().expectedGrad;
        view_bio.innerHTML = doc.data().bio;
        view_hometown.innerHTML = doc.data().hometown;
        let container = document.querySelector('#viewProfilePicture');
        container.innerHTML = `<img src="${doc.data().profilePic}"></img>`;
        viewProfileModal.classList.add('is-active');
   

      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
}

});

let filterName = document.querySelector('#filterName');
let filterMC = document.querySelector('#filterMemberClass');
let filterButton = document.querySelector('#filter-button');

filterButton.addEventListener('click', () => {
  loadNetwork(filterName.value, filterMC.value);
 });

let meetingbtn = document.querySelector('#edit-meetings-click');
let meetingModal = document.querySelector('#edit-meeting-modal');
let meetingModalBg = document.querySelector('#edit-meeting-modalbg');
let closeMeeting = document.querySelector('#close-edit-meeting');
meetingbtn.addEventListener('click', () => {
 meetingModal.classList.add('is-active');
});

closeMeeting.addEventListener('click', () => {
    meetingModal.classList.remove('is-active');
});

meetingModalBg.addEventListener('click', () => {
 meetingModal.classList.remove('is-active');
});

let numMeetings = 0
let submit_meeting_btn = document.querySelector("#submit-meeting-btn");
submit_meeting_btn.addEventListener('click', () => {
  let location = document.querySelector('#location').value;
  let date = document.querySelector('#date').value;
  let comments = document.querySelector('#comments').value;
  let time = document.querySelector('#time').value;
  numMeetings++;
  database.collection("Meetings").add({
		location: location,
		date: date,
    time: time,
		comments: comments,
    meetingNum: numMeetings,
	})
  .then(() => {
      meetingModal.classList.remove('is-active');
  })
  .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
})



let editUsersBtn = document.querySelector('#edit-users-click');
let editUsersModal = document.querySelector('#edit-users-modal');
let editUsersModalBg = document.querySelector('#edit-users-bg');
let closeEditUsers = document.querySelector('#close-edit-users');
editUsersBtn.addEventListener('click', () => {
  editUsers();
  editUsersModal.classList.add('is-active');
});

closeEditUsers.addEventListener('click', () => {
  editUsersModal.classList.remove('is-active');
});

editUsersModalBg.addEventListener('click', () => {
  editUsersModal.classList.remove('is-active');
});
let editUsersContainer = document.querySelector('#edit-users-box');
function editUsers(){
  editUsersContainer.innerHTML = '';
  database.collection("Users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      editUsersContainer.innerHTML += `
      <p>
          <a  href="#" class = "has-text-danger"> <i id = "user-button-${doc.id}" class="fa-solid fa-trash"></i> </a> <span id = "delete-name-${doc.id}">${doc.data().name}</span>
      </p>
      `
    });
});
}

editUsersContainer.addEventListener("click", (event) => {
  const anchor = event.target;
  if (anchor.tagName === "I" && anchor.id.startsWith("user-button-")) {
    const view_uid = anchor.id.substring("user-button-".length);
    database.collection("Users").doc(`${view_uid}`).delete();
    let name = document.querySelector(`#delete-name-${view_uid}`).innerHTML;
    editUsersContainer.innerHTML += `
    <br>
    <p class = "has-text-danger"> ${name} deleted successfully.
    `
}
  setTimeout(function () {editUsersModal.classList.remove('is-active')}, 1500);
});


let editAttBtn = document.querySelector('#edit-attendance-click');
let editAttModal = document.querySelector('#edit-attendance-modal');
let editAttModalBg = document.querySelector('#edit-attendance-bg');
let closeEditAtt = document.querySelector('#close-edit-attendance');
editAttBtn.addEventListener('click', () => {
  editAttendance();
  editAttModal.classList.add('is-active');
});

closeEditAtt.addEventListener('click', () => {
  editAttModal.classList.remove('is-active');
});

editAttModalBg.addEventListener('click', () => {
  editAttModal.classList.remove('is-active');
});
let editAttContainer = document.querySelector('#edit-attendance-container');
function editAttendance(){
  editAttContainer.innerHTML = '';
  database.collection("Users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      editAttContainer.innerHTML += `
      <div class="control">
          <label class="radio">
          <input id = "edit-meetings-${doc.id}" type="checkbox" name="answer" class = "edit-meetings">

            ${doc.data().name}:  <span id = "meetings-${doc.id}">${doc.data().meetings}</span> meetings.
          </label>
        </div>
      `
    });
});
}


let submitEditAtt = document.querySelector('#submit-edit-attendance');


submitEditAtt.addEventListener('click', () => {
  const added_meetings = document.querySelector('#added-meetings').value;

  const boxes = editAttContainer.querySelectorAll('.edit-meetings');
  boxes.forEach(function(box) {
    if (box.checked) {
      const uid = box.id.substring("edit-meetings-".length);
      let meetings = document.querySelector(`#meetings-${uid}`).innerHTML; 
      database.collection("Users").doc(uid).update({
        meetings: parseInt(meetings)+ parseInt(added_meetings)
      }) .then(() => {
       
        setTimeout(function () {editAttModal.classList.remove('is-active')}, 1500);        
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    }); 
    }
  });
});

let editPtsBtn = document.querySelector('#edit-points-click');
let editPtsModal = document.querySelector('#edit-points-modal');
let editPtsModalBg = document.querySelector('#edit-points-bg');
let closeEditPts = document.querySelector('#close-edit-points');
editPtsBtn.addEventListener('click', () => {
  editPoints();
  editPtsModal.classList.add('is-active');
});

closeEditPts.addEventListener('click', () => {
  editPtsModal.classList.remove('is-active');
});

editPtsModalBg.addEventListener('click', () => {
  editPtsModal.classList.remove('is-active');
});
let editPtsContainer = document.querySelector('#edit-points-container');
function editPoints(){
  editPtsContainer.innerHTML = '';
  database.collection("Users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      editPtsContainer.innerHTML += `
      <div class="control">
          <label class="radio">
          <input id = "edit-points-${doc.id}" type="checkbox" name="answer" class = "edit-points">

            ${doc.data().name}:  <span id = "points-${doc.id}">${doc.data().points}</span> pts.
          </label>
        </div>
      `
    });
});
}


let submitEditPts = document.querySelector('#submit-edit-points');


submitEditPts.addEventListener('click', () => {
  const added_pts = document.querySelector('#added-points').value;

  const boxes = editPtsContainer.querySelectorAll('.edit-points');
  boxes.forEach(function(box) {
    if (box.checked) {
      const uid = box.id.substring("edit-points-".length);
      let pts = document.querySelector(`#points-${uid}`).innerHTML; 
      database.collection("Users").doc(uid).update({
        points: parseInt(pts)+ parseInt(added_pts)
      }) .then(() => {
       
        setTimeout(function () {editPtsModal.classList.remove('is-active')}, 1500);
        
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    }); 
    }
  });
});
