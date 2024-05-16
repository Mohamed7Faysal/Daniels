// typed-js
var typed = new Typed("#typed", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity
});

// owl-carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    smartSpeed: 1500
  });
});

// nav-active
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  window.addEventListener("hashchange", function () {
    const hash = window.location.hash.substr(1);
    navLinks.forEach((link) => {
      if (link.getAttribute("href").substr(1) === hash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
