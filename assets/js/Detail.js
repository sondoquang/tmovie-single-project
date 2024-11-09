
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
