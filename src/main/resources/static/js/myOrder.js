// Variables
const postBtn = document.getElementById("post-b");
const postContents = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit-rating");

postBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    widget.style.display = "none";
    postContents.style.display = "block";
    editBtn.onclick = ()=>{
        e.preventDefault();
        widget.style.display = "block";
        postContents.style.display = "none";
    }
    return false;
})