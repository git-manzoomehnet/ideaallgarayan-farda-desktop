let texts = document.querySelectorAll('.textContainer p')
let titles = document.querySelectorAll('.textContainer h1,.textContainer h2,.textContainer h3,.textContainer h4,.textContainer h5,.textContainer h6')
gsap.to('.Title h1',{
    y:0,
    opacity:1,

})
texts.forEach(text=>{
    gsap.to(text,{
        y:0,
        opacity:1,
      scrollTrigger:{
        trigger:text,
        start:'top 80%',
        end:'bottom bottom'
      }
    })
})
titles.forEach(title=>{
    gsap.to(title,{
        y:0,
        opacity:1,
      scrollTrigger:{
        trigger:title,
        start:'top 80%',
        end:'bottom bottom'
      }
    })
})
// gallery slider
let gallerySlider = new Swiper('.swiper-gallery ',{
    speed: 1000,
    slidesPerView:3,
    spaceBetween: 0,
    grabCursor:true, 
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  })