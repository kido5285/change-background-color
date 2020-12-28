const btn = document.querySelector('#btn')
const txtbox = document.querySelector('input')
const output = document.querySelector('.messageOut')

btn.addEventListener('click', result) 

function result() {
    if(txtbox.value === "") {
        alert("No Message")
    } else {
        output.innerHTML = txtbox.value
    }
}