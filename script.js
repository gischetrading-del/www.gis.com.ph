const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {   
    //Toggle mobile visibility
    document.body.classList.toggle("show-mobile-menu");
});

//Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
//======================================================================

//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },

  //Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    0: {
      slidesPerView: 1
    },
    0: {
      slidesPerView: 1
    },
  }
});

// Initialize EmailJS

//emailjs.init("SHHcXi4fYayUL0dTp");

//document.getElementById("contact-form").addEventListener("submit", function(e) {
    //e.preventDefault();

    //emailjs.sendForm(
        //"service_j1ld45q",
        //"template_vj0uw8n",
        //this
    //).then(() => {
        //alert("Message sent! Check your email 📩");
    //}).catch((error) => {
        //console.log("FAILED:", error);
    //}); 
//});

// Initialize EmailJS
emailjs.init("SHHcXi4fYayUL0dTp");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_j1ld45q",
        "template_vj0uw8n",
        this
    ).then((res) => {
        console.log("EMAILJS SUCCESS ✔", res);
        alert("Message sent!");
    }).catch((err) => {
        console.log("EMAILJS FAILED ❌", err);
    });
});

const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('show');
      console.log('activated:', el);
    }
  });
});



//Bash-pangcheck ng update sa website 
//git add .
//git commit -m "test update"
//git push origin main

