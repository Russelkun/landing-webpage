//

console.log("I am connected");

const navContent = document.querySelector("nav");
const navBurger = document.querySelector(".burger-nav");

navBurger.addEventListener("click", () => {
  console.log("moans in japanese");
  //   navContent >= navContent.style.maxHeight === "0em"
  //     ? (navContent.style.maxHeight = "0em")
  //     : (navContent.style.maxHeight = "15em");
  navContent.style.left = navContent.style.left === "-100%" ? "0%" : "-100%";
});
