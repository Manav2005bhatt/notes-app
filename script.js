let notescontainer=document.querySelector(".notes-container");
let Btn=document.querySelector(".btn");
let InputBox=document.querySelectorAll(".input-box");

function showNotes(){
    notescontainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updatestorage(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}

Btn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="delete.png";
    notescontainer.appendChild(inputbox).appendChild(img);
})
notescontainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup=function(){
                updatestorage();
            }
        });
    }
    
})