const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click" , function(){
    const randomNumer  = getRandomNumber()
    console.log(randomNumer)
    document.body.style.backgroundColor = colors[randomNumer]
    color.textContent = colors[randomNumer]
})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length)
}