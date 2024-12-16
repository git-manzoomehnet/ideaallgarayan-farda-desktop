

let btns = document.querySelectorAll('.fixNav a');
let btnLink= document.querySelectorAll('.fixNav a');
let sections = document.querySelectorAll('.section')

  window.addEventListener('scroll',(args)=>{
    let scrTop = window.pageYOffset
    sections.forEach(sec =>{          
      let top = scrTop;
      let offset = sec.offsetTop-110;
      let height= sec.offsetHeight;
      let id =sec.getAttribute('id')
      if(top>= offset && top < offset + height){
      btns.forEach(btn=>{         
      btn.classList.remove('active');
      if(document.querySelector('.fixNav a[href*='+id + ']') == null){
        return;
      }      
     else if(id =='section-6'){
        document.querySelector('header').classList.add('pink')
        document.querySelector('.scrollTop').classList.add('white')
        document.querySelector('ul.navigations').classList.add('dark')
      }
      else if(id =='section-5'){
        document.querySelector('header').classList.add('pink')
        document.querySelector('.scrollTop').classList.add('white')
     
      }
      else if(id =='section-7'){
        document.querySelector('header').classList.add('pink')
        document.querySelector('.scrollTop').classList.add('dark')
        document.querySelector('ul.navigations').classList.add('dark')
     
      }
      else if(id =='section-9'){
        document.querySelector('.scrollTop').classList.add('dark')

     
      }
      else{
        document.querySelector('header').classList.remove('pink')
        document.querySelector('.scrollTop').classList.remove('white')
        document.querySelector('ul.navigations').classList.remove('dark')
      }
      let parent = document.querySelector('.fixNav a[href*='+id + ']')
      parent.classList.add('active')
     document.querySelector(`.section#${id} `).classList.add('active')
      })
    }
  })

  })

  onEnter=()=>{
    console.log('onEnter');

    }
    onEnterBack=()=>{
      console.log('onEnterBack');
      document.querySelector('.fixNav').classList.remove('hide')
      document.querySelector('.scrollTop').classList.remove('hide')

        }
    onLeave=()=>{
    console.log('onLeave');
    document.querySelector('.fixNav').classList.add('hide')
    document.querySelector('.scrollTop').classList.remove('hide')

            
     }
     onLeaveBack=()=>{
     console.log('onLeaveBack');
         
     }

  gsap.to('.fixNav ',{
    scrollTrigger:{
        trigger:'.srcoller',
        start:'top 0',
        end:'bottom 50%',
        scrub:true,
        onEnter: () =>onEnter(),
        onEnterBack: () =>onEnterBack(),
        onLeave: () => onLeave(),
        onLeaveBack: () =>onLeaveBack(),
    }
    })
 
  let scrltopBTN = document.querySelector('.scrollTop')
  scrltopBTN.addEventListener('click',()=>{
    window.scrollTo(0,0)
  })

  let GallerySlider = new Swiper('.swiper-proCat',{
    speed: 1000,
    slidesPerView:5,
    spaceBetween: 30,
    grabCursor:true, 
  })
// news slider
  let NewsSlider = new Swiper('.swiper-news',{
    speed: 1000,
    slidesPerView:2,
    spaceBetween: 30,
    grabCursor:true, 
  })

  gsap.to('.news',{
    y:0,
    opacity:1,
  scrollTrigger:{
    trigger:'.section-5',
    start:'top 80%',
    end:'bottom bottom'
  }
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