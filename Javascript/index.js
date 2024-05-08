function updateTime() {

    let location1Element = document.querySelector ("#kingston");
    let location1DateElement = document.querySelector(".date");
    let location1TimeElement = document.querySelector(".time");
    let location1Time = moment();
    location1DateElement.innerHTML = location1Time.format("MMMM Do YYYY");
    location1TimeElement.innerHTML = location1Time.format("h:mm:ss [<small>]A[</small>]");
}
  
  
  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);