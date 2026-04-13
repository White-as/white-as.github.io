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
      <div>Price: €${car.price}</div>
      <div>HP: ${car.hp}</div>
    `;

    list.appendChild(div);
  });
}

function sortByPrice() {
  currentCars.sort((a, b) => a.price - b.price);
  render();
}

function sortByHP() {
  currentCars.sort((a, b) => b.hp - a.hp);
  render();
}

function resetData() {
  currentCars = [...cars];
  render();
}

render();