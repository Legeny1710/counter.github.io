let countEl = document.getElementById("count-el")
let count = 0

function up() {
   count = count + 1
   countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
}