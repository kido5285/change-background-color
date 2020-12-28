const colorBtn = document.querySelector(".button")
const body = document.querySelector("body")
const colors = ['#C0C0C0', '808080', '#FF0000', '#800000', 'FFFF00', '808000', '#00FF00', '	#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '800080']

colorBtn.addEventListener('click', changeColor);

function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[random];
}