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
let menuIcon = document.querySelector("#menuIcon");

window.onscroll = () => {
  if (this.scrollY > 50) {
    // add class
    stickyHeader.classList.add("sticky");
    logo.src = "Images/logo.png";
    menuIcon.style.color = "black";
  } else {
    // remove class
    stickyHeader.classList.remove("sticky");
    menuIcon.style.color = "white";
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

// function handleMenu () {
//   let menuItem = document.querySelector("#menuItem");
//   console.log(menuItem)
//   if(menuItem.style.display === "block"){
//     menuItem.style.display === "none"
//   }else{
//     menuItem.style.display === "block"
//   }
// }

