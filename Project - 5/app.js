
let sidebar = document.querySelector(".sidebar")
let toggle = document.querySelector(".sidebar-toggle")
let closebtn = document.querySelector(".close-btn")

toggle.addEventListener("click" , ()=>{
    sidebar.classList.toggle("show-sidebar")
})

closebtn.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar")
})