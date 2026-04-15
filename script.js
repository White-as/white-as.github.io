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

function calculateScore(car, cars) {
  const powers = cars.map(c => c.power);
  const prices = cars.map(c => c.price);
  const accs = cars.map(c => c.zeroTo100);

  const minPower = Math.min(...powers);
  const maxPower = Math.max(...powers);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const minAcc = Math.min(...accs);
  const maxAcc = Math.max(...accs);

  const powerScore = (car.power - minPower) / (maxPower - minPower);

  const priceScore = 1 - (car.price - minPrice) / (maxPrice - minPrice);

  const accScore = 1 - (car.zeroTo100 - minAcc) / (maxAcc - minAcc);

  const total =
    powerScore  * 0.25 +
    priceScore * 0.35 +
    accScore * 0.4;

  return total;
}

  function shortByscore() {
    currentCars.sort((a, b) => 
                    calculateScore (b, currentCars) - calculateScore(a, currentCars)); 
    render();
    
  }

render();
