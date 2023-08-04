
const createtotobutton=document.querySelector(".todo .add_new_todo button");
const createtotoinput=document.querySelector(".todo .add_new_todo input");
const todolist=document.querySelector(".todo ul");



// show todo item 

const showtodoitem=()=>{

// get data to local storage
let todos=[];
if(localStorage.getItem("todos")){
    todos=JSON.parse(localStorage.getItem("todos"));
};

    let content="";
   todos.map((item,index)=>{
    content+=`
    
    <li>
    <p>${index+1} .${item} </p>
    <button onclick="deletetodo('${item}')"><i class="fa-solid fa-trash-can"></i></button>
   </li>
    
    `;
   });

   todolist.innerHTML=content;

}
showtodoitem();

// create totobutton 

createtotobutton.onclick=()=>{


let todos=[];
if(localStorage.getItem("todos")){
    todos=JSON.parse(localStorage.getItem("todos"));
};



const addtodo=createtotoinput.value;
if(addtodo){
    todos.push(addtodo);
    createtotoinput.value="";
}else{
    alert("You must need to add todo data");
}
// send data to local storage
localStorage.setItem("todos",JSON.stringify(todos));
showtodoitem();
};


// After delete todo data

function deletetodo(item){

    let todos=[];
    if(localStorage.getItem("todos")){
        todos=JSON.parse(localStorage.getItem("todos"));
    };

    const afterdeletetodo=todos.filter((data)=>data != item);
    todos=afterdeletetodo;

   localStorage.setItem("todos",JSON.stringify(afterdeletetodo));

    showtodoitem();
   
};

    






