import "./style.css";
const container = document.querySelector(".container");
const city = document.getElementById("city");
btn.addEventListener("click", function (e) {
  const divBlock = document.createElement("div");
  const paragraph = document.createElement("p");
  const lat = document.createElement("p");
  const long = document.createElement("p");
  e.preventDefault();
  let cityInput = encodeURIComponent(city.value);
  validateInput(cityInput);

  const apiPoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityInput}?unitGroup=us&key=QU5HL3GNEYWVZ4U4N7AZDRS6C&contentType=json`;
  fetch(apiPoint)
    .then((response) => {
      return response.json();
    })

    .then((response) => {
      const {
        address,
        currentConditions,
        days,
        description,
        latitude,
        longitude,
      } = { ...response };

      paragraph.textContent = address;
      lat.textContent = latitude;
      long.textContent = longitude;
      divBlock.append(paragraph);
      divBlock.append(lat);
      divBlock.append(long);
      container.append(divBlock);
      console.log(currentConditions);
      for (const [key, val] of Object.entries(currentConditions)) {
        const ulList = document.createElement("ul");
        const liList = document.createElement("li");
        const liKey = document.createElement("li");
        liList.textContent = key;
        liKey.textContent = val;
        ulList.appendChild(liList);
        ulList.appendChild(liKey);
        ulList.classList.add("ulClass");
        divBlock.append(ulList);
      }
    })
    .catch((err) => console.log(err));
  city.value = "";
});

function validateInput(element) {
  if (!element || element == null) {
    container.innerHTML = `<div class="">  please verify the city name  </div>`;
    return element;
  }
}
