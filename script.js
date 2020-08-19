const btn = document.querySelector("button"); //pobranie z dom
let number = 1; //stworzenie zmiennej 


//odwilanie sie do funkcji ze zmiennych
 const addElement = function () { //wezeł hmtl
     const div = document.createElement('div');
     document.body.appendChild(div);
     div.textContent = number;
     number++;
 }
 btn.addEventListener("click", addElement);
