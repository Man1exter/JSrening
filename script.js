
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






