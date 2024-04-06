//

const { header } = require("express/lib/request");

console.log("I am connected");

const openNav = document.getElementById("burger-nav");
const navContent = document.querySelector("nav");

const accordionHeader = document.querySelectorAll(".accordion__header");

openNav.addEventListener("click", () => {
  console.log("Angela, I'm pregnant");
  if (navContent.style.maxHeight === "0") {
    return (navContent.style.maxHeight = "100%");
  } else {
    return (navContent.style.maxHeight = "100%");
  }
});

accordionHeader.forEach((header) => {
  header.addEventListener("click", () => {
    console.log("moans in japanese!");
    const content = header.nextElementSibling;
    const isOpen = header.getAttribute("aria-expanded") === "true" || false;

    if (isOpen) {
      header.setAttribute("aria-expanded", "false");
      content.style.display = "none";
    } else {
      header.setAttribute("aria-expanded", "true");
      content.style.display = "block";
    }
  });
});
