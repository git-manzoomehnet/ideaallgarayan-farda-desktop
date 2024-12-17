
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
        stretch: 60,
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
let swiperBanner = new Swiper('.swiper-content', {
    loop: false,
    autoplay: false,
    speed: 2000,
    effect:'fade',

    grabCursor: false,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
        return '<span class="' + className + '">'  + '</span>';
    
        }
      },
   
    });