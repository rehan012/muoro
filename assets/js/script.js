"use strict";

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

// Add event handling for Services dropdown
const servicesDropdown = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

const collapseServicesDropdown = function () {
  dropdownContent.classList.remove("show");
  // Reset dropdown-active class on Industries menu item
  const industriesMenuItem = document.querySelector(".industries-menu");
  industriesMenuItem.classList.remove("dropdown-active");
};

// Event listener for clicks anywhere on the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is not part of the services dropdown
  if (!event.target.matches(".dropbtn") && !event.target.matches(".dropdown-content") && dropdownContent.classList.contains("show")) {
    collapseServicesDropdown();
  }
});

const toggleDropdown = function () {
  dropdownContent.classList.toggle("show");

  // Toggle dropdown-active class on Industries menu item
  const industriesMenuItem = document.querySelector(".industries-menu");
  if (dropdownContent.classList.contains("show")) {
      // Apply margin to the navbar list to push it down
      industriesMenuItem.classList.add("dropdown-active")
       } else {
    // If dropdown is closed, reset the margin
    industriesMenuItem.classList.remove("dropdown-active")
  }
};

servicesDropdown.addEventListener("click", toggleDropdown);

/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// testimonials slider
const testimonialSlider = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },
  breakpoints: {
    // Optional: Adjust settings for different screen sizes
    200: {
      slidesPerView: 1, // Show 1 logo on smaller screens
    },
    1024: {
      slidesPerView: 2, // Show 2 logos on larger screens
    },
  },
});

// partners slider
const partnerCarousel = new Swiper(".partner-carousel", {
  slidesPerView: "auto", // Adjust based on desired number of logos visible
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true, // Adjust spacing between logos
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".partner-next",
    prevEl: ".partner-prev",
  },
  breakpoints: {
    // Optional: Adjust settings for different screen sizes
    200: {
      slidesPerView: 1, // Show 1 logo on smaller screens
    },
    990: {
      slidesPerView: 4, // Show 4 logos on large screens
    },
  },
});

document
  .getElementById("contact-us-btn")
  .addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflow = "hidden";
  });

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
  document.body.style.overflow = "auto";
});
document
  .getElementById("contact-expert-btn")
  .addEventListener("click", function () {
    document.getElementById("expert-modal").style.display = "block";
    document.body.style.overflow = "hidden";
  });

document
  .querySelector(".expert-close-btn")
  .addEventListener("click", function () {
    document.getElementById("expert-modal").style.display = "none";
    document.body.style.overflow = "auto";
  });

window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
    document.getElementById("expert-modal").style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// Initialize Intersection Observer
const swiperObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the Swiper element is intersecting with the viewport
    if (entry.isIntersecting) {
      // Trigger a slide action (e.g., slide to the next slide)
      // You can customize this based on your Swiper instance
      partnerCarousel.slideNext(3000);     
      // Once the slide action is triggered, unobserve to avoid repeating the action
      observer.unobserve(entry.target);
    }
  });
});

// Specify the Swiper element to observe
const swiperElement = document.querySelector('.partner-carousel');

// Start observing the Swiper element
swiperObserver.observe(swiperElement);
