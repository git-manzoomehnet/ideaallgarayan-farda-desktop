
  var mySwiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: "2.3",
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})
gsap.registerPlugin(ScrollTrigger);
const interleaveOffset = 0.5;
let swiperBanner = new Swiper('.swiper-content', {
    loop: false,
    direction: "vertical",
    autoplay: false,
    speed: 1000,
    effect:'fade',
    fadeEffect: {
        crossFade: true,
      },
    grabCursor: false,
    watchSlidesProgress: true,
    mousewheelControl: true,
    mousewheel: true,
    //   pagination: {
    //     el: '.sec-1 .swiper-pagination',
    //     clickable: true,
    //     type: 'bullets',
    //     renderBullet: function (index, className) {
    //     return '<span class="' + className + '">'  + '</span>';
    
    //     }
    //   },
   
    });