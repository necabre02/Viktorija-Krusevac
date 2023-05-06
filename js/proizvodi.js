

let filter=document.getElementById("filter");

var proizvod = document.querySelectorAll(".center");
var kategorija= document.querySelectorAll(".kategorija");
var sviProizvodi = document.querySelector(".svi");
var stolica = document.querySelector(".stolice");
var fotelja = document.querySelector(".fotelje");
let trpezarijske = document.querySelector(".trpezarijske");
let barske = document.querySelector(".barske");
let separe=document.querySelector(".separe");


stolica.addEventListener("click", filter1)
function filter1(){
  
  filterOpcije.classList.add("none");
  filterPlaceholder.innerHTML="Stolice";
  vrsta.innerHTML="Stolice";

for(i=0; i<kategorija.length; i++){
  let kategorijaString=kategorija[i].innerHTML;
  proizvod[i].classList.remove("none")
  if(kategorijaString=="Fotelja" || kategorijaString=="Separe"){   
      proizvod[i].classList.add("none")   
  }
}
};

sviProizvodi.addEventListener("click", filter2)
function filter2(){

  filterOpcije.classList.add("none");
  filterPlaceholder.innerHTML="Sve"
  vrsta.innerHTML="Svi proizvodi"


for(j=0; j<proizvod.length; j++){
      proizvod[j].classList.remove("none")
      proizvod[j].classList.add("block")   
}
}

fotelja.addEventListener("click", filter3)
function filter3(){

  filterOpcije.classList.add("none");
  filterPlaceholder.innerHTML="Fotelje"
  vrsta.innerHTML="Fotelje"

for(k=0; k<proizvod.length; k++){
  proizvod[k].classList.remove("none")
  if(kategorija[k].innerHTML!=="Fotelja"){   
    proizvod[k].classList.add("none")   
}
}
}

trpezarijske.addEventListener('click', filterTRP)
  function filterTRP(){
    filterOpcije.classList.add("none");
    filterPlaceholder.innerHTML="Trpezarijske"
    vrsta.innerHTML="Trpezarijske stolice"
  
    for(let i=0; i<proizvod.length; i++){
      proizvod[i].classList.remove("none")
      if(kategorija[i].innerHTML!=="Trpezarijska stolica"){   
        proizvod[i].classList.add("none")   
    }
    }
  }



barske.addEventListener('click', filterBAR)

 function filterBAR(){
  filterOpcije.classList.add("none");
  filterPlaceholder.innerHTML="Barske stolice"
  vrsta.innerHTML="Barske stolice"

  for(let i=0; i<proizvod.length; i++){
    proizvod[i].classList.remove("none")
    if(kategorija[i].innerHTML!=="Barska stolica"){   
      proizvod[i].classList.add("none")   
  }
  }
 }



separe.addEventListener('click', filterSEP);

  function filterSEP(){
    filterOpcije.classList.add("none");
    filterPlaceholder.innerHTML="Separe"
    vrsta.innerHTML="Separe"
  
    for(let i=0; i<proizvod.length; i++){
      proizvod[i].classList.remove("none")
      if(kategorija[i].innerHTML!=="Separe"){   
        proizvod[i].classList.add("none")   
    }
    }
  }

kategorija.forEach(e => {

  e.addEventListener('click', function (e){
    e.preventDefault();

   switch(e.target.innerHTML) {
    
    case "Trpezarijska stolica" :
       filterTRP();    
    break;

    case "Barska stolica" :
      filterBAR();    
   break;

   case "Separe" :
    filterSEP();    
  break;
  
    case "Fotelja" :
       filter3();
    break;
  
  } 
  });
});


// uzimanje html a

let cardsNode = document.querySelectorAll(".card-container");
let cards = Array.from(cardsNode);

// uzimanje cene

let cardsBodyNode = document.querySelectorAll(".card-body");

let cardsBody = Array.from(cardsBodyNode);


// let prices = cardsBody.map((item)=>{

  // let cenaRSD = item.childNodes[3].innerHTML;
  // console.log(cenaRSD)
  // return cenaRSD.replace(" RSD", "");
  
// } 
// );

// let cardsSaCenom =[];

// for(let i=0;i<prices.length;i++){

//   let price = prices[i];
//   let card=cards[i];
//   cardsSaCenom.push({price:price, card:card});
// }


// BRISANJE I DODAVANJE U CONTAINER

// let container = document.getElementById("parent");
// let ascButton = document.querySelector(".asc");
// let dscButton = document.querySelector(".dsc");

// ascButton.addEventListener("click", function sortASC(){

//   sortOpcije.classList.toggle("none");
//   sortPlaceholder.innerHTML="Jeftinije"
//   cardsSaCenom.sort((a,b)=>{

//     return a.price-b.price;
//   });

//   container.innerHTML="";
//   cardsSaCenom.forEach((artikal)=>{
//     container.appendChild(artikal.card);
//   })

// });

// dscButton.addEventListener("click", function sortDSC(){

//   sortOpcije.classList.toggle("none");
//   sortPlaceholder.innerHTML="Skuplje"
//   cardsSaCenom.sort((a,b)=>{

//     return b.price-a.price;
//   });

//   container.innerHTML="";
//   cardsSaCenom.forEach((artikal)=>{
//     container.appendChild(artikal.card);

//   })
//   });


// FILTER I SORT MENI 

let filterPlaceholder =  document.querySelector(".vrstaFiltera");
// let sortPlaceholder = document.querySelector(".vrstaSorta")
let filterOpcije = document.querySelector(".filter-opcije");
// let sortOpcije = document.querySelector(".sort-opcije");
let vrsta = document.querySelector(".vrsta");

let filterBtn =  document.querySelector(".filter");
// let sortBtn = document.querySelector(".sort");

filterBtn.addEventListener("click",()=>{
  filterOpcije.classList.toggle("none");
})

// sortBtn.addEventListener('click', ()=>{

//   sortOpcije.classList.toggle("none");
// })


