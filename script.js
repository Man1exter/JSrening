
//first button

const btn = document.querySelector("button"); //pobranie z dom
let number = 1; //stworzenie zmiennej 


//odwilanie sie do funkcji ze zmiennych
 const addElement = function () { //wezeł hmtl
     const div = document.createElement('div');
     div.textContent = number;
     document.body.appendChild(div);



     if (number%5 == 0){
         div.classList.add("circle")
     }
     number++;

 }
 btn.addEventListener("click", addElement);




//second button 


 const pst = document.querySelector('#tictac');

const addElement2 = function(){
    const span = document.createElement('span');
    document.body.appendChild(span);
}
 pst.addEventListener("click", addElement2);




 const bet = document.querySelector('#last');

const createElement1 = function(){
    const strong = document.createElement('strong');
    document.body.appendChild(strong);

}
 bet.addEventListener("click", createElement1)
 



 //skrolowanie okna z powiekszajacym i pomnijeszacym sie kwadratem #square
//-------------------------------------------------------

 const changeSquare = document.querySelector('#square');
//  document.body.appendChild(square);

 let grow = true; //!!!!!!!!!!!!!!!!!!!!!!!!!! x = y

 let size = 50;
//  square.style.width = size + "px";
//  square.style.height = size + "px";
//  square.style.backgroundColor = "red"

window.addEventListener("scroll", function(){
    //instrukacje warunkowe na rosniecie i zmniejszanie 
    if(grow == true){
        size += 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
    else{
        size -= 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
    if(size >= window.innerWidth / 2){
        grow = false;
    }
    else if ( size <= 0){
        grow = true;
    }
})
//-------------------------------------------------------
//--------------#verb scrolling effect ----------


// let size = 50;
// let increase = true;
// // const verb = document.querySelector('#verb');
// document.body.style.height = "10000px";
// const div = document.createElement("footer");
// document.body.appendChild(footer);


// footer.style.height = size + "px";
// footer.style.top = "50vh";
// footer.style.width = "100%";
// footer.style.left = 0;
// footer.style.backgroundColor = "white";
// footer.style.position = "fixed";

// // verb.style.height = size - "px";
// const scrollEff = function () {
   
//      if(size > window.innerHeight / 2){
//         increase = !increase;
//     } else if (size <= 0){
//         increase = !increase;
//     }
//     if(increase){
//         size += 10;
//     } else {
//         size -= 10;
//     }
//     verb.style.height = size + "px";
// }
// window.addEventListener("scroll", scrollEff)//



/// this way being better i promise

//----------------- try again ---------------------//
//***************lets do it ------------------------ */


const rect = document.querySelector('#verb');
let growing = true;
let high = 95;
window.addEventListener("scroll", function(){
    if(high >= window.innerHeight / 4){
        growing = false;
    } 
    else if(high <= 0){ //(100 <= 0)
        growing = true;
    }
    
    if(growing == true){
        high += 15;
        rect.style.height = high + "px";
    } 
    else{
        high -= 15;
        rect.style.height = high + "px";
    
    }
    
})

//-----------------*****----------------------------
//----------------------------****------------------
//------****----------------------------------****--


const rof = document.querySelector("#even");
const allItems = document.querySelectorAll("li");
let fontSize = 10;

  rof.addEventListener("click", () => {
    fontSize++;
      
    for (let i = 0; allItems.length; i++){
     allItems[i].style.display = "block";
     allItems[i].style.fontSize = `${fontSize}px`;
    }
 })


 //forEach -> wykonanie na kazdym ele tej listy
 // allItems.forEach((allItems)=>{
     //allItems.style.display = "block";
     //allItems.style.fontSize = fontSize + "px";
 //})
 //fontSize++;

 
//------------------**************-------------------
//----------************--------------***********----
//----------------------**********-------------------


//--------**----------**-----------**---------------**-
//------------**-------------**--------**---------**---
let crew = 0; //wielkosc fonta
let orderSize = 10; //numer porzatkowy jakiegos li

const init = () => { //stowrzenie wszytskiego na stronie
     const enter = document.createElement("button");
     enter.textContent = "Add 10 elements";
     document.body.appendChild(enter);

     enter.style.border = "3px solid red";
     enter.style.height = "110px";
     enter.style.width = "185px";
     enter.style.backgroundColor = "green";
     enter.style.position = "relative";
     enter.style.left = "-33.5%"
     enter.style.top = "-0.9%"


     const rect = document.createElement("section");
    //  ulLi.textContent = [i] + "element";
     document.body.appendChild(rect);

     rect.style.position = "relative";
     rect.style.height = "400px";
     rect.style.width = "400px";
     rect.style.color = "yellow";
    //  ulLi.style.backgroundColor = "gray";
     rect.style.left = "6%";
     rect.style.top = "-1%";
     rect.style.textAlign = "center";

     enter.addEventListener("click", createLi)
}



const createLi = () => { //kazde nacisniecie na przycisk
for (let i = 0; i < 10; i++) {
    const oracle = document.createElement("li");
    oracle.textContent = `Element ${i}`;
    document.querySelector("section").appendChild(oracle); //odwolanie do tego selektora

    oracle.style.color = "white";
    // oracle.style.zIndex = "3";
    oracle.textContent = `Number ${crew++}`;
    oracle.style.fontSize = `${orderSize++}px`    

    oracle.style.display = "block";
}
}
init()

//-----------------------------------------------------------
//------------------new eff ---------------------------------
//-------------------*****------------------------------------
//calc when mousemove on window :0/////
const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {
h1.textContent = `${e.screenX}, ${e.screenY}`;

document.body.style.backgroundColor = `rgb(${e.screenX/20}, ${e.screenY/20}, ${e.screenX/20} )`
})