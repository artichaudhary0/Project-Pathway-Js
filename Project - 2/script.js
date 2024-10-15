let count = 0
const value = document.getElementById("value")

const button = document.querySelectorAll(".btn")
console.log(button)

button.forEach( (btn)=>{
    btn.addEventListener("click",(event)=>{
        let counter = event.currentTarget.classList
        if(counter.contains("decrease"))
        {
            count--
        }else if(counter.contains("increase"))
        {
            count++
        }else if(counter.contains("reset"))
        {
            count = 0
        }
        if(count<0)
            value.style.color = "red"
        if(count>0)
            value.style.color = "green"
        if(count==0)
            value.style.color = "#222"

        value.textContent = count
    })
})





// const decreseBtn = document.querySelector(".decrease")
// const increaseBtn = document.querySelector(".increase")
// const resetBtn = document.querySelector(".reset")


// decreseBtn.addEventListener("click",()=>{
//         count--
//         value.textContent = count
// })

// increaseBtn.addEventListener("click",()=>{
//     count++
//     value.textContent = count
// })

// resetBtn.addEventListener("click",()=>{
//     count = 0
//     value.textContent = count
// })




