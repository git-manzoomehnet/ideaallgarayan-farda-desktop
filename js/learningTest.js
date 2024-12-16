
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
let workInfoItems = document.querySelectorAll('.pinScroll .IMG');
workInfoItems.forEach(function (item, index) {
    item.style.zIndex = workInfoItems.length - index;
    //item.classList.zIndex = workInfoItems.length - index;
});

gsap.set(".pinScroll .IMG", {
    clipPath: function () {
        return "inset(0px 0px 0px 0px)"
    },
    scale:1.3,
});
gsap.set('.rChoice-Container .box .inner',{
opacity:0
})
const animation = gsap.to('.section2 .IMG:not(:last-child)', {
    clipPath: function () {
        return "inset(0px 0px 100% 0px)"

    },
   scale:1,
    stagger: 1,
    ease: "none"
})

const scrollSections = gsap.utils.toArray(".textContainer .box .inner");
scrollSections.forEach((section, i) => {
    const link1 = scrollSections[i];
gsap.to('.textContainer .box .inner',{
    opacity:1,
    scrollTrigger:{
        trigger:'.rChoice-Container',
        // trigger:section,

        start:'top top',
        end: () => `+=100%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        stagger: 1,
        // onEnter: () => {link1.classList.add("active") ;console.log(link1)},
            
        // onEnterBack: () => link1.classList.add("active"),
        // onLeave: () => link1.classList.remove("active"),
        // onLeaveBack: () => link1.classList.remove("active"),
    },
    stagger: 1,
})
})
// const scrollSections = gsap.utils.toArray(".select");
// const links = gsap.utils.toArray(".navigations a");

// scrollSections.forEach((section, i) => {
//     const link = links[i];
//     ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: "bottom top",
//         onEnter: () => link.classList.add("active"),
//         onEnterBack: () => link.classList.add("active"),
//         onLeave: () => link.classList.remove("active"),
//         onLeaveBack: () => link.classList.remove("active"),
//     });
// });


let scroll=ScrollTrigger.create({
    trigger:'.section2 .rChoice-Container',
    start:'top top',
    end:'bottom 100%',
    pin:'.section2 .select',
    animation: animation,
    end: () => `+=100%`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    invalidateOnRefresh: true,
    })



    let btns = document.querySelectorAll('.navigations a');
    let sections = document.querySelectorAll('.select')
btns.forEach(btn=>{         

   btn.addEventListener('click',(e)=>{

    
    e.preventDefault();
    for(let p=0 ; p< btns.length ; p++){
      btns[p].classList.remove('active');
    }
    btn.classList.add('active');
    let target = $(e.currentTarget).attr('href');
    let id = target.replace('#', '')
    let targetElem =  document.querySelector(`.select#${id} `)
    let totalScroll =scroll.end - scroll.start
   let totalMovement = (sections.length ) * targetElem.offsetHeight;
y = Math.round(scroll.start + (targetElem.offsetHeight / totalMovement) * totalScroll);

gsap.to(window, {
scrollTo: {
    y: y,
    autoKill: false
},
duration: 1
});
console.log(id);

  });
  })
 
        // link img
        // let lnikItem = document.querySelectorAll('.navigations  a')
        // let linkImg = document.querySelectorAll('.select')
        // let activeIMG = ''
        // let activeLinkID = ''
        // lnikItem.forEach(link => {
        //     link.addEventListener('click', (e) => {
        //         console.log(e);
                
        //         activeLinkID = e.currentTarget.getAttribute('href')
        //         linkImg.forEach(linkImg => {
        //             let id = activeLinkID.replace('#', '')
        //             activeIMG = document.querySelector(' .select[id*=' + id + ']')
        //             linkImg.classList.remove('show')
        //         })
        //         activeIMG.classList.add('show')
        //     })
        // })

    // const scrollSections1 = gsap.utils.toArray(".textContainer .box .inner");
    // //const links1 = gsap.utils.toArray(".work__info");

    // scrollSections1.forEach((section, i) => {
    //     const link1 = scrollSections1[i];
    //    let tim1= ScrollTrigger.create({
    //         trigger: section,
    //         start: "top top",
    //         end: "bottom top",
    //         onEnter: () => {link1.classList.add("active") ;console.log(link1)},
            
    //         onEnterBack: () => link1.classList.add("active"),
    //         onLeave: () => link1.classList.add("active"),
    //         onLeaveBack: () => link1.classList.remove("active"),
    //         markers: true
    //     });
    // });
