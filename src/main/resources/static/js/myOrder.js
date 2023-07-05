// Variables
const rateBtn = document.getElementById("rate-btn")
let rateContents = document.getElementById("rating-contents")
rateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if (rateContents.style.display == "none")
    {
        rateContents.style.display = "flex"
    }
    else
    {
        rateContents.style.display = "none"
    }
})