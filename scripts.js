var slideIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
  //add var to javascript
  
  var leftArrow = document.getElementById("left-arrow");
  var rightArrow = document.getElementById("right-arrow");

  //add event listener for arrow clicks (how to streamline arrow code)
  rightArrow.addEventListener("click", plusSlides('next'));

  //add event listener for arrow clicks
  //leftArrow.addEventListener("click", plusSlides('prev'));

  
  
});

// Next/previous controls
  function plusSlides(direction) {
    if(direction == 'next') {
      showSlides(slideIndex += 1);
    } else {
      showSlides(slideIndex -= 1);
    }
  }
  
  // Thumbnail image controls
  // currentSlide(n) {
    //showSlides(slideIndex = n);
  //}
  
  function showSlides(n){
    alert(slideIndex);
    var i;
    //create array of all slides
    var slides = document.getElementsByClassName("slide");
    //select which slide to display
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
  }
