const next = document.querySelector(".nextBtn")
const prev = document.querySelector(".prevBtn")
const container = document.querySelector(".container")

let img = 1;

next.addEventListener('click', nextBackground)
prev.addEventListener('click', prevBackground)

function nextBackground() {
    img++;
    if(img === 5) {
        img = 0;
    }
    container.style.backgroundImage = `url(img/bcg-${img}.jpg)`
}

function prevBackground() {
    img--;
    if(img === -1) {
        img = 4;
    }
    container.style.backgroundImage = `url(img/bcg-${img}.jpg)`
}