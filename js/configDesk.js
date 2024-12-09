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
