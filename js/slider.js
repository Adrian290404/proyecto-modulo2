class Slider {
    constructor(id) {
        this.slider = document.getElementById(id)
        this.images = [...this.slider.querySelectorAll('img')]
        this.imageSelected = 0
        this.applyEvents()
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
        this.createDots()
    }
    changeImage(){
        this.images.forEach(image => image.classList.add('none'))
        this.images[this.imageSelected].classList.remove('none')
        this.changeDots()
    }
    createDots(){
        let cont = 1
        const container = this.slider.querySelector('.slider__dots')
        this.images.forEach(image => {
            const dot = document.createElement('i')
            dot.id = 'dot' + cont
            cont++
            dot.classList.add('fa-solid', 'fa-circle', 'fa-xs')
            dot.addEventListener('click', () => {
                this.imageSelected = this.images.indexOf(image)
                this.changeImage()
            })
            container.appendChild(dot)
            document.getElementById('dot1').classList.add('active')
        })
    }
    changeDots(){
        const dots = this.slider.querySelectorAll('.fa-circle')
        dots.forEach((dot) => dot.classList.remove('active'));
        const dotSelected = document.getElementById('dot' + (this.imageSelected + 1));
        dotSelected.classList.add('active');
    }
}

const slider = new Slider('slider')