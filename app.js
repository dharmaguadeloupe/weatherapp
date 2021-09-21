window.addEventListener("load", () => {
  let long;
  let lat;
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.weatherapi.com/v1/current.json?key=d02f5db05cfe4fe987d110951211509&q=${lat},${long}`;

      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const {temp_c} = data.current;
        const {text} = data.current.condition;
        const {region} = data.location;
        //Set DOM elements from the API
        temperatureDegree.textContent = temp_c;
        temperatureDescription.textContent = text;
        locationTimezone.textContent = region;
      });
    });
  }
});