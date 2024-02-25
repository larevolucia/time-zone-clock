// on load
function showTime() {
  let localElement = document.querySelector("#local");
  if (localElement) {
    let localTimeZone = moment.tz.guess();
    let localTime = moment().tz(localTimeZone);

    let localTimeElement = localElement.querySelector(".time");
    let localDateElement = localElement.querySelector(".date");
    let localNameElement = localElement.querySelector(".city-name");

    let localCityName = localTimeZone.replace("_", " ").split("/")[1];

    localTimeElement.innerHTML = `${localTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
    localDateElement.innerHTML = `${localTime.format("MMMM Do YYYY")}`;
    localNameElement.innerHTML = `${localCityName}`;
  }
}

//Select city on dropdown and show city's time

function updateCity(event) {
  setInterval(
    function () {
      let cityElement = document.querySelector("#cities");

      const selectElement = document.getElementById("city-list");
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      const selectedOptionHtml = selectedOption.innerHTML;

      if (event.target.value.length > 0) {
        let cityTime = moment().tz(event.target.value);

        cityElement.innerHTML = `<div class="col">
          <h2 class="city-name">${selectedOptionHtml}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="col">
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <div class="back"><a href="/">Back to Local Time</a></div>`;
      }
    },

    1000
  );
}

let cityList = document.getElementById("city-list");
cityList.addEventListener("change", updateCity);

showTime();
setInterval(showTime, 1000);
