
"use strict"
class SliderCarousel {
    constructor({ wrap,
        main,
        next,
        prev,
        position = 0,
        slidesToShow = 3
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelectorAll(".ourFriends__slide")
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            widthSlide: Math.floor(100/this.slidesToShow),
            position,
            maxPosition:8 - this.slidesToShow,
        }
    }
    init() {
        this.addClass();
        this.addStyles();
        if (this.next && this.prev) {
            this.controlSlider();
        }
    }
    addClass() {
        this.main.classList.add("slider");
        this.wrap.classList.add("slider__wrap");
        for (const item of this.slides) {
            item.classList.add("slider__item");
        }
    }
    addStyles() {
        const style = document.createElement("style");
        style.id = 'sliderCarousel-style';
        style.textContent = `
        .slider{
            overflow:hidden;
            
        }
        .slider__wrap{
            display:flex;
            transition: transform 0.5s;
            will-change:transform;
            width:990px;
            
        }
        .slider__item{
            flex:0 0 ${this.options.widthSlide}%;
        }`
        document.head.appendChild(style);
    }
    controlSlider() {
        this.prev.addEventListener("click", this.prevSlider.bind(this));
        this.next.addEventListener("click", this.nextSlider.bind(this));
    }
    prevSlider() {
        if (this.options.position >= 0) {
            --this.options.position;
            console.log(this.options.position);
            if (this.options.position <=0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }

    }
    nextSlider() {
        ++this.options.position;
        if (this.options.position > this.options.maxPosition) {
            this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
    }
    checkWindowWidth(){
        let slidesToShow = 3;
        window.addEventListener("resize",(_)=>{
            this.options.widthSlide = slidesToShow;
            this.options.widthSlide = Math.floor(100/slidesToShow);
            if(document.documentElement.scrollWidth >1200){
                this.wrap.style.width="990px";
                slidesToShow = 3;
            }
            if(document.documentElement.scrollWidth < 1200){
                this.wrap.style.width="630px";
                slidesToShow = 2;
            }
            if(document.documentElement.scrollWidth < 768){
                slidesToShow = 1;
                this.wrap.style.width="270px"
            }
            this.init();
        });
    }
}
const options = {
    main: ".ourFriends__slider",
    wrap: "#ourFriends__slides",
    prev: ".arrow-left",
    next: ".arrow-right",

}
const carousel = new SliderCarousel(options);
carousel.init();
carousel.checkWindowWidth();