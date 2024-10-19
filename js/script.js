/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");

if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

// Mic
const recognition = new webkitSpeechRecognition();
recognition.lang = "en-us";
recognition.interimResults = true;
recognition.continuous = true;

const output = document.getElementById("output");

document.getElementById("start-btn").onclick = () => recognition.start();
recognition.onresult = (event) => {
  output.value = event.results[event.results.length - 1][0].transcript;
};
navigator.mediaDevices.getUserMedia({ audio: true });

/*=============== LOGIN ===============*/
const loginButton = document.getElementById("login-button"),
  loginClose = document.getElementById("login-close"),
  loginContent = document.getElementById("login-content");

if (loginButton) {
  loginButton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
  });
}

if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-login");
  });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 30
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
addEventListener("scroll", shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: -5,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoint: {
    1220: {
      spaceBetween: -32,
    },
  },
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper(".featured__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  breakpoint: {
    1150: {
      slidePerView: 4,
      centeredSlides: false,
    },
  },
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper(".new__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",
  // centeredSlides: "auto",
  slidePerView: 4,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoint: {
    1150: {
      slidePerView: 3,
    },
  },
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  // centeredSlides: "auto",

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  breakpoint: {
    1150: {
      slidePerView: 3,
      centeredSlides: false,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
addEventListener("scroll", scrollUp);

/* const scrollClick = () => {

  const scrollbtn =  document.getElementById('scroll-up');
  scrollbtn.classList.add('scroll-click')     
}
addEventListener('click', scrollClick);  
 */

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=================================== DARK LIGHT THEME ==========================================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// if user selected
const secletedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// we validate if the user previuously chose a topic
if (secletedTheme) {
  document.body.classList[secletedTheme == "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[secletedTheme == "ri-moon-linne" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  duration: 1000,
  distance: "60px",
  delay: 400,
  reset: true,
});

// Home
sr.reveal(".home__data", { delay: 600, origin: "left" });
sr.reveal(".home__images", { delay: 400, origin: "right" });

// service
sr.reveal(".services__card", { interval: 100, delay: 500 });

// featured
sr.reveal(".featured__container", {
  interval: 100,
  delay: 500,
  distance: "90px",
});

// discount
sr.reveal(".discount__images", {
  delay: 400,
  origin: "right",
  distance: "80px",
});
sr.reveal(".discount__data", { delay: 400, origin: "left", distance: "80px" });

// new book & join & testimonial & footer
sr.reveal(".new__container, .join__data, .testimonial__container, footer", {
  interval: 100,
  delay: 800,
  distance: "90px",
});
