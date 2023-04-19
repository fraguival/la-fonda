let images = document.querySelectorAll('.gallery__image')
let modal = document.querySelector('.modal')
let image = document.querySelector('.modal__image')
let btn = document.querySelector('.modal__btn')

for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', (e) => {
                modal.classList.toggle('modal--open')
                let src = e.target.src
                image.setAttribute('src', src)
        })
}

btn.addEventListener('click', () => {
        modal.classList.toggle('modal--open')
})