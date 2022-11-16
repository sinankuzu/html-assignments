const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const menu = document.querySelector("ul.menu");
const dropdowns = document.getElementsByClassName("menu-item-has-children");
const opens = [];
const overlay = document.getElementById("nav_overlay");
if (hamburger && nav && menu && dropdowns && overlay) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("opened");
  });
  for (let i = 0; i < dropdowns.length; i++) {
    opens[i] = !1;
    dropdowns[i].addEventListener("click", () => {
      const mediaQuery = window.matchMedia("(max-width: 992px)");
      if (!mediaQuery.matches) {
        return;
      }
      dropdowns[i].classList.toggle("opened");
      opens[i] = !opens[i];
      const sub = dropdowns[i].querySelector(".sub-menu");
      if (opens[i]) {
        sub.style.maxHeight = sub.scrollHeight + "px";
      } else {
        sub.style.maxHeight = 0;
      }
    });
  }
  let startX,
    startY,
    dist,
    threshold = -50,
    allowedTime = 280,
    elapsedTime,
    startTime;
  let oldTransition = "";
  overlay.addEventListener(
    "touchstart",
    function (e) {
      let touchobj = e.changedTouches[0];
      dist = 0;
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime();
      oldTransition = getComputedStyle(menu).transitionDuration;
      menu.style.transitionDuration = "0s";
      e.preventDefault();
    },
    !1
  );
  overlay.addEventListener(
    "touchmove",
    function (e) {
      let touchobj = e.changedTouches[0];
      dist = touchobj.pageX - startX;
      if (dist < 0) {
        menu.style.left = "" + dist + "px";
      }
      e.preventDefault();
    },
    !1
  );
  overlay.addEventListener(
    "touchend",
    function (e) {
      let touchobj = e.changedTouches[0];
      dist = touchobj.pageX - startX;
      elapsedTime = new Date().getTime() - startTime;
      let swipedLeft =
        elapsedTime <= allowedTime &&
        dist <= threshold &&
        Math.abs(touchobj.pageY - startY) <= 150;
      menu.style.transitionDuration = oldTransition;
      if (swipedLeft || dist < -1 * (menu.offsetWidth - 100)) {
        menu.style.left = "";
        nav.classList.toggle("opened");
      }
      menu.style.left = "";
      e.preventDefault();
    },
    !1
  );
}
var video = document.getElementsByTagName("video");
for (i = 0; i < video.length; i++) {
  video[i].onplay = function () {
    var currentIndex = index("video", this);
    for (k = 0; k < video.length; k++) {
      if (k == currentIndex) {
        continue;
      }
      video[k].pause();
      video[k].style.display = "none";
      video[k].previousElementSibling.style.display = "block";
    }
  };
}
function index(className, id) {
  nodes = document.getElementsByTagName(className);
  return [].indexOf.call(nodes, id);
}
document.querySelectorAll(".video .image").forEach((element) => {
  element.addEventListener("click", function () {
    this.style.display = "none";
    this.closest(".video").querySelector("video").style.display = "block";
    this.closest(".video").querySelector("video").play();
  });
});







