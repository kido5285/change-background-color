let counter = document.querySelector('.counter')
const btnAdd = document.querySelector('.add')
const btnSub = document.querySelector('.sub')

let count = 0;

btnAdd.addEventListener('click', add)
btnSub.addEventListener('click', sub)

function add() {
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0') {
        counter.style.color = "#29AB87"
    } else if(counter.innerHTML === '0') {
        counter.style.color = "white"
    }
    counter.animate([{opacity:0.2}, {opacity:1.0}], {duration:500, fill:"forwards"})
}

function sub() {
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML < '0') {
        counter.style.color = '#A9BA9D'
    } else if(counter.innerHTML === '0') {
        counter.style.color = "white"
    }
    counter.animate([{opacity:0.2}, {opacity:1.0}], {duration:500, fill:"forwards"})
}