function updateTime() {
 
    let kingstonElement = document.querySelector("#kingston");
    if (kingstonElement) {
      let kingstonDateElement = kingstonElement.querySelector(".date");
      let kingstonTimeElement = kingstonElement.querySelector(".time");
      let kingstonTime = moment().tz("America/Jamaica");
  
    kingstonDateElement.innerHTML = kingstonTime.format("MMMM	Do YYYY");
      kingstonTimeElement.innerHTML = kingstonTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    let saoPauloElement = document.querySelector("#sao_paulo");
    if (saoPauloElement) {
      let saoPauloDateElement = saoPauloElement.querySelector(".date");
      let saoPauloTimeElement = saoPauloElement.querySelector(".time");
      let saoPauloTime = moment().tz("America/Sao_Paulo");
  
      saoPauloDateElement.innerHTML = saoPauloTime.format("MMMM	Do YYYY");
      saoPauloTimeElement.innerHTML = saoPauloTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }

    let castriesElement = document.querySelector("#castries");
    if (castriesElement) {
      let castriesDateElement = castriesElement.querySelector(".date");
      let castriesTimeElement = castriesElement.querySelector(".time");
      let castriesTime = moment().tz("America/St_Lucia");
  
      castriesDateElement.innerHTML = castriesTime.format("MMMM	Do YYYY");
      castriesTimeElement.innerHTML = castriesTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
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
    <a href="/">All Locations</a>
    `;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);