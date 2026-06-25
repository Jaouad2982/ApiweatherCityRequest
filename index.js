console.log("fetch api");
const city = document.getElementById("city");
const btn = document.getElementById("btn");
console.log(btn);
console.log(city);
const divBlock = document.createElement("div");
const divInfo = document.createElement("div");
const divDay = document.createElement("div");
divBlock.classList.add("divBlockCss");
divDay.classList.add("divDay");
const paragraph = document.createElement("p");
const container = document.querySelector(".container");
divBlock.append(paragraph);
divBlock.append(divInfo);
divBlock.append(divDay);
container.appendChild(divBlock);

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let cityInput = encodeURIComponent(city.value);

  const apiPoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityInput}?unitGroup=us&key=QU5HL3GNEYWVZ4U4N7AZDRS6C&contentType=json`;
  fetch(apiPoint)
    .then((response) => {
      return response.json();
    })

    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
  city.value = "";
});

//https://visualcrossing.com[CITY_NAME]?key=QU5HL3GNEYWVZ4U4N7AZDRS6C
