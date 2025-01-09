
window.onload = ()=>{
    gsap.from('#tanjiro',{
        translateX :200,
        duration :2.5,
        opacity :0,
        ease : 'elastic'
    })

    gsap.from('#accroche',{
        translateY :-200,
        duration :1.5,
        delay:0.5,
        opacity :0,
    })

    gsap.from('#desc',{
        translateY :200,
        duration :1.5,
        delay:1.2,
        opacity :0,
    })

    gsap.from('#persona',{
        duration :1.5,
        delay:2.3,
        opacity:0
    })
}
tanjiro = document.querySelector('#tanjiro2')
tanjiro.addEventListener('click',()=>{
    tanjiro.querySelector(img).getAttribute(src) = 'nezuko.png'
})