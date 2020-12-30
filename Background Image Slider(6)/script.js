const next = document.querySelector(".nextBtn")
const prev = document.querySelector(".prevBtn")
const container = document.querySelector(".container")

let img = 1;

next.addEventListener('click', nextBackground)
prev.addEventListener('click', prevBackground)

function nextBackground() {
    container.animate([{opacity: 0.2},{opacity:1.0}], {duration: 1000, fill:'forwards'})
    img++;
    if(img === 5) {
        img = 0;
    }
    container.style.backgroundImage = `url(img/bcg-${img}.jpg)`
}

function prevBackground() {
    container.animate([{opacity: 0.2},{opacity:1.0}], {duration: 1000, fill:'forwards'})
    img--;
    if(img === -1) {
        img = 4;
    }
    container.style.backgroundImage = `url(img/bcg-${img}.jpg)`
}
