// "use strict";

const OPEN_MENU = document.getElementById("open-menu");
const CLOSE_MENU = document.getElementById("close-menu");
const NAV_LIST = document.querySelector(".nav");
const NAV_ITEMS = document.querySelectorAll(".nav-item");
const NAV = document.getElementById("nav");
const THEME_TOGGLE = document.getElementById("theme-toggle");
const BODY = document.querySelector("body");
let themeData = localStorage.getItem("theme");
let isDark = themeData == "dark";

// Toggle menu function
OPEN_MENU.addEventListener("click", () => {
  NAV.classList.add("active");
});

CLOSE_MENU.addEventListener("click", () => {
  NAV.classList.remove("active");
});

NAV_ITEMS.forEach((item) => {
  // Close menu when any item is clicked in the nav list
  item.addEventListener("click", () => {
    NAV.classList.remove("active");
  });
});

// Theme Toggle
window.addEventListener("load", () => {
  // onThemeToggle()
  BODY.setAttribute("theme-data", themeData);
  if (isDark) {
    THEME_TOGGLE.classList.remove("ri-moon-fill");
    THEME_TOGGLE.classList.add("ri-sun-fill");
  } else {
    THEME_TOGGLE.classList.remove("ri-sun-fill");
    THEME_TOGGLE.classList.add("ri-moon-fill");
  }
});

THEME_TOGGLE.addEventListener("click", () => {
  onThemeToggle()
  if (isDark) {
    THEME_TOGGLE.classList.remove("ri-moon-fill");
    THEME_TOGGLE.classList.add("ri-sun-fill");
  } else {
    THEME_TOGGLE.classList.remove("ri-sun-fill");
    THEME_TOGGLE.classList.add("ri-moon-fill");
  }
  BODY.setAttribute("theme-data", themeData);
});

function onThemeToggle(){
  localStorage.setItem('theme-data', isDark ? "light" : "dark")
  themeData = localStorage.getItem('theme-data')
  isDark = themeData == "dark";
}

const FOOTER_CREDIT =document.querySelector('.footer-credit');
const date = new Date;

FOOTER_CREDIT.innerHTML = `&copy; All right reserved &bull; ${date.getFullYear()}`;