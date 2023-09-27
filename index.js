let right = document.querySelector(".right");
let left = document.querySelector(".left");
let medium = document.querySelector(".medium");
let boxes = document.querySelectorAll(".box");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
btn1.onclick = () =>{
 left.innerHTML+=` <div class="box" draggable="true">Task-1</div>`;
 };
 btn2.onclick = () =>{
  medium.innerHTML+=` <div class="box" draggable="true">Task-1</div>`;
  };
  btn3.onclick = () =>{
    right.innerHTML+=` <div class="box" draggable="true">Task-1</div>`;
  }
for (box of boxes){
 box.addEventListener("dragstart", function(e){
  let selected = e.target;
  right.addEventListener("dragover", function (e) {
   e.preventDefault();
  });
  right.addEventListener("drop", function (e){
   right.appendChild(selected);
   selected = null;
 })
 medium.addEventListener("dragover", function (e) {
  e.preventDefault();
 });
 medium.addEventListener("drop", function (e){
  medium.appendChild(selected);
  selected = null;
})

 left.addEventListener("dragover", function (e) {
  e.preventDefault();
 });
 left.addEventListener("drop", function (e){
  left.appendChild(selected);
  selected = null;
})
})

}


