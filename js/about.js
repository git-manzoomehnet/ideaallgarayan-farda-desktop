const gallerySlider = new Swiper(".gallerySlider", {
  speed: 1000,
  loop: true,
  slidesPerView: 2 /* تعداد اسلایدها در یک زمان */,
  spaceBetween: -60 /* کاهش فاصله بین اسلایدها */,
  centeredSlides: true /* عکس وسط در مرکز قرار می‌گیرد */,
  // Navigation arrows
  navigation: {
    nextEl: ".nextGallery",
    prevEl: ".prevGallery",
  },
});

let scrollTop = document.querySelectorAll(".scrollTop");
scrollTop.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom bottom",
      // markers:true
    },
    y: "20vh",
    opacity: 0,
    duration: 1.5,
  });
});

$(".section1").imagesLoaded(function () {
  gsap.from(".section1 img", {
    scale: 1.6,
    ease: "expoScale(0.5,7,none)",
    duration: 3,
    // opacity:0,
  });
  gsap.from(".section1 .scroll1", {
    y: "20vh",
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.1,
  });
});

let scrollAfter = document.querySelectorAll(".scrollAfter");
scrollAfter.forEach((element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom bottom",
      // markers:true
      onEnter: () => {
        element.classList.add("activeImgScroll");
      },
    },
  });
  gsap.from(element.querySelector("img"), {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom bottom",
      // markers:true
    },
    scale: 1.2,
    duration: 2,
    delay: 0.5,
  });
});

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
let rSide = document.querySelectorAll(".rSide");
rSide.forEach((element) => {
  let parallaxRight = gsap.timeline();
  parallaxRight.to(element, {
    y: "-15vh",
  });
  ScrollTrigger.create({
    animation: parallaxRight,
    trigger: element,
    start: "top 30%",
    end: "bottom -10%",
    scrub: 0.5,
  });
});

let lSide = document.querySelectorAll(".lSide");
lSide.forEach((element) => {
  let parallaxLeft = gsap.timeline();
  parallaxLeft.to(element, {
    y: "-30vh",
  });
  ScrollTrigger.create({
    animation: parallaxLeft,
    trigger: element,
    start: "top 60%",
    end: "bottom -50%",
    scrub: 1,
    // markers:true,
  });
});
