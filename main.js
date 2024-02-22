// "use strict";

const OPEN_MENU = document.getElementById("open-menu");
const CLOSE_MENU = document.getElementById("close-menu");
const NAV_LIST = document.querySelector(".nav");
const NAV_ITEMS = document.querySelectorAll(".nav-item");
const NAV = document.getElementById("nav");
const THEME_TOGGLE = document.getElementById("theme-toggle");
const BODY = document.querySelector("body");
let isDark = localStorage.getItem("theme") == 'dark';

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
window.addEventListener('click', ()=>{
  BODY.setAttribute("theme-data", isDark ? "dark" : "light");
  if(isDark){
    THEME_TOGGLE.classList.remove("ri-moon-fill");
    THEME_TOGGLE.classList.add("ri-sun-fill");
  }else{
    THEME_TOGGLE.classList.add("ri-moon-fill");
    THEME_TOGGLE.classList.remove("ri-sun-fill");
  }
})


THEME_TOGGLE.addEventListener("click", () => {
  isDark = !isDark;
  localStorage.setItem("theme", isDark ? "light" : "dark");
  BODY.setAttribute("theme-data", isDark ? "light" : "dark");
  if(isDark){
    THEME_TOGGLE.classList.remove("ri-moon-fill");
    THEME_TOGGLE.classList.add("ri-sun-fill");
  }else{
    THEME_TOGGLE.classList.add("ri-moon-fill");
    THEME_TOGGLE.classList.remove("ri-sun-fill");
  }
});
