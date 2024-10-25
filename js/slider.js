class Slider {
    constructor(id) {
        this.slider = document.getElementById(id)
        this.images = [...this.slider.querySelectorAll('img')]
        this.imageSelected = 0
    }
    applyEvents(){
        this.slider.querySelector('.slider__arrow--right').addEventListener('click', () => {
            this.imageSelected++
            if(this.imageSelected === this.images.length){
                this.imageSelected = 0
            }
            this.changeImage()
        })
        this.slider.querySelector('.slider__arrow--left').addEventListener('click', () => {
            this.imageSelected--
            if(this.imageSelected === -1){
                this.imageSelected = this.images.length - 1
            }
            this.changeImage()
        })
    }
    changeImage(){
        this.images.forEach(image => image.classList.add('none'))
        this.images[this.imageSelected].classList.remove('none')
    }
}

const slider = new Slider('slider')
slider.applyEvents()