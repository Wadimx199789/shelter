const burgerButton = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".header__menu-link");
const overlayBlock = document.querySelector(".header__menu--overlay");

function toggleMenu(){
    burgerButton.classList.toggle("header__burger--active");
    menu.classList.toggle("header__menu--active");
}
burgerButton.addEventListener("click",toggleMenu);
overlayBlock.addEventListener("click",toggleMenu);
menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener("click",toggleMenu);
})