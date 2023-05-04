

const inputbox = document.querySelector(".inputbox input");
const btn = document.getElementById("btn");
const list = document.querySelector("div ul");


btn.onclick =  function ()
{
    
    if(inputbox.value == "")
    {
        window.alert("Plase Add Task");
    }
    else{
        
       setTask(inputbox.value);
        
    }

    
}
console.log(document.getElementById("checkicon"));
function setTask(value)
    {
        let task = document.createElement('li');
        let p = document.createElement('p');
        let iconcheck = document.createElement('i');
        let icondelet = document.createElement('i');
        let text = document.createTextNode(value);

       
        
        iconcheck.className = "fa-sharp fa-solid fa-circle-check still";
        icondelet.className = "fa-solid fa-trash"
        icondelet.style.color = "red";
        iconcheck.setAttribute("id","checkicon");
        
        
        p.appendChild(iconcheck);
        p.appendChild(text);
        task.appendChild(p);
        
        console.log(task);
        
        task.appendChild(icondelet)
        list.appendChild(task);
        inputbox.value = "";
        
    }