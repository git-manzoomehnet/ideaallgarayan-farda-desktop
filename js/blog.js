let filtersBtn = [...document.querySelectorAll('.Filters .btn')]
let catid
filtersBtn.forEach((btn,i)=>{
    if (i==0){
        btn.classList.add('active')
    }
    btn.addEventListener('click',(e)=>{
        filtersBtn.map(b=>{
            return b.classList.remove('active')
        })
        catid = e.currentTarget.getAttribute('data-catid')
        e.currentTarget.classList.add('active')
        console.log(catid);
        var url = `/load-blogDesk.inc?catid=${catid}`;
        $(".blogList").load(url);
        setTimeout(() => {
          gsap.to('.blog',{
            opacity:1,
            y:0,
           stagger:.1
           })
        }, 1000)
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

