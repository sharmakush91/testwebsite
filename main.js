// Initialization for ES Users
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

//add event list here
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
