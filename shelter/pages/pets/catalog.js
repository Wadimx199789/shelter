const laptopScreenWidth = 1280;
const tabletScreenWidth = 768;
const phoneScreenWidth = 320;
const cards = document.querySelectorAll(".ourPets__card");
const visibleCardClass = 'ourPets__card--visible';
const defaultDisplayInfo = {
    displayCount: getCurrentDisplayCount(),
};

function getCurrentDisplayCount(){
    const bodyWidth = document.body.clientWidth;
    
    if(bodyWidth > laptopScreenWidth) {
        return 8;
    } else if(bodyWidth <= laptopScreenWidth && bodyWidth >= tabletScreenWidth) {
        return 6;
    } else if(bodyWidth < tabletScreenWidth) {
        return 3;
    } else {
        return 3;
    }
}
function showDefault(){
    const countCards = getCurrentDisplayCount();
    for(let i=0;i<countCards;i++){
        cards[i].classList.add(visibleCardClass);
    }
}
function showCards(countCards){
    cards.forEach((card)=>{
        if(card.classList.contains(visibleCardClass)){
            card.classList.remove(visibleCardClass);
        }
      })
    for(let i=0; i<countCards; i++){
        cards[i].classList.add(visibleCardClass);
    }
}


showDefault();
window.addEventListener('resize', (_) => {
    let countCards = getCurrentDisplayCount()
    showCards(countCards);

});

