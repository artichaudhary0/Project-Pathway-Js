// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

let modelOverlay = document.querySelector(".modal-overlay")
let modelBtn  = document.querySelector(".modal-btn")
let closeBtn = document.querySelector(".close-btn")

modelBtn.addEventListener("click",()=>{
    modelOverlay.classList.add("open-modal")
})

closeBtn.addEventListener("click",()=>{
    modelOverlay.classList.remove("open-modal")
})

