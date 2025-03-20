// document.getElementById("addTask").addEventListener("click",function(){
//     let taskText = document.getElementById("taskInput").value;
//     let taskDate = document.getElementById("taskDate").value;
// })

// if(!taskText || !taskDate){
//     alert("Please enter task and select date");
//     return;
// }

// let task = {text:taskText,date:taskDate,completed:false}
// console.log(task)

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(text,date){
    let task = {
        text:text,
        date:date,
        completed:false
    };
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));

}  

addTask("project wortk", "2025")