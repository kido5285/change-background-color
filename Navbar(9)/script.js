const logo = document.querySelector(".logo")
const navBtn = document.querySelector(".navbar_btn")
const navLink = document.querySelector('.navbar_links')

navBtn.addEventListener('click', function() {
    let value = navLink.classList.contains('navbar_collapse')
    if(value) {
        navLink.classList.remove('navbar_collapse')
        navBtn.classList.remove('change')
    } else {
        navLink.classList.add('navbar_collapse')
        navBtn.classList.add('change')
    }
})

if(screen.height < 1400 && screen.width < 1400) {
    logo.style.maxHeight = 60;
    logo.style.maxWidth = 152;
} else if(screen.height < 2000 && screen.width < 2000) {
    logo.style.maxHeight = 72;
    logo.style.maxWidth = 180;
} else {
    logo.style.maxHeight = 72
    logo.style.maxWidth = 270
}

