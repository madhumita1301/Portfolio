/*=======================Menu Show Y Hidden ================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*============================= Menu show ======================*/

/* validate if constant exist */
if(navToggle) {
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

/*============================= Menu show ======================*/
/* validate if constant exist */
if(navClose) {
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    });
}


/*==============================Remove menu Mobile====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========================Service Model===================*/
const modelViews = document.querySelectorAll('.service__model'),
    modelBtns = document.querySelectorAll('.service__button'),
    modelCloses = document.querySelectorAll('.service__model-close')

let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}
modelBtns.forEach((modelBtn, i)=> {
    modelBtn.addEventListener('click', () => {
        model(i);
    })
})

modelCloses.forEach((modelClose) => {
    modelClose.addEventListener('click', () => {
        modelViews.forEach((modelView) => {
            modelView.classList.remove('active-model')
        })
    })
})

/************************Scroll section active link******************/
const sections = document.querySelectorAll('.section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;


    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId +'] ').classList.add('.active-link') 
    
            
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('.active-link') 
    
        }

    })
}
window.addEventListener('scroll', scrollActive)
/***********************************Change background header***************/
function scrollHeader () {
    const nav = document.getElementById('#header')
    if(this.scrollY >= 80)
        nav.classList.add('.scroll-header');
    else 
    nav.classList.remove('.scroll-header')
    
}
window.addEventListener('scroll', scrollHeader)

/***********************Show scroll top************************/
function scrollUp () {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560)
        scrollUp.classList.add('show-scroll');
    else
    scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*********************dark Light theme *********************/
// const themeButton = document.getElementById('theme-button')
// const darkTheme = document.getElementsByClassName('dark-theme') 
// const iconTheme = 'uil-sun'

// ********************** new code for dark and light theem *******************

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-button');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');

    });
});

// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// if (selectedTheme) {
//     document.body.classlist[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     document.body.classlist[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }

// themeButton.addEventListener('click', () => {
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)

//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })
