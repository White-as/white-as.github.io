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
      <div>Kw: ${car.kw}</div>
      <div>Odo: ${car.odo}</div>
      <div>Price: €${car.price}</div>
    `;

    list.appendChild(div);
  });
}

function sortByPrice() {
  currentCars.sort((a, b) => a.price - b.price);
  render();
}

function sortByHP() {
  currentCars.sort((a, b) => b.kw - a.kw);
  render();
}

function resetData() {
  currentCars = [...cars];
  render();
}

render();