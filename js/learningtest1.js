
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
// const lenis =  new Lenis({
//     smoothWheel: true,
//   });
//   function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
//   } 
// requestAnimationFrame(raf)

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
ScrollTrigger.create({
    trigger:'.pinScroll',
    start:'top top',
    end:'bottom 100%',
    pin:'.section2 ',
    // animation: animation,
    end: () => `+=100%`,
    pin: '.rChoice-Container',
    // pinSpacing: true,
    scrub: 1,
    invalidateOnRefresh: true,
    })

document.querySelectorAll('.wrapper').forEach((Section,i)=>{
    const imgs = Section.querySelector('.select')
    gsap.to(imgs, {
        clipPath: function () {
            return "inset(0px 0px 100% 0px)"
    
        },
       scale:1,
        stagger: 1,
        ease: "none",
        scrollTrigger:{
            trigger:Section,
    
            start:'top top',
            end:'bottom bottom',
            // pin: true,
            // pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            stagger: 1,
            // onEnter: () => {link1.classList.add("active") ;console.log(link1)},
                
            // onEnterBack: () => link1.classList.add("active"),
            // onLeave: () => link1.classList.remove("active"),
            // onLeaveBack: () => link1.classList.remove("active"),
        }
    })
})