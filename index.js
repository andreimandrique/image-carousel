const arrayOfImagesLocation = [
  "./images/genshin-impact.jpg",
  "./images/league of legends.jpg",
  "./images/minecraft.jpg",
  "./images/valorant.jpg",
];

const imageSlides = document.querySelector(".image-slides");
const circleContainer = document.getElementById("circleContainer");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

arrayOfImagesLocation.forEach((item, index) => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.setAttribute("id", "circle" + index);
  circleContainer.appendChild(circle);
});

let currentSlideIndex = 0;

function updateSlide(direction) {
  // Update currentSlideIndex based on direction (prev or next)
  currentSlideIndex =
    (currentSlideIndex + direction + arrayOfImagesLocation.length) %
    arrayOfImagesLocation.length;

  const currentImage = arrayOfImagesLocation[currentSlideIndex];
  imageSlides.style.backgroundImage = `url("${currentImage}")`;

  // Update active circle color
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => (circle.style.backgroundColor = "transparent")); // Reset all circles
  document.getElementById(`circle${currentSlideIndex}`).style.backgroundColor =
    "blue";
}

// Automatic slide update (every 3 seconds)
let intervalId = setInterval(() => {
  updateSlide(1); // Update to next slide every 3 seconds
}, 3000); // Interval time in milliseconds (3 seconds)

prev.addEventListener("click", () => {
  clearInterval(intervalId);
  updateSlide(-1);
  intervalId = setInterval(() => updateSlide(1), 3000);
});

next.addEventListener("click", () => {
  clearInterval(intervalId);
  updateSlide(1);
  intervalId = setInterval(() => updateSlide(1), 3000);
});

updateSlide(0);
