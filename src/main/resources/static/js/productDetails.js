const heartBtn = document.querySelector(".heart");

function wishToggle(){
    if(heartBtn.style.color == "red")
    {
        heartBtn.style.color = "grey"
    }
    else
    {
        heartBtn.style.color = "red"
    }
}