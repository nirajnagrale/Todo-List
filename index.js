input = document.getElementById("task");

addTask = document.getElementById("addTask_btn");

addTask.onclick = function () {
    let list_item = document.createElement("li");
    let desc = document.createElement("p");
    desc.innerText = input.value+"\n";
    if(input.value.length===0){
        alert("Please enter a task");
        exit();
    }
    //x btn
    let x_btn = document.createElement("button");
    x_btn.innerText = "❌";
    x_btn.style.marginLeft="10px";
    x_btn.onclick = function (event) {
        event.target.parentElement.remove();
    }
    // up btn
    let up_btn = document.createElement("button");
    up_btn.innerText = "⬆";
    up_btn.style.marginLeft="10px";
    up_btn.onclick = function(event){
        event.target.parentElement.parentElement.insertBefore(event.target.parentElement, event.target.parentElement.previousElementSibling);
    }
    //down btn

    let down_btn =document.createElement("button");
    down_btn.innerText= "⬇";
    down_btn.style.marginLeft="10px";
    down_btn.style.align="right";
    down_btn.onclick = function(event){
        if(event.target.parentElement.nextElementSibling){
        event.target.parentElement.parentElement.insertBefore(event.target.parentElement.nextElementSibling, event.target.parentElement);
        }
    }

    //add edit button
    let edit_btn = document.createElement("button");
    edit_btn.innerText = "✎";
    edit_btn.style.marginLeft="10px";
    edit_btn.onclick = function(event){
        desc.setAttribute("contentEditable","true");
        desc.setAttribute("spellCheck","false");
    }
    
    list_item.appendChild(desc);
    list_item.appendChild(up_btn);
    list_item.appendChild(down_btn);
    list_item.appendChild(x_btn);
    list_item.appendChild(edit_btn);
    document.getElementById("container").appendChild(list_item);
}




