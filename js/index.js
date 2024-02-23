//function updateTime() {
//   //    Rio de Janeiro

//   let rioDeJaneiroElement = document.querySelector("#rio-de-janeiro");
//   let rioDeJaneiroDateElement = rioDeJaneiroElement.querySelector(".date");
//   let rioDeJaneiroTimeElement = rioDeJaneiroElement.querySelector(".time");
//   let rioDeJaneiroTime = moment().tz("Brazil/East");
//   rioDeJaneiroDateElement.innerHTML = `${rioDeJaneiroTime.format(
//     "MMMM Do YYYY"
//   )}`;
//   rioDeJaneiroTimeElement.innerHTML = `${rioDeJaneiroTime.format(
//     "h:mm:ss [<small>]A[</small>]"
//   )}`;

//   //    Amsterdam

//   let amsterdamElement = document.querySelector("#amsterdam");
//   let amsterdamDateElement = amsterdamElement.querySelector(".date");
//   let amsterdamTimeElement = amsterdamElement.querySelector(".time");
//   let amsterdamTime = moment().tz("Europe/Amsterdam");
//   amsterdamDateElement.innerHTML = `${amsterdamTime.format("MMMM Do YYYY")}`;
//   amsterdamTimeElement.innerHTML = `${amsterdamTime.format(
//     "h:mm:ss [<small>]A[</small>]"
//   )}`;

//   //    Tokyo

//   let tokyoElement = document.querySelector("#tokyo");
//   let tokyoDateElement = tokyoElement.querySelector(".date");
//   let tokyoTimeElement = tokyoElement.querySelector(".time");
//   let tokyoTime = moment().tz("Asia/Tokyo");
//   tokyoDateElement.innerHTML = `${tokyoTime.format("MMMM Do YYYY")}`;
//   tokyoTimeElement.innerHTML = `${tokyoTime.format(
//     "h:mm:ss [<small>]A[</small>]"
//   )}`;
// }
// updateTime();
// setInterval(updateTime, 1000);

function showTime(event) {
  let cityElement = document.querySelector("#city-data");
  let cityDateElement = cityElement.querySelector(".date");
  let cityTimeElement = cityElement.querySelector(".time");
  let cityTime = moment().tz(event.target.value);

  if (event.target.value.length > 0) {
    cityDateElement.innerHTML = `${cityTime.format("MMMM Do YYYY")}`;
    cityTimeElement.innerHTML = `${cityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
    document.getElementById("city-name").textContent = selectedText;
  }
}

let cityList = document.getElementById("city-list");
cityList.addEventListener("change", showTime);
