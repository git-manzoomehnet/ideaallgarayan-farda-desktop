let filtersBtn = [...document.querySelectorAll('.Filters .btn')]
filtersBtn.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        filtersBtn.map(b=>{
            return b.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    })
})
let blogs = document.querySelectorAll('.blog')
blogs.forEach(blog=>{
    gsap.to(blog,{
        y:0,
        opacity:1,
      scrollTrigger:{
        trigger:blog,
        start:'top 100%',
        end:'bottom bottom'
      }
    })
})

