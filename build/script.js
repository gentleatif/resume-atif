// import gsap from "gsap";
// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// document.click(function (event) {
//   document.querySelector(".navbar-collapse").collapse("hide");
// });

// add animation class when the scroll reach to that height

var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight - 50; // as soon as element touches bottom with offset event starts
// var element = document.querySelector(".sec1-dmush1"); //element

window.addEventListener("scroll", function () {
  // if (scrollpos > element.offsetTop - wh) {
  //   element.classList.add("onScroll");
  // }
  console.log("scroll event fire");
  console.log(scrollpos, wh);
});
