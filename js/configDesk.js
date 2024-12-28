let menuItems = document.querySelectorAll('header .menu-item')
gsap.to(menuItems,{
    xPercent:0,
    x:0,
    opacity:1,
    stagger:.3
})
let proItemMenu = document.querySelector('.proItemMenu')
let fixedBottomMenu = document.querySelector('.fixed-bottomMenu')
proItemMenu.addEventListener('mouseenter',()=>{
    fixedBottomMenu.classList.add('openMenu')
})
fixedBottomMenu.addEventListener('mouseleave',()=>{
    console.log('leave');
    fixedBottomMenu.classList.remove('openMenu')
})

let procatsItems = document.querySelectorAll('.procatsItems')
let IMGsrc = ''
let mainIMG = document.querySelector('.procatIMG')
let titleCatIMG 
procatsItems.forEach(pro=>{
    pro.addEventListener('mouseenter',(e)=>{
        IMGsrc = e.currentTarget.getAttribute('data-bg')
        console.log(IMGsrc,'IMGsrc full');

    mainIMG.querySelector('img').setAttribute('src',IMGsrc)
    })
})


// SEARCH
let searchIcon = document.querySelector('.SearchIconHeader')
let searchBTN = document.querySelector('header .searchIcon')
let closeSearch = document.querySelector('.CloseSerch')
let search = document.querySelector('.searchContainer')
let navv = document.querySelector('.navigation')
let header2 = document.querySelector('header')
let inputt = document.querySelector('.searchContainer .inputBox input#search')
searchBTN.addEventListener('click',()=>{
  search.classList.add('show')
  header2.classList.add('hideINSearch')
  // navv.classList.add('InSearch')
})
closeSearch.addEventListener('click',()=>{
  search.classList.remove('show')
  header2.classList.remove('hideINSearch')
  // navv.classList.remove('InSearch')


})


searchIcon.addEventListener('click',()=>{
  let input = document.querySelector('.searchContainer .inputBox input#search')
      console.log('val',input.value);
      if(input.value == ''){
          return
           }
         else{
             console.log('val',input.value);
             setTimeout(()=>{
            window.location.href = `/search.bc?q=${input.value}`
             },1000)}


})
inputt.addEventListener("keypress", function(event) {
  let input = document.querySelector('.searchContainer .inputBox input#search')
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    if(input.value != ''){
      event.preventDefault();
    console.log('clicked');
console.log('val',input );
console.log('val',input.value);
  window.location.href = `/search.bc?q=${input.value}`
setTimeout(() => {
 
}, 1000);
    }


  }
});
if(!document.querySelector('main.home')){
  let scrltopBTN = document.querySelector('.scrollTopfooter')
  scrltopBTN.addEventListener('click',()=>{
    window.scrollTo(0,0)
  })
}
