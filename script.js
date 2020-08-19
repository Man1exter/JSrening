
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


 const changeSquare = document.querySelector('#square');
 document.body.appendChild(square);

let grow = true; //!!!!!!!!!!!!!!!!!!!!!!!!!!

 let size = 100;
 square.style.width = size + "px";
 square.style.height = size + "px";
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
        grow = false
    }
    else if ( size <= 0){
        grow = true;
    }
})