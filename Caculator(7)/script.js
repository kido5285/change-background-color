let btns = document.querySelectorAll(".btn")
let screen = document.querySelector(".screen")
let equal = document.querySelector(".btn-equal")
let clear = document.querySelector(".btn-clear")

for(let i=0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        screen.value += btns[i].getAttribute('data-num')
    })
}

equal.addEventListener('click', function() {
    if(screen.value === '' ) {
        alert('No Value')
    } else {
    screen.value = eval(screen.value)
    }
})

clear.addEventListener('click', function() {
    screen.value = ''
})