const url = "https://swapi.dev/api/starships/";

const app = document.querySelector("#results");

let starships = [];

const fetchData = (url) => {
  // REtrieve the data from the API
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let arr = data.results;
      console.log(arr);
      arr.forEach((element) => {
        starships.push(element);
      });
      return data.results;
    })
    .catch((error) => console.log(error));
};

fetchData(url);

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line
  container.classList.add("grid-container");

  container.style.backgroundColor = "white";
  container.style.borderRadius = "10px";
  container.style.width = "25em";
  container.style.margin = "10px";
  container.style.padding = "10px";

  const name = document.createElement("p");
  const nameB = document.createElement("b");
  nameB.textContent = spaceship.name;
  name.appendChild(nameB);
  name.classList.add("grid-item", "name");

  const cost = document.createElement("p");
  const costB = document.createElement("b");
  costB.textContent =
    parseInt(spaceship.cost_in_credits).toLocaleString() + " credits";
  cost.appendChild(costB);
  cost.classList.add("grid-item", "cost");

  const manufacturer = document.createElement("p");
  manufacturer.textContent = "Manufactured by " + spaceship.manufacturer;
  manufacturer.classList.add("grid-item", "manufacturer");

  const maxAS = document.createElement("p");
  const speedValue = document.createElement("b");
  speedValue.textContent = parseInt(
    spaceship.max_atmosphering_speed
  ).toLocaleString();
  const speedLabel = document.createElement("span");
  speedLabel.textContent = " Max atmosphering speed";
  maxAS.appendChild(speedValue);
  maxAS.appendChild(document.createElement("br")); // Line break
  maxAS.appendChild(speedLabel);
  maxAS.classList.add("grid-item", "maxAS");

  const cargo = document.createElement("p");
  const cargoN = document.createElement("b");
  cargoN.textContent = parseInt(spaceship.cargo_capacity).toLocaleString();
  const cargoLabel = document.createElement("span");
  cargoLabel.textContent = " Cargo Capacity";
  cargo.appendChild(cargoN);
  cargo.appendChild(document.createElement("br")); // Line break
  cargo.appendChild(cargoLabel);
  cargo.classList.add("grid-item", "capacity");

  container.append(name);
  container.append(cost);
  container.append(manufacturer);
  container.append(maxAS);
  container.append(cargo);

  document.body.append(container);

  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  let newArr = [];
  input.forEach((element) => {
    if (element.passengers < 10 && element.crew > 1) {
      newArr.push(element);
    }
  });
  return newArr;
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  let totalCost = 10;

  input.forEach((element) => {
    let cost = element.cost_in_credits;
    if (cost != "unknown") {
      totalCost = totalCost + parseInt(element.cost_in_credits);
    }
  });

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
