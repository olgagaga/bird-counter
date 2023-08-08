let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count 
    if (saveEl.textContent == "Previous entries: "){
        saveEl.textContent += countStr
    } else {
        saveEl.textContent += " - " + countStr 
    }

    countEl.textContent = 0
    count = 0
}

//let a = "4 -";
//console.log(a.slice(0, -2))
