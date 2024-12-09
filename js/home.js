

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
      let parent = document.querySelector('.fixNav a[href*='+id + ']')
      parent.classList.add('active')
     document.querySelector(`.section#${id} `).classList.add('active')
      })
    }
  })

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