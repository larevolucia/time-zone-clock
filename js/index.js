function showTime(event) {
  let cityElement = document.querySelector("#city-data");
  let cityDateElement = cityElement.querySelector(".date");
  let cityTimeElement = cityElement.querySelector(".time");

  const selectElement = document.getElementById("city-list");
  const cityDiv = document.querySelector(".city-name");
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedOptionHtml = selectedOption.innerHTML;

  if (event.target.value.length > 0) {
    let cityTime = moment().tz(event.target.value);

    cityDateElement.innerHTML = `${cityTime.format("MMMM Do YYYY")}`;
    cityTimeElement.innerHTML = `${cityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;

    cityDiv.innerHTML = selectedOptionHtml;
  }
}

let cityList = document.getElementById("city-list");
cityList.addEventListener("change", showTime);

setInterval(function () {
  const event = { target: document.getElementById("city-list") };
  showTime(event);
}, 1000);
