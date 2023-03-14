const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");
let scrollButton = document.querySelector(".material-icons");

// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;
displayCurrentWeather(currentCity);

displayForecast(currentCity);

scrollButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  if (scrollY > 100) {
    scrollButton.style.visibility = "visible";
  } else {
    scrollButton.style.visibility = "hidden";
  }
});
