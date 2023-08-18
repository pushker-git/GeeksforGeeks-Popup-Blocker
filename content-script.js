// set the view count to less than 10 to avoid forcefully login
localStorage.setItem("gfgViewCount", 1);

//removing the popup modal from DOM
const divs = document.querySelectorAll('.login-modal-div');

setTimeout(function() {
divs.forEach(div => {
  div.remove();
});
}, 3000); // Timeout added if modal takes long to appear
