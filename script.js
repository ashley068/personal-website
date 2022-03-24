//nav
var navItem = document.getElementsByClassName("item");
for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function () {
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].className = navItem[i].className.replace(" active", "");
    }
    navItem[i].className += " active";
  });
}

// carousel
function currentSlide(n) {
  showSlides(n);
}
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[n - 1].style.display = "block";
  dots[n - 1].className += " dot-active";
}

//accordion

var acc = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
