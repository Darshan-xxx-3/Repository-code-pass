let index = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    index++;
    if (index > slides.length) {index = 1} // Reset to first slide if at the end

    slides[index - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}