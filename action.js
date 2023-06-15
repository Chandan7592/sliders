let f = 0;
slideshow(f);
function controller(x){
    f = f + x;
    slideshow(f);
}

function slideshow(num){
 let slides = document.getElementsByClassName('slide');
    if(num == slides.length){
        f = 0;
        num = 0;
    }
    if(num < 0){
        f = slides.length-1;
        num = slides.length-1;
    }
    
 for(let y of slides){
    y.style.display="none"
 }
 slides[num].style.display = "block";
}