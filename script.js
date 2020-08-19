
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
