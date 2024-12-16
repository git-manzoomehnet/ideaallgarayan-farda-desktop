var mySwiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "2.3",
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const lenis = new Lenis({
  smoothWheel: true,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
let workInfoItems = document.querySelectorAll(".pinScroll .IMG");
workInfoItems.forEach(function (item, index) {
  item.style.zIndex = workInfoItems.length - index;
});

gsap.set(".pinScroll .IMG", {
  clipPath: function () {
    return "inset(0px 0px 0px 0px)";
  },
  scale: 1.3,
});
gsap.set(".rChoice-Container .box .inner", {
  opacity: 0,
});
const animation = gsap.to(".section2 .IMG:not(:last-child)", {
  clipPath: function () {
    return "inset(0px 0px 100% 0px)";
  },
  scale: 1,
  stagger: 1,
  ease: "none",

});

const scrollSections = gsap.utils.toArray(".textContainer .box .inner");
scrollSections.forEach((section, i) => {
  const link1 = scrollSections[i];
  gsap.to(".textContainer .box .inner", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".rChoice-Container",

      start: "top top",
      end: () => `+=100%`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      invalidateOnRefresh: true,
      stagger: 1,
    },
    stagger: 1,
  });
});

let scroll = ScrollTrigger.create({
  trigger: ".section2 .rChoice-Container",
  start: "top top",
  end: "bottom 100%",
  pin: ".section2 .select",
  animation: animation,
  end: () => `+=100%`,
  pin: true,
  pinSpacing: true,
  scrub: 1,
  invalidateOnRefresh: true,
});

//     let btns = document.querySelectorAll('.navigations a');
//     let sections = document.querySelectorAll('.select')
// btns.forEach(btn=>{

//    btn.addEventListener('click',(e)=>{

//     e.preventDefault();
//     for(let p=0 ; p< btns.length ; p++){
//       btns[p].classList.remove('active');
//     }
//     btn.classList.add('active');
//     let target = $(e.currentTarget).attr('href');
//     let id = target.replace('#', '')
//     let targetElem =  document.querySelector(`.select#${id} `)
//     let totalScroll =scroll.end - scroll.start
//    let totalMovement = (sections.length ) * targetElem.offsetHeight;
// y = Math.round(scroll.start + (targetElem.offsetHeight / totalMovement) * totalScroll);

// gsap.to(window, {
// scrollTo: {
//     y: y,
//     autoKill: false
// },
// duration: 1
// });
// console.log(id);

//   });
//   })

let navLinks = document.querySelectorAll(".navigations .nav");
const imgSections = document.querySelectorAll(".section2 .IMG");

navLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
  console.log("click");
  
    e.preventDefault();

    // حذف کلاس active از تمام دکمه‌ها و اضافه کردن به دکمه کلیک‌شده
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    // هدف‌گیری سکشن IMG متناظر
    const targetSection = imgSections[index];
    lenis.scrollTo(targetSection, {
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 3), // تنظیم نرمی حرکت
    });
    // استفاده از GSAP برای scrollTo به سکشن مورد نظر
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: targetSection,
        autoKill: false,
      },
    });
  });
});

// navigationsDot.forEach((element,i) => {
//     element.addEventListener("click" , function(params) {
//         lenis.scrollTo(`.section-${i + 1}`, {
//             // offset : -122,
//           });
//           $(".navigations .nav").removeClass("active")
//           element.classList.add("active")
//     })
// });
