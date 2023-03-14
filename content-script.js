// set the view count to less than 10 to avoid forcefully login
localStorage.setItem("gfgViewCount", 1);

//removing the popup modal from DOM
const divs = document.querySelectorAll('.login-modal-div');

divs.forEach(div => {
  div.remove();
});
