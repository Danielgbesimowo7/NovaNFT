//  SWIPER JS Initialization
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        
        // Manual Breakpointa
        
        580:{
          slidesPerView:2,
          spaceBetween:10,
        },
        
        980:{
          slidesPerView:3,
          spaceBetween:10,
        },
        
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



// toggles MenuBar
const menuIcon = document.querySelector(".fa-bars")
const sideBar = document.querySelector(".nav-bar")
const navLinks = document.querySelectorAll(".nav-links")

menuIcon.addEventListener("click",()=>{
  if(menuIcon.classList.contains("fa-bars")){
    menuIcon.classList.remove("fa-bars")
    menuIcon.classList.add("fa-times")
  }
  else{
    menuIcon.classList.remove("fa-times")
    menuIcon.classList.add("fa-bars")
  }

  sideBar.classList.toggle("active")

  
})

navLinks.forEach(navlink =>{
  navlink.addEventListener("click", ()=>{
    
  })
})


// Intializing Animation on Scroll
AOS.init()