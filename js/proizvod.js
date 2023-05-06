let stof = document.querySelector(".dugmeStof");
let dezen = document.querySelector(".dugmeDezen");
let stofWrapp = document.querySelector(".stof-wrapper");
let dezenWrapp = document.querySelector(".dezen-wrapper");

stof.addEventListener("click", () =>{
    stofWrapp.classList.toggle("gridcolumn1");
} )
dezen.addEventListener("click", () =>{
    dezenWrapp.classList.toggle("gridcolumn1");
} )