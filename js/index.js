// on load

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
        <div class="back"><a href="/">Go back</a></div>`;
      }
    },

    1000
  );
}

let cityList = document.getElementById("city-list");
cityList.addEventListener("change", updateCity);
