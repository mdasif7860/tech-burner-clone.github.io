const burger = document.querySelector(".burger");
const cross = document.querySelector(".cross");
let links = document.querySelector(".links");

burger.addEventListener("click", function () {
  if (burger.classList.contains("burger")) {
    cross.classList.add("active");
    burger.classList.remove("active");
    links.style.display = "block";
    links.style.transition = "2s"
  }
});
cross.addEventListener("click", function () {
  if (cross.classList.contains("cross")) {
    burger.classList.add("active");
    cross.classList.remove("active");
    links.style.display = "none";
  }
});
