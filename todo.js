let add = document.getElementById("add");
let clear = document.getElementById("clear");

let main = document.getElementById("main");

add.style.background ="#000";
clear.style.background = "red";


function clearInput(){
    document.getElementById("task").value ='';
}

add.addEventListener("click",()=>{
    let task = document.getElementById("task").value;
    main.innerHTML += `<div class="java"><p>${task}<input type="checkbox" class="check" onchange="valid()" /></p></div>`;
    clearInput();
   
    if (task === ""){
        alert("you must enter task");
        main.innerHTML = "";
    }    
});

clear.addEventListener("click",()=>{
    main.innerHTML ="";
    
});

function valid(){
   main.style.dispaly = "none";
};


/*

let click = document.getElementById("click");

click.addEventListener("change",()=>{
    if (this.checked){
        console.log("checked!")
    }
});*/