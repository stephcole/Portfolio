// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//this function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//this function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//this function changes the slide when the dots are clicked
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
  var dots = document.getElementsByClassName("dot");
  // This takes all elements with the class name "dot" and stores them in the variable array "dots"
  if (n > slides.length) {slideIndex = 1};
  // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
  if (n < 1) {slideIndex = slides.length};
  // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      // This for loop takes each item in the array "slides" and sets the display to none
  }
  for (i = 0; i <dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      //this for loop takes each item in the array "dots" and removes "active" which removes the actve styling
  }
  slides[slideIndex - 1].style.display = "block";
  //this displays the imagein the slideshow
  dots[slideIndex -1].className += " active";
  //this ass tthe active styling to the dot associated with the image
}

//this codwe will create close the contact form when the user clicks off of it
//the first step is to add an ecent listener for any clicks on the website
document.addEventListener("click", function(event){
  //here we states that is the click happens on the cancel button OR anywhere that is not the contact form AND the cluck does not happen on any element with the contact class th call the closeForm() function
  if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
      closeForm()
  }
}, false )