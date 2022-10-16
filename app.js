let slide = 0;
let slideAmount = 2;
showSlides();

function showSlides() {
  let section1 = $("#section1");
  section1.css("background-image",`linear-gradient(rgba(10,10,10, 0.9), rgba(29, 29, 29, 0.5)), url('images/background${slide+1}.jpg')`);
  slide = (slide + 1) % slideAmount;
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}