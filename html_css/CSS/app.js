let signupbtn = document.querySelector('#signupbtn');
let signupModal = document.querySelector('#signup-modal');
let signupModalBg = document.querySelector('#signup-modalbg');
signupbtn.addEventListener('click', () => {
 signupModal.classList.add('is-active');
});


signupModalBg.addEventListener('click', () => {
 signupModal.classList.remove('is-active');
});

let signinbtn = document.querySelector('#signinbtn');
let signinModal = document.querySelector('#signin-modal');
let signinModalBg = document.querySelector('#signin-modalbg');
signinbtn.addEventListener('click', () => {
 signinModal.classList.add('is-active');
})


signinModalBg.addEventListener('click', () => {
 signinModal.classList.remove('is-active');
});
