
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

nezuko = document.querySelector('#nezuko2')
tanjiro = document.querySelector('#tanjiro2')
giyu = document.querySelector('#giyu2')
zenitsu = document.querySelector('#zenitsu2')


nezuko.addEventListener('click',()=>{
    document.querySelector('#tanjiro').querySelector('img').setAttribute('src','images/nezuko.png')
    gsap.from('#tanjiro',{
        translateX :200,
        duration :2.5,
        opacity :0,
        ease : 'elastic'
    })
    document.querySelector('#accroche').setAttribute('style','color: #A56388;')
    document.querySelector('#nezuko2').setAttribute('style','border-color: #A56388 ;')
    document.querySelector('nav').setAttribute('style','border-color: #a5638844;')
    document.querySelector('#logo').setAttribute('src','images/nezuko.png')

    document.querySelector('#tanjiro2').setAttribute('style','border-color: #fff0 ;')
    document.querySelector('#zenitsu2').setAttribute('style','border-color: #fff0 ;')
    document.querySelector('#giyu2').setAttribute('style','border-color: #fff0 ;')
})

tanjiro.addEventListener('click',()=>{
    document.querySelector('#tanjiro').querySelector('img').setAttribute('src','images/tanjiro.png')
    gsap.from('#tanjiro',{
        translateX :200,
        duration :2.5,
        opacity :0,
        ease : 'elastic'
    })
    document.querySelector('#accroche').setAttribute('style','color: #75AF82;')
    document.querySelector('#tanjiro2').setAttribute('style','border-color: #75AF82 ;')
    document.querySelector('nav').setAttribute('style','border-color: #75af8264;')
    document.querySelector('#logo').setAttribute('src','images/tanjiro.png')

    document.querySelector('#nezuko2').setAttribute('style','border-color: #fff0 ;')
    document.querySelector('#zenitsu2').setAttribute('style','border-color: #fff0 ;')
    document.querySelector('#giyu2').setAttribute('style','border-color: #fff0 ;')

})

giyu.addEventListener('click',()=>{
    document.querySelector('#tanjiro').querySelector('img').setAttribute('src','images/giyu.png')
    gsap.from('#tanjiro',{
        translateX :200,
        duration :2.5,
        opacity :0,
        ease : 'elastic'
    })
    document.querySelector('#accroche').setAttribute('style','color: #28457D;')
    document.querySelector('#giyu2').setAttribute('style','border-color:#28457D ;')
    document.querySelector('nav').setAttribute('style','border-color: #28447d6b;')
    document.querySelector('#logo').setAttribute('src','images/giyu.png')

    document.querySelector('#nezuko2').setAttribute('style','border-color: #fff0 ;')
    document.querySelector('#zenitsu2').setAttribute('style','border-color: #fff0 ;')
    document.querySelector('#tanjiro2').setAttribute('style','border-color: #fff0 ;')

})

zenitsu.addEventListener('click',()=>{
    document.querySelector('#tanjiro').querySelector('img').setAttribute('src','images/zenitsu.png')
    gsap.from('#tanjiro',{
        translateX :200,
        duration :2.5,
        opacity :0,
        ease : 'elastic'
    })
    document.querySelector('#accroche').setAttribute('style','color: #E4C060;')
    document.querySelector('#zenitsu2').setAttribute('style','border-color:#E4C060 ;')
    document.querySelector('nav').setAttribute('style','border-color: #e4c1605d;')
    document.querySelector('#logo').setAttribute('src','images/zenitsu.png')

    document.querySelector('#nezuko2').setAttribute('style','border-color: #fff0 ;')
    document.querySelector('#giyu2').setAttribute('style','border-color: #fff0 ;')
    document.querySelector('#tanjiro2').setAttribute('style','border-color: #fff0 ;')

})