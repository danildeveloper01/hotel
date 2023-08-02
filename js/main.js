const testimonials = document.querySelector('.container-scroller');
const scroller = document.querySelector('.scroller');
const nextBtn = document.querySelector('.btn.next');
const prevBtn = document.querySelector('.btn.prev');
const itemWidth = document.querySelector('.comment-nate').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);
  
function scrollToNextItem() {
    scroller.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
}
function scrollToPrevItem() {
    scroller.scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
};

function scrollToNextItem() {
    if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
        scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
    else        
        scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
 }
 function scrollToPrevItem() {
    if(scroller.scrollLeft != 0)
        scroller.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
    else
         scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
 };