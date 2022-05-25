/////////////////////////////////////////////////////////
// this is for the navigation
/////////////////////////////////////////////////////////
const hamburger = document.getElementById("hamburger");
const navButtons = document.getElementById("nav-buttons");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navButtons.classList.toggle("active");
});

document.querySelectorAll("#nav-link").forEach((n) =>
  n.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navButtons.classList.remove("active");
  })
);

/////////////////////////////////////////////////////////
// this is for the dropdowns in appointment section
/////////////////////////////////////////////////////////
const serviceBtn = document.getElementById("service-btn-show");
const dropdownService = document.getElementById("dropdown-service");

serviceBtn.addEventListener("click", function () {
  dropdownService.classList.toggle("show");
});

const barberBtn = document.getElementById("barber-btn-show");
const dropdownBarber = document.getElementById("dropdown-barber");

barberBtn.addEventListener("click", function () {
  dropdownBarber.classList.toggle("show");
});

const timeBtn = document.getElementById("time-btn-show");
const dropdownTime = document.getElementById("dropdown-time");

timeBtn.addEventListener("click", function () {
  dropdownTime.classList.toggle("show");
});

const contactBtn = document.getElementById("contact-btn-show");
const dropdownContact = document.getElementById("dropdown-contact");

contactBtn.addEventListener("click", function () {
  dropdownContact.classList.toggle("show");
});

/////////////////////////////////////////////////////////
// taking all the info after confirm button is pressed
/////////////////////////////////////////////////////////
const confirmBtn = document.getElementById("confirm-btn");
const dateInput = document.getElementById("date-input");
const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");

//this are global variables
//this array will hold every selections made with checkboxes
let checkboxesStored = [];

//this will store our selected date
let dateSelected;

//this will collect the user contact information
let nameEntered;
let numberEntered;

//this will give us the current date
//and will allow us to compare it with the user selected date
//if it's smaller than we ask him to enter it again
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;

//confirm button when clicked is collecting all the data
confirmBtn.addEventListener("click", function () {
  //this is going to check which checkboxes is checked and it will take that value and add it to our array
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      checkboxesStored.push(checkbox.value);
    }
  }
  dateSelected = dateInput.value;
  if (dateSelected < today) {
    console.log("You cannot go back in time! Choose your date carefully.");
  }

  nameEntered = nameInput.value;
  numberEntered = numberInput.value;
});

/////////////////////////////////////////////////////////
// this code is for the slideshow
/////////////////////////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

//make slideshow visible when my work button is pressed
// this is for Iulian
const iulianWorkBtn = document.getElementById("iulian-work-btn");
const iulianSlideShow = document.getElementById("iulian-slideshow");
const closeSlideshowBtn = document.getElementById("close-btn-slideshow");
//this is for Adi
const adiWorkBtn = document.getElementById("adi-work-btn");
const adiSlideShow = document.getElementById("adi-slideshow");
const closeSlideshowBtnAdi = document.getElementById("close-btn-slideshow-adi");
//this is for Stefan
const stefanWorkBtn = document.getElementById("stefan-work-btn");
const stefanSlideShow = document.getElementById("stefan-slideshow");
const closeSlideshowBtnStefan = document.getElementById(
  "close-btn-slideshow-stefan"
);

iulianWorkBtn.addEventListener("click", function () {
  iulianSlideShow.classList.add("visible");
});

adiWorkBtn.addEventListener("click", function () {
  adiSlideShow.classList.add("visible");
});

stefanWorkBtn.addEventListener("click", function () {
  stefanSlideShow.classList.add("visible");
});

closeSlideshowBtn.addEventListener("click", function () {
  iulianSlideShow.classList.remove("visible");
});

closeSlideshowBtnAdi.addEventListener("click", function () {
  adiSlideShow.classList.remove("visible");
});

closeSlideshowBtnStefan.addEventListener("click", function () {
  stefanSlideShow.classList.remove("visible");
});

// toggle scroll active for navigation bar
// this will change the color of our navbar when window is scrolled
window.addEventListener("scroll", function () {
  const navigationBar = document.getElementById("nav");
  let windowPosition = window.scrollY > 0;
  navigationBar.classList.toggle("scroll-active", windowPosition);
});
