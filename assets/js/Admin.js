const togglebtn = document.querySelector('#toggle-btn');
togglebtn.addEventListener('click',()=>{
    document.querySelector("#sidebar").classList.toggle("expand");
})