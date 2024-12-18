const host = {
  debug: !1,
  settings: {
    'connection.web.callcommand': '/',
      "connection.web.trust_login": "https://basispanel.ir/apicms",
      "connection.web.basiscore": "https://basispanel.ir/apicms",
      "connection.web.media": "https://basispanel.ir/apicms",
      "default.dbsource.verb": "post",
      "default.call.verb": "get",
      "default.viewCommand.groupColumn": "prpid",
      "default.dmnid": "4914",
      "default.binding.regex": "\\{##([^#]*)##\\}",
  },
};
let filtersBtn = [...document.querySelectorAll('.Filters .btn')]
let catid
filtersBtn.forEach((btn,i)=>{
    if (i==0){
        btn.classList.add('active')
    }

})
let loaderContainer = document.querySelector(".loaderContainer")
filtersBtn.forEach(btn=>{
  btn.addEventListener('click',(e)=>{
    filtersBtn.map(b=>{
      return b.classList.remove('active')
   
  })
  e.currentTarget.classList.add('active')
  catid = e.currentTarget.getAttribute('data-catid')
  $bc.setSource('btn.load',true)
  $bc.setSource('btn.catid',catid)
  })
})
function fn(args){
  loaderContainer.style.display="flex"
  console.log('proc',args.result);
  let prevblogs =[...document.querySelectorAll('.blogList .blog')] 
  prevblogs.map(blog=> blog.remove())
}
function render(args){
  loaderContainer.style.display="none"
  console.log('render',args);
  setTimeout(() => {
                  gsap.to('.blog',{
                    opacity:1,
                    y:0,
                   stagger:.1
                   })
                }, 300)
 
}

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

