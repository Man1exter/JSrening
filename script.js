const btn = document.querySelector("button");
let number = 1;

 const addElement = function () {
     const div = document.createElement('div');
     document.body.appendChild(div);
     div.textContent = number;
     number++;
 }
 btn.addEventListener("click", addElement);
