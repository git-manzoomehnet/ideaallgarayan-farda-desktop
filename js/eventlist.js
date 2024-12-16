
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

