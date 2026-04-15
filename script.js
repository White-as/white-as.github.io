let currentCars = [...cars];

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  currentCars.forEach(car => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <div class="card-top">
        <img src="${car.img}" class="car-image" />

        <div class="title-box">
          <div class="title">${car.name}</div>
        </div>
      </div>

      <div class="info-list">
        <div class="info">Owner: ${car.owner}</div>
        <div class="info">Vessel(optional): ${car.vessel}</div>
        <div class="info">Power: ${car.power} kW</div>
        <div class="info">0-100 km/h: ${car.zeroTo100} s</div>
        <div class="info">Price: €${car.price}</div>
      </div>
    `;

    list.appendChild(div);
  });
}

function sortByPrice() {
  currentCars.sort((a, b) => b.price - a.price);
  render();
}

function sortByHP() {
  currentCars.sort((a, b) => b.power - a.power);
  render();
}

function resetData() {
  currentCars = [...cars];
  render();
}

render();
