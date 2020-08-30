const tasks=document.querySelector("#task") ;
const add=document.querySelector("#add");
const clear=document.querySelector("#clear");
const items=document.querySelector(".items");
const error=document.querySelector(".error");
const success=document.querySelector(".success");

add.addEventListener("click",function(){

const task=document.createElement("div");
task.classList.add("item");
task.innerHTML=`<h3>${tasks.value}</h3>
<div class="icons">
<i class="far fa-check-circle com"></i>
<i class="fas fa-edit edit"></i>
<i class="far fa-times-circle del"></i>
</div>`

if(tasks.value==="") {
  error.classList.add("show");

  setTimeout(function(){
    error.classList.remove("show");
  },1500)
}
else {
  items.appendChild(task);
  items.classList.add("show");
  success.classList.add("show");

  setTimeout(function(){
    success.classList.remove("show");
  },1500)
}
tasks.value="";

})


items.addEventListener("click",function(e){
if(e.target.classList.contains("com")){
const text=e.target.parentElement.previousElementSibling;
text.classList.toggle("cross");
}
else if(e.target.classList.contains("del")) {
  e.target.parentElement.parentElement.remove();
}
else if(e.target.classList.contains("edit")) {
const elem=e.target.parentElement.previousElementSibling;
const input=document.createElement("input");
input.classList.add("style");
input.value=elem.innerText;
elem.innerHTML="";
elem.appendChild(input);

input.addEventListener("blur",function(){
  elem.innerText=input.value;
})

}
e.preventDefault();


})




clear.addEventListener("click",function(){
  items.innerHTML="";
  items.classList.remove("show");
})
