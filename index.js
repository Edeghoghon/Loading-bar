const counterE1 = document.querySelector(".counter")

const barE1 = document.querySelector(".Loading-bar-front")

let idx = 0;

updatenum()

function updatenum(){
    counterE1.innerText = idx + "%"
    barE1.style.width = idx + "%"
    idx++
    if(idx < 101){
        setTimeout(updatenum, 20)
    }
}

