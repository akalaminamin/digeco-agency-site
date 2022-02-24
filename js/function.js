// Use mixitup plugin
let mixer = mixitup(".mix-container");

// Use AOS plugin
AOS.init({
  offset: 400,
  duration: 3000,
});

// Add class for sticky menu
let stickyHeader = document.querySelector("header");
let logo = document.querySelector("#logo");
window.onscroll = () => {
  if (this.scrollY > 50) {
    // add class
    stickyHeader.classList.add("sticky");
    logo.src = "Images/logo.png";
  } else {
    // remove class
    stickyHeader.classList.remove("sticky");
    logo.src = "Images/logo2.png";
  }
};

// declear variable
let btnParrent = document.querySelector(".btn-group");
let btnChild = document.querySelectorAll(".btn-group .btn");
// Add Class array function
btnChild.forEach((e) => {
  e.addEventListener("click", () => {
    // remove class
    btnParrent.querySelector(".active").classList.remove("active");
    // add class
    e.classList.add("active");
  });
});
