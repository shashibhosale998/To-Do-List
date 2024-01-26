const input=document.getElementById("input")
const listoftask=document.getElementById("listoftask")
let todos=[];
const maxtask=5;
function addtask(task){
    if(input.value==='')
    {
        alert("Please write something! ")
    }
   else if(todos.length<maxtask)
    {
        
        let li=document.createElement("li")
        li.innerHTML=input.value
        listoftask.appendChild(li)
        todos.push(task)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
       
    }
    
    else
    {
        alert("you can add only 5 tasks")
    }
   
    input.value= "";
    savedata();
   
}
listoftask.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",listoftask.innerHTML)
}
function showdata(){
    listoftask.innerHTML=localStorage.getItem("data")
}
showdata()

