let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    // Delay the first image for 5 seconds, and others for 3 seconds
    if (slideIndex == 1) {
        setTimeout(showSlides, 5000); // Delay for offer image
    } else {
        setTimeout(showSlides, 3000); // Delay for other images
    }
}


