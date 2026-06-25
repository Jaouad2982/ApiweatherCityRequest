btn.addEventListener("click", function (e) {
  e.preventDefault();
  let cityInput = encodeURIComponent(city.value);

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
      const container = document.querySelector(".container");
      const divBlock = document.createElement("div");
      const paragraph = document.createElement("p");
      const lat = document.createElement("p");
      const long = document.createElement("p");
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
        console.log(val, "====", key);
      }
    })
    .catch((err) => console.log(err));
  city.value = "";
});
