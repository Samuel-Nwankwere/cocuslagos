
let menu= document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

const navLinks = document.querySelectorAll('.nav-link')
const sections = document.querySelectorAll('section')

window.addEventListener ('scroll' ,
  () =>{
    let current ='';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      
      if(scrollY >= sectionTop){
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href')===`#${current}`){
       link.classList.add('active');
      }
    })
  }
)
