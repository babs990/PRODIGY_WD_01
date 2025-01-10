
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

tanjiro = document.querySelector('#nezuko2')
tanjiro.addEventListener('click',()=>{
    document.querySelector('#tanjiro').querySelector('img').setAttribute('src','images/nezuko.png')
    gsap.from('#tanjiro',{
        translateX :200,
        duration :2.5,
        opacity :0,
        ease : 'elastic'
    })
    document.querySelector('#accroche').setAttribute('style','color: #A56388;')
    document.querySelector('#nezuko2').setAttribute('style','border-color: #A56388;')
    document.querySelector('nav').setAttribute('style','border-color: #a5638844;')
    document.querySelector('#logo').setAttribute('src','images/nezuko.png')

    if(document.querySelector('#tanjiro2').classList.contains('border-[#75AF82]')){
        document.querySelector('#tanjiro2').classList.remove('border-[1px]')
    }
})