const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const locationParagraph = document.getElementById("location");
const forecastParagraph = document.getElementById("forecast");

weatherForm.addEventListener("submit", event => {
  event.preventDefault();

  const location = search.value;

  locationParagraph.textContent = "Loading...";

  try {
    fetch(`/weather?address=${location}`).then(response => {
      response.json().then(data => {
        if (data.error) {
          locationParagraph.textContent = data.error;
          forecastParagraph.textContent = "";
        } else {
          locationParagraph.textContent = data.location;
          forecastParagraph.textContent = data.forecast;
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
});
