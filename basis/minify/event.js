let texts=document.querySelectorAll(".textContainer p"),titles=document.querySelectorAll(".textContainer h1,.textContainer h2,.textContainer h3,.textContainer h4,.textContainer h5,.textContainer h6");gsap.to(".Title h1",{y:0,opacity:1}),texts.forEach((t=>{gsap.to(t,{y:0,opacity:1,scrollTrigger:{trigger:t,start:"top 80%",end:"bottom bottom"}})})),titles.forEach((t=>{gsap.to(t,{y:0,opacity:1,scrollTrigger:{trigger:t,start:"top 80%",end:"bottom bottom"}})}));let gallerySlider=new Swiper(".swiper-gallery ",{speed:1e3,slidesPerView:3,spaceBetween:0,grabCursor:!0,centeredSlides:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});