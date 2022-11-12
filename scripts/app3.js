const btnUp = document.querySelector('.button__up')
const btnDown = document.querySelector('.button__down')
const sidebar = document.querySelector('.sidebar')
const slides = document.querySelector('.slides')
const container = document.querySelector('.container')

const slidesCount = slides.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

btnUp.addEventListener('click', () => {
    changeSlide('up')
})

btnDown.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    }
    else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }


    const height = container.clientHeight

    slides.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}