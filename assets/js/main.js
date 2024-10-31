/*========== SHOW MENU =========*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose  = document.getElementById('nav-close');

/*Menu show*/
navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu');
});

/* Menu hidden */
navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu');
});


/*=========== SEARCH ===========*/
const search = document.getElementById("search"),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close');

/*Search show*/
searchBtn.addEventListener('click',()=>{
    search.classList.add('show-search');
});

/* Search close */
searchClose.addEventListener('click',()=>{
    search.classList.remove('show-search');
});

/*============== LOGIN ==============*/
const login = document.getElementById ('login'),
    loginBtn = document.getElementById("login-btn"),
    loginClose = document.getElementById("login-close");

/*Show login*/
loginBtn.addEventListener('click',()=>{
    login.classList.add('show__login');
});

/*Close Login*/
/*Show login*/
loginClose.addEventListener('click',()=>{
    login.classList.remove('show__login');
}); 


/*============= ToggleSubmenu ================*/ 
function toggleSubmenu (button){
    var list = document.getElementsByClassName('ct__submenu');
    var i=0;
    while(i<list.length){
            list[i].classList.remove('show');
            i++;
    }
    button.nextElementSibling.classList.toggle("show");
};


/*============= Event menu left ==============*/ 
var btnMenuLeft  = document.getElementById('btnMenuLeft'),
    listMenuLeft = document.getElementById('categoryMenu');
    btnMenuLeft.addEventListener('click',() =>{
        if(listMenuLeft.style.opacity == 0){
            listMenuLeft.style.opacity = 1;
            listMenuLeft.classList.add('show__menuLeft');
        }else{
            listMenuLeft.style.opacity = 0;
            listMenuLeft.classList.remove('show__menuLeft');
        }
    });

/*========== TOGGLE VIDEO ===========*/ 
const close = document.querySelector('.close'),
    popup = document.querySelector('.poup__play__video'),
    videos = document.querySelectorAll('iframe')
    close.addEventListener('click', () => {
        videos.forEach(i => {
           const source = i.src
           i.src = ''
           i.src = source
        })
        popup.classList.remove('show__video');
     })

const open = document.getElementById('play__video');
     open.addEventListener('click',()=>{
        console.log(popup);
        popup.classList.add('show__video');
     });

