let filtersBtn = [...document.querySelectorAll('.Filters .btn')]
let catid
filtersBtn.forEach((btn,i)=>{
    if (i==0){
        btn.classList.add('active')
    }

})

let loaderContainer = document.querySelector(".loaderContainer")
$(document).ready(function () {
  $(".Filters .btn").click(function (e) {
    catid = e.currentTarget.getAttribute('data-catid')
      var url4 = `/load-blogDesk.inc?catid=${catid}`;
      filtersBtn.forEach((btn,i)=>{
      filtersBtn.map(b=>{
                return b.classList.remove('active')
            })
          })
      e.currentTarget.classList.add('active')
    loaderContainer.style.display="flex"
      $.ajax({
        url: url4,
        method: 'GET',
        success: function(response) {
            // مخفی کردن لودینگ بعد از دریافت پاسخ
            $(".blogList").html(response);
            setTimeout(() => {
              gsap.to('.blog',{
                opacity:1,
                y:0,
               stagger:.1
               })
            }, 300)
             loaderContainer.style.display="none"
        },
       
    });
  });
});

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

