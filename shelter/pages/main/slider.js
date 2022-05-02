const slidesContainer = document.querySelector("#ourFriends__slides");
const pets = [{
    name: 'Charly',
    img:'../../assets/images/pets-charly.png',
    type: 'Dog',
    breed: 'Labrador',
    description: 'Charly is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This boy really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Fredie',
    img: '../../assets/images/pets-fredie.png',
    type: 'Cat',
    breed: 'British',
    description: 'Fredie is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This boy really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '9 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Jennifer',
    img: '../../assets/images/pets-jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Katrine',
    img: '../../assets/images/pets-katrine.png',
    type: 'Cat',
    breed: 'british cat',
    description: 'Katrine is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '4 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Scarlet',
    img: '../../assets/images/pets-scarlet.png',
    type: 'Dog',
    breed: 'Labrador',
    description: 'Scarlete is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '4 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Sophia',
    img: '../../assets/images/pets-sophia.png',
    type: 'Dog',
    breed: 'Labrador',
    description: 'Sophia is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '1 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Timmy',
    img: '../../assets/images/pets-sophia.png',
    type: 'Cat',
    breed: 'british',
    description: 'Timmy is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This boy really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '8 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Woody',
    img: '../../assets/images/pets-woody.png',
    type: 'Dog',
    breed: 'Labrador',
    description: 'Timmy is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This boy really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '8 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  }
  
];
pets.forEach((pet)=>{
    let slide = document.createElement("div");
    slide.className = "ourFriends__slide";
    slide.innerHTML =
    `<img class='ourFriends__slide-img' src='${pet.img}' alt=''></img>
    <h3 class="ourFriends__slide-title">${pet.name}</h3>
    <a href="#" class="ourFriends__slide-button button">Learn more</a>`;
    slidesContainer.append(slide);
    
});
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

// slidesContainer.appendChild("div");


