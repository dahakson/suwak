function GetPrice(){
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  var Etyk = document.getElementById("Etykieta");
  var Price = document.getElementById("Cena");

  var Netto;
  var Laczna;

  slider.oninput = function() {
    switch(this.value){
      case "0": Netto = 0; Laczna = 0; break;
      case "1": if(Etyk.checked==false){Netto = 8.70; Laczna = Netto*100; break; }else{ Netto = 7.20; Laczna = Netto*100; break;}
      case "2": if(Etyk.checked==false){Netto = 7.00; Laczna = Netto*200; break; }else{ Netto = 5.70; Laczna = Netto*200; break;}
      case "3": if(Etyk.checked==false){Netto = 6.10; Laczna = Netto*300; break; }else{ Netto = 5.20; Laczna = Netto*300; break;}
      case "4": if(Etyk.checked==false){Netto = 5.40; Laczna = Netto*500; break; }else{ Netto = 4.70; Laczna = Netto*500; break;}
      case "5": if(Etyk.checked==false){Netto = 4.70; Laczna = Netto*1000; break; }else{ Netto = 4.20; Laczna = Netto*1000; break;}
      case "6": if(Etyk.checked==false){Netto = 4.50; Laczna = Netto*2000; break; }else{ Netto = 4.10; Laczna = Netto*2000; break;}
      case "7": if(Etyk.checked==false){Netto = 4.15; Laczna = Netto*3000; break; }else{ Netto = 3.80; Laczna = Netto*3000; break;}
      case "8": if(Etyk.checked==false){Netto = 3.95; Laczna = Netto*5000; break; }else{ Netto = 3.70; Laczna = Netto*5000; break;}
      case "9": output.innerHTML = "Ustalane indywidualnie"; break;
    }
    Netto = Netto.toFixed(2);
    output.innerHTML = Netto + " zł";
    Laczna = Laczna.toFixed(2);
    Price.innerHTML = Laczna + " zł";
    // console.log(Netto)
    // console.log(output.innerHTML);
  }
}

// function GetIlosc(){
//   const myRange = document.getElementById('myRange');
//   var Cena = document.getElementById('Cena');
//   setValue = ()=>{
//       const
//           newValue = Number( (myRange.value - myRange.min) * 100 / (myRange.max - myRange.min) ),
//           newPosition = 10 - (newValue * 0.2);
      
//       myRange.oninput = function(){
//           switch(this.value){
//               case "0": Cena.innerHTML = 0; break;
//               case "1": Cena.innerHTML = 100; break;
//               case "2": Cena.innerHTML = 200; break;
//               case "3": Cena.innerHTML = 300; break;
//               case "4": Cena.innerHTML = 500; break;
//               case "5": Cena.innerHTML = 1000; break;
//               case "6": Cena.innerHTML = 2000; break;
//               case "7": Cena.innerHTML = 3000; break;
//               case "8": Cena.innerHTML = 5000; break;
//               case "9": Cena.innerHTML = "<"+5000; break;
//           }
//       }
//       Cena.innerHTML = `<span>${Cena.innerHTML}</span>`;
//       Cena.style.left = `calc(${newValue}% + (${newPosition}px))`;
//   };
//   document.addEventListener("DOMContentLoaded", setValue);
//   myRange.addEventListener('input', setValue);
// }