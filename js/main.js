const fire = document.querySelector('.fire')
const menu = document.querySelector('.menu')

fire.addEventListener('click', () => {

    fire.classList.toggle('rotate')
    menu.classList.toggle('show')
})

