const input = document.getElementById('task-box');
const list = document.getElementById('tasks-list');
function celebration()
{ confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
               });
}
 
 function addTask()
 {
    console.log(input.value);
    if(input.value === '')
    {
        alert('please write your task first .. ');
    }
    else {
       
        let newLi= document.createElement("li");
        let del = document.createElement("button");
        newLi.innerHTML = input.value;
        list.appendChild(newLi);
        del.innerHTML = '<img style="width: 25px" src="delete.png" />';
        newLi.append(del);
        del.addEventListener("click",function(){
            let parent = this.parentNode;
            parent.remove();
           });
        newLi.addEventListener('click',function(){
            let iscompleted = this.classList.toggle('completed');
            if(iscompleted){celebration();}
        },false);      

    }
    input.value = "";     

 }
 