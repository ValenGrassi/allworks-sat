const left = document.getElementById("left");
const right = document.getElementById("right");

window.onload = () => {
    left.classList.add("blur");
    right.classList.add("blur");    
}

left.addEventListener("mouseover", () => {
    left.classList.remove("blur");
})

left.addEventListener("mouseout", () => {
    left.classList.add("blur");
})

right.addEventListener("mouseover", () => {
    right.classList.remove("blur");
})

right.addEventListener("mouseout", () => {
    right.classList.add("blur");
})