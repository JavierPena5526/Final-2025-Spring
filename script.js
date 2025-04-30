const dreamContainer = document.querySelector('.dream-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes(){
    dreamContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", dreamContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/trash-can-icon-28675.png";
    dreamContainer.appendChild(inputBox).appendChild(img);
})

dreamContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})