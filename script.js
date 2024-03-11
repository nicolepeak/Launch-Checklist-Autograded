//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;

  let listedPlanetsResponse = myFetch();
  console.log(listedPlanetsResponse);

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      const selectedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image
      );
      console.log(selectedPlanet);
    });
  document.addEventListener("submit", (event) => {
    event.preventDefault();
    let list = document.getElementById("faultyItems");
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
  });
});
