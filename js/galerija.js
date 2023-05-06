let navbarDugme=document.querySelector(".navbar-dugme");
let navbarMeni=document.querySelector(".navbar-meni");

navbarDugme.addEventListener("click", meni) 
function meni(){
  navbarMeni.classList.toggle('show');
};
