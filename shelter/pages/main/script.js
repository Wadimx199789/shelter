const menuLinks = document.querySelectorAll(".header__menu-link");


menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener("mouseover",function(event){
        menuLinks.forEach(menuLink=>{
            if(menuLink.classList.contains("active")){
                menuLink.classList.remove("active");
            }
           
        })
        event.target.classList.add("active");
    });
    menuLink.addEventListener("mouseout",function(event){
        event.target.classList.remove("active");
    });
})