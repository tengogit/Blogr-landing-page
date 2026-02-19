const body = document.body
const openBtn = document.getElementById('burger-btn')
const closBtn = document.getElementById('close-btn')
const burgerMenu = document.getElementById('burger-menu')



function burger() {
    burgerMenu.classList.toggle('show-burger-menu')
    closBtn.classList.toggle('show-close-btn')
    openBtn.classList.toggle('hide-burger-btn')
    body.classList.toggle('no-scroll')
    burgerMenu.classList.toggle('scroll')
}
openBtn.addEventListener('click', burger)
closBtn.addEventListener('click', burger)