let rtnBtn=document.querySelector(".rtnBtn");

window.onscroll = () => {
    rtnBtn.classList.add("return");
  } ;
  
window.addEventListener("touchmove", e => { 
console.log(e)
}, {passive:true});

var input = document.querySelector(".input");
var search = document.querySelector(".search");
var vrednost;


// search.addEventListener("click", provera);

// input.addEventListener("keypress", (e)=>{
//   if(e.code === "Enter"){
//     e.preventDefault();
//     provera();
  
//   }

// })

// input.addEventListener("submit", provera);


input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   search.click();
   provera();
  }
});


function provera() {

let vrednost=input.value;
let vrednostLC=vrednost.toLowerCase();


    switch(vrednostLC){

      case "galerija":
        window.location = "/galerija.html"
        break;
      
      case "proizvodi":
          window.location = "/proizvodi.html"
      break;

      case "stolica":
        window.location = "/stolice.html";
        
      break;

      case "stolice":
        window.location = "/stolice.html"
      break;
      
      case "fotelje":
        window.location = "/fotelje.html"
      break;
      case "fotelja":
        window.location = "/fotelje.html"
      break;
      case "grand":
        window.location = "/products/grand.html"
        break;
      case "veneraf":
          window.location = "/products/veneraF.html"
      break;
      case "beta lux":
        window.location = "/products/Beta Lux.html"
        break;
        case "alfa inox":
      window.location = "/products/Alfa Inox.html"
      break;
      case "woodside":
        window.location = "/products/Woodside.html"
        break;
        case "alfa x":
          window.location = "/products/Alfa-X.html"
          break;
      case "royal lux":
      window.location = "/products/Royal Lux.html"
      break;
      case "royal":
      window.location = "/products/Royal.html"
      break;
      case "verona":
      window.location = "/products/Verona.html"
      break;
      case "separe01":
        window.location = "/products/Separe01.html"
        break;
        case "separe02":
          window.location = "/products/Separe02.html"
          break;
          case "separe03":
            window.location = "/products/Separe03.html"
            break;
            case "separe04":
              window.location = "/products/Separe04.html"
              break;
              case "separe05":
                window.location = "/products/Separe05.html"
                break;
                case "separe06":
                  window.location = "/products/Separe06.html"
                  break;
        case "separe07":
          window.location = "/products/separe07.html"
          break;
          case "alfa":
            window.location = "/products/alfa.html"
            break;
            case "venera":
              window.location = "/products/venera.html"
              break;
  

    
  
      case "hera":
      window.location = "/products/hera.html"
      break;


      default: 
      alert("Unesite model proizvoda.");
    }
}

