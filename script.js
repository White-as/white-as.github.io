let currentCars = [...cars];

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  currentCars.forEach(car => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${car.img}" />
      <div>${car.name}</div>
      <div>Owner: ${car.owner}</div>
      <div>Power: ${car.power} kW</div>
      <div>0-100kmh: ${car.0-100kmh} Sec</div>
      <div>Price: ${car.price} €</div>
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
