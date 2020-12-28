const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const button = document.querySelector('.btn')
const body = document.querySelector('body')
const hex = document.querySelector('.hex')

button.addEventListener('click', changeColor)

function changeColor() {
    let result = "#"
    for(let i=0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexCode.length);
        result += hexCode[random]
    }
    body.style.backgroundColor = result;
    hex.innerHTML = result;
}